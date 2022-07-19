import React, { useState, useEffect, useRef } from "react";
import Peer from "simple-peer"
import io  from "socket.io-client";
import './Video.css';

const socket = io.connect('http://localhost:5000',{
	cors:{ origin: '*'}
})

const App = () => {
  const [ me, setMe ] = useState("")
	const [ stream, setStream ] = useState()
	const [ receivingCall, setReceivingCall ] = useState(false)
	const [ caller, setCaller ] = useState("")
	const [ callerSignal, setCallerSignal ] = useState()
	const [ callAccepted, setCallAccepted ] = useState(false)
	const [ idToCall, setIdToCall ] = useState("")
	const [ callEnded, setCallEnded] = useState(false)
	const [ name, setName ] = useState("")
	const [ muted, setMuted ] = useState(false)
	const myVideo = useRef()
	const userVideo = useRef()
	const connectionRef= useRef()

	useEffect(() => {
		navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then((stream) => {
			setStream(stream)
				myVideo.current.srcObject = stream
		})

    socket.on("me", (id) => {
        setMe(id)
      })

		socket.on("callUser", (data) => {
			setReceivingCall(true)
			setCaller(data.from)
			setName(data.name)
			setCallerSignal(data.signal)
		})
	}, [])

	const callUser = (id) => {
		const peer = new Peer({
			initiator: true,
			trickle: false,
			stream: stream
		})
		peer.on("signal", (data) => {
			socket.emit("callUser", {
				userToCall: id,
				signalData: data,
				from: me,
				name: name
			})
		})
		peer.on("stream", (stream) => {
			
				userVideo.current.srcObject = stream
			
		})
		socket.on("callAccepted", (signal) => {
			setCallAccepted(true)
			peer.signal(signal)
		})

		connectionRef.current = peer
	}

	const answerCall =() =>  {
		setCallAccepted(true)
		const peer = new Peer({
			initiator: false,
			trickle: false,
			stream: stream
		})
		peer.on("signal", (data) => {
			socket.emit("answerCall", { signal: data, to: caller })
		})
		peer.on("stream", (stream) => {
			userVideo.current.srcObject = stream
		})

		peer.signal(callerSignal)
		connectionRef.current = peer
	}

	const leaveCall = () => {
		setCallEnded(true)
		connectionRef.current.destroy()
	}

	return (
		<div className="container">
			<div className="inputBox">
				<div>
					<input placeholder="이름" value={name} onChange={(e) => setName(e.target.value)}></input>
					<h2>내 RoomId : {me}</h2>
					<input placeholder="RoomId" value={idToCall} onChange={(e) => setIdToCall(e.target.value)}></input>
				</div>
			</div>
			<div className="video-container">
				<div className="video">
					{stream &&  <video playsInline muted={muted} ref={myVideo} autoPlay style={{ width: "600px" }} />}
				</div>
				<div className="video">
					{callAccepted && !callEnded ?
					<video playsInline muted={muted} ref={userVideo} autoPlay style={{ width: "600px"}} />:
					null}
				</div>
			</div>
			{receivingCall && !callAccepted ? (
						<div className="call">
							<div className="caller">
								<h1 >{name} is calling...</h1>
								<button onClick={answerCall}>수신</button>
							</div>
						</div>
					) : null}
			<div className="Box">
				<div className="myId">
					<div className="call-button">
						{callAccepted && !callEnded ? (
							<button onClick={leaveCall}>연결종료</button>
						) : (
							<button onClick={() => callUser(idToCall)}>전화</button>
						)}
					</div>
				</div>
				<div>
					<button className="muted" onClick={() => !muted ? setMuted(true) : setMuted(false)}>{muted ? "음소거중" : "음소거"}</button>
				</div>
					
			</div>
		</div>
	)
}

export default App;