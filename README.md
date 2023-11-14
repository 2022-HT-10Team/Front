# Calling U - Web
![home](https://github.com/seohyeon1578/Baekjoon/assets/84362569/187b94a2-dfc8-40e7-9b2e-db73298e4524)

<br>

## 프로젝트 소개

` 저희 학교는 1년에 한 두번 정도 실무에서 일하고 계신 졸업생 선배님들이 오셔서 강의나 팁 같은 것을 알려주십니다. 하지만 졸업생이 오는 날에 사정이 있어 참가하지 못하는 학생들도 많아서 취업에 관한 팁을 모르거나, 포트폴리오 작성을 어려워 하는 학생들이 많습니다. 그래서 저희는 졸업생과 재학생간에 커뮤니케이션이 가능하도록 도와주는 서비스인 CallingU를 기획하고 개발했습니다. `

<br>

## 개발 환경

- Front: React.js, JavaScript, styled-components, @stream-io
- Back: go
- [디자인](https://www.figma.com/file/ojuAevLBuwvr62z6UGFxot/Calling-u?type=design&node-id=0-1&mode=design&t=yLFyHodfQoJIM285-0)

<br>

## 역할 분담

### 김서현
Front-end
- main 페이지
- 로그인 페이지
- 회원가입 페이지
- 게시글 페이지 글 생성 구현
- 프로필 수정 페이지
- 선배 리스트 페이지
- 채팅 구현 (getStream api 사용)
- 화상 회의 구현

### 김영성
Design
- 모든 페이지 ui/ux
- animation design

### 박성한
Back-end
- 로그인/회원가입 API 구현
- 게시글 작성 / 수정 / 삭제 API 구현
- 각 분야 필터링 API 구현
- 화상 회의 Server 구현

<br>

## 페이지별 기능

### [메인 화면]
- 서비스 접속시 로그인이 되어있다면 초기화면이 됩니다.
- 내 프로필을 확인할 수 있습니다.
- 최근 작성된 게시물을 확인할 수 있습니다.
- 추천 선배를 볼 수 있습니다.
- 현재 활동중인 선배 리스트를 볼 수 있습니다.

| 메인 화면 |
|----------|
|![splash](https://github.com/seohyeon1578/Baekjoon/assets/84362569/187b94a2-dfc8-40e7-9b2e-db73298e4524)|

### [로그인 화면]
- 서비스에 로그인 할 수 있습니다.
- 회원가입된 id가 아니거나 비밀번호가 틀리면 로그인을 할 수 없습니다.

| 로그인 화면 |
|----------|
|![login](https://github.com/seohyeon1578/Baekjoon/assets/84362569/1d3d7469-55ea-45fd-ae0b-69605cc3a8fb)|

### [회원가입 화면]
- 재학생 또는 졸업생으로 서비스에 회원가입을 할 수 있습니다.

| 회원가입 화면 |
|----------|
|![signUp](https://github.com/seohyeon1578/Baekjoon/assets/84362569/60c4dbed-2007-444c-b9e2-08018d19c4b7)|

### [내 정보 화면]
- 본인의 정보를 확인할 수 있습니다.
- 프로필을 수정하거나 비밀번호를 변경할 수 있습니다.

| 내 정보 화면 |
|----------|
|![account](https://github.com/seohyeon1578/Baekjoon/assets/84362569/329c0977-6a7b-4f31-add5-1d3d2a950319)|

### [채팅 화면]
- 다른 사용자와 채팅을 할 수 있습니다.

| 채팅 화면 |
|----------|
|![chat](https://github.com/seohyeon1578/Baekjoon/assets/84362569/c66c88c3-637f-4f97-a74f-123fa8563cf5)|

### [선배 찾기 화면]
- 졸업한 선배를 찾을 수 있습니다.
- 전공에 맞춰 필터링을 할 수 있습니다.

| 선배 찾 화면 |
|----------|
|![chat](https://github.com/seohyeon1578/Baekjoon/assets/84362569/3c03d39b-7088-4ae5-8021-d3b61c55cd96)|

<br>

## 문제 상황 (Front)

- 짧은 시간안에 css와 기능을 다 많들기 힘들었다.
- jwt를 처음해보아서 jwt의 방법을 알지 못했다.
- 화상회의를 처음 만들어서 서버와 클라이언트에서 통신하는 방법을 알지 못했다.
- 상태관리가 힘들었다.

<br>

## 해결 방안

- WebRTC, JWT 등 부족한 개념을 찾아 공부하여 모르는 부분을 하나하나 알아갔다.
- socket.io를 사용하여 DOCS를 찾아보거나 서버와 하나하나 확인해 나가면서 기능을 구현하였다.

<br>

## 느낀점

### 김서현
- WebRTC의 동작 방식을 알게되었고 websocket 과 socket의 차이점을 알게되었다.
    
    <aside>
    💡 화상회의를 처음 만들다보니 잘 몰랐었는데, socket과 websocket의 차이점이 있어서 구현을 하는 과정에 있어서 이슈가 많았습니다. socket은 일반적으로 클라이언트와 서버 간에 통신을할 때 사용됩니다. 반면에, websocket은 실시간 웹 애플리케이션에서 사용됩니다. websocket을 사용하면 서버와 클라이언트 간에 지속적인 양방향 연결이 가능해지며, 클라이언트나 서버측에서 언제든지 데이터를 보낼 수 있습니다. 그리고 WebRTC는 P2P 통신을 통해 실시간 오디오 및 비디오 스트리밍을 가능하게하는 프로토콜입니다. 그래서 채팅을 구현할 때에는 websocket프로토콜을, 화상회의를 구현할 때에는 WebRTC를 사용해야한다는점을 알게되었습니다.
    
    </aside>
    
- JWT의 개념을 알게되었고 구현하는 방법에 대해알게되었다.
    
    <aside>
    💡 정적 웹 페이지만 만들다보니 서버와 통신하는 부분에서 부족한 점이 많았습니다. 그래서 서버와 대화를 하는데에 이해하지 못하는 부분들이 많았고, 서버에 대한 지식도 필요하다고 생각하게 되었습니다. 또한 CS(Computer Science) 지식뿐만아니라 넓은 범위의 지식이 필요하다고 느껴졌습니다.
    
    </aside>
    
- 짧은 시간 안에 문제점 분석, 기획, 개발, 테스트 과정을 겪으면서 시간 관리하는 방법을 배웠고 시간 관리의 중요성을 깨달았다.

<br>

## 시연영상
[video](https://github.com/seohyeon1578/video/blob/main/Calling-U.mp4)

<br>
