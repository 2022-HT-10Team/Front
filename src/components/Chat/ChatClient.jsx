import React, { useEffect, useState } from 'react';
import { StreamChat } from "stream-chat";
import { 
  Chat, 
  Channel, 
  MessageInput, 
  MessageList, 
  Thread, 
  Window, 
  LoadingIndicator,
  ChannelList, 
  useChannelStateContext,
  TypingIndicator,
  ChatAutoComplete,
  useMessageInputContext,
} from 'stream-chat-react';
import '@stream-io/stream-chat-css/dist/css/index.css';
import './Chat.css';

const apiKey = "kt5dnaesxc6f";

const CustomListPreview = (props) => {
  const { channel, setActiveChannel } = props;

  const { messages } = channel.state;
  const messagePreview = messages[messages.length - 1]?.text.slice(0, 7);

  return (
    <div onClick={() => setActiveChannel(channel)} className="flex">
      <img src={require('../../images/profile/1.svg').default} alt='프로필'/>
      <div className='messagePreview'>
        <div>
          <span className='user'>테스트</span>
          <span className='num'>1기</span>
        </div>
        <div>{messagePreview}</div>
      </div>
    </div>
  );

}

const CustomHeaderPreview = (props: ChannelHeaderProps) => {
  const { channel } = useChannelStateContext();
  const { name } = channel.data.name || {};

  const getPage = () => {
    window.open("http://localhost:3000/video")
   }

  return (
    <div className='str-chat__header-livestream'>
      <div>
        <div className='header-item'>
          <img src={require('../../images/profile/1.svg').default} 
               alt='프로필'
               style={{width: '80px',
                       height: '80px'}}/>
          <div>
            <span className='user'>테스트</span>
            <span className='num'>1기</span>
          </div>
          <div>Front-end</div>
        </div>
        <TypingIndicator />
      </div>
      <button className='videoBt' onClick={getPage}/>
    </div>
  );
}

const CustomMessageInput = () => {
  const { handleSubmit, } = useMessageInputContext();
  return(
    <div className='rel'>
      <ChatAutoComplete placeholder='메세지를 입력해주세요'/>
      <div onClick={handleSubmit}
           className="send">
        <img src={require('../../images/icon/Sending.svg').default} alt='프로필'/>
      </div>
    </div>
  )
}


const ChatClient = ({userToken,Id}) => {
  const [client, setClient] = useState(null);
  const [channel, setChanner] = useState(null);
  const [username, setUsername] = useState(userToken);
  
  console.log(username)
  const filters = { type: 'messaging', members: { $in: ['seohyeon1578']}}
  const sort = { last_message_at: -1 }

  useEffect(() => {
    const initChat = async () => {
      const chatClient = StreamChat.getInstance(apiKey);

      await chatClient.connectUser({
        id: 'seohyeon1578',
        name: 'seohyeon1578',
      },chatClient.devToken('seohyeon1578')); 

      const channel = chatClient.channel('messaging', 'react-talk',{
        name: 'react-talk',
        members: ['seohyeon1578'],
      });

      await channel.watch();

      setChanner(channel);
      setClient(chatClient);
    };

    initChat();

    if (client) return () => client.disconnectUser();
  }, []);

  if (!client || !channel) return <LoadingIndicator />;

  return(
    <Chat client={client} theme={'messaging light'}>
      <ChannelList
          filters={filters}
          sort={sort} 
          Preview={CustomListPreview}/>
      <Channel channel={channel} TypingIndicator={() => null} Input={CustomMessageInput}>
        <Window>
          <CustomHeaderPreview/>
          <MessageList />
          <MessageInput />
        </Window>
        <Thread />
      </Channel>
    </Chat>
  )
};

export default ChatClient;