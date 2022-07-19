import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

const Container = styled.ul`
  list-style: none;
`;

const ButtonBox = styled.div`
  position: relative;
  width: 210px;
  height: 68px;
  background: ${(props) => (props.now ? '#455CEC' : 'white')};
  border-radius: 20px;
  margin-top: 8px;
  &:hover{
    background-color: #455CEC;
  }
`;

const BarBox = styled.div`
  display:flex;
  flex-direction: row;
  position: absolute;
  top:50%;
  transform: translateY(-50%);
  margin-left: 18px;
`;

const BarImg = styled.img`
  margin:0 18px 0 10px;
`;

const BarText = styled.li`
  white-space: nowrap;
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 26px;
  color: ${(props) => (props.now ? 'white' : '#C4CEE5')};
  ${ButtonBox}:hover & {
    color: white;
  }
`;

const NAV_ITEMS = [
  {
    text: '홈',
    imgPath: 'Home',
    path: '/',
  },
  {
    text: '내 정보',
    imgPath: 'Profile',
    path: '/profile',
  },
  {
    text: '선배찾기',
    imgPath: 'People',
    path: '/people',
  },
  {
    text: '메세지',
    imgPath: 'Message',
    path: '/chat',
  },
  {
    text: '도움',
    imgPath: 'Help',
    path: '/help',
  },
  {
    text: '로그아웃',
    imgPath: 'Logout',
    path: '/logout',
  },
]

const Bar = () => {
  const location = useLocation();

  return(
    <Container>{NAV_ITEMS.map(({ text, imgPath, path }) => {
        return (
          <ButtonBox key={path} now={location.pathname === path ? 1 : 0} >
            <Link to={path}         
                    style={{textDecoration: 'none',
                            display: 'block',
                            height: '68px' }}>
              <BarBox>
                <BarImg src={require('../../images/icon/' + imgPath + '.svg')} alt={text}/>
                <BarText now={location.pathname === path ? 1 : 0}>{text}</BarText>
              </BarBox>
            </Link>
          </ButtonBox>
        )})}
    </Container>
  )
}

export default Bar;