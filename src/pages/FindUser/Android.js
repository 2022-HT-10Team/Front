// import React, { useState, useEffect } from "react";
// import styled from "styled-components";
// import axios from "axios";

// const Container = styled.div`
//   display: flex;
// `;

// const Box = styled.div`
//   position: relative;
//   width: 328px;
//   height: 186px;
//   background: #FFFFFF;
//   box-shadow: 20px 20px 40px rgba(0, 0, 0, 0.04);
//   border-radius: 20px;
// `;

// const Img = styled.img`
//   position: absolute;
//   left: 32px;
//   top: 32px;
//   width: 80px;
//   height: 80px;
// `;

// const TextBox = styled.div`
//   position: absolute;
//   top: 41px;
//   right: 80px;
//   &:last-child{
//     font-family: 'Roboto';
//     font-style: normal;
//     font-weight: bold;
//     font-size: 18px;
//     line-height: 21px;
//     color: #444444;
//   }
//   div {
//     span{
//       font-family: 'Noto Sans KR';
//       font-style: normal;
//       font-weight: bold;
//       font-size: 18px;
//       line-height: 26px;
//       margin-right: 8px;
//     }
//   }
// `;

// const Major = styled.div`
//   margin-top: 8px;
// `;

// const Belong = styled.div`
//   position: absolute;
//   left: 32px;
//   bottom: 32px;
//   font-family: 'Noto Sans KR';
//   font-style: normal;
//   font-weight: 500;
//   font-size: 18px;
//   line-height: 26px;
//   letter-spacing: -0.02em;
//   color: #444444;
// `;

// const Button = styled.button`
//   position: absolute;
//   right: 32px;
//   bottom: 32px;
//   cursor: pointer;
//   background: #F0F4FD;
//   border: none;
//   border-radius: 20px;
//   width: 48px;
//   height: 48px;
// `;

// const Android = () => {
//   return(
//     <Container>
//       <div style={{marginLeft: '68px'}}>
//         {ITEMS.ItemList.map(({text, num, ma, in}) => 
//         <Box key={name}>
//           <Img src={require('../../images/profile/1.svg').default} alt='프로필'/>
//           <TextBox>
//             <div>
//               <span>{text}</span>
//               <span style={{color: '#A0A0A0'}}>{num}</span>
//             </div>
//             <Major>{ma}</Major>
//           </TextBox>
//           <Belong>{in}</Belong>
//           <Button><img src={require('../../images/icon/Message2.svg').default} alt='채팅'/></Button>
//         </Box>)}
//       </div>
//     </Container>
//   )
// }

// const ITEMS = [
//   {
//     text: '김서현',
//     num: '1기',
//     ma: 'Android',
//     in: '카카오톡',
//   },
//   {
//     text: '김서현',
//     num: '1기',
//     ma: 'Android',
//     in: '카카오톡',
//   },
//   {
//     text: '김서현',
//     num: '1기',
//     ma: 'Android',
//     in: '카카오톡',
//   },
//   {
//     text: '김서현',
//     num: '1기',
//     ma: 'Android',
//     in: '카카오톡',
//   },
//   {
//     text: '김서현',
//     num: '1기',
//     ma: 'Android',
//     in: '카카오톡',
//   },
//   {
//     text: '김서현',
//     num: '1기',
//     ma: 'Android',
//     in: '카카오톡',
//   },
//   {
//     text: '김서현',
//     num: '1기',
//     ma: 'Android',
//     in: '카카오톡',
//   },
//   {
//     text: '김서현',
//     num: '1기',
//     ma: 'Android',
//     in: '카카오톡',
//   },
//   {
//     text: '김서현',
//     num: '1기',
//     ma: 'Android',
//     in: '카카오톡',
//   },
//   {
//     text: '김서현',
//     num: '1기',
//     ma: 'Android',
//     in: '카카오톡',
//   },
//   {
//     text: '김서현',
//     num: '1기',
//     ma: 'Android',
//     in: '카카오톡',
//   },
//   {
//     text: '김서현',
//     num: '1기',
//     ma: 'Android',
//     in: '카카오톡',
//   },
//   {
//     text: '김서현',
//     num: '1기',
//     ma: 'Android',
//     in: '카카오톡',
//   },
//   {
//     text: '김서현',
//     num: '1기',
//     ma: 'Android',
//     in: '카카오톡',
//   },
//   {
//     text: '김서현',
//     num: '1기',
//     ma: 'Android',
//     in: '카카오톡',
//   },
//   {
//     text: '김서현',
//     num: '1기',
//     ma: 'Android',
//     in: '카카오톡',
//   },
//   {
//     text: '김서현',
//     num: '1기',
//     ma: 'Android',
//     in: '카카오톡',
//   },
//   {
//     text: '김서현',
//     num: '1기',
//     ma: 'Android',
//     in: '카카오톡',
//   },
//   {
//     text: '김서현',
//     num: '1기',
//     ma: 'Android',
//     in: '카카오톡',
//   },
//   {
//     text: '김서현',
//     num: '1기',
//     ma: 'Android',
//     in: '카카오톡',
//   },
//   {
//     text: '김서현',
//     num: '1기',
//     ma: 'Android',
//     in: '카카오톡',
//   },
//   {
//     text: '김서현',
//     num: '1기',
//     ma: 'Android',
//     in: '카카오톡',
//   },
//   {
//     text: '김서현',
//     num: '1기',
//     ma: 'Android',
//     in: '카카오톡',
//   },
//   {
//     text: '김서현',
//     num: '1기',
//     ma: 'Android',
//     in: '카카오톡',
//   },
//   {
//     text: '김서현',
//     num: '1기',
//     ma: 'Android',
//     in: '카카오톡',
//   },
//   {
//     text: '김서현',
//     num: '1기',
//     ma: 'Android',
//     in: '카카오톡',
//   },
//   {
//     text: '김서현',
//     num: '1기',
//     ma: 'Android',
//     in: '카카오톡',
//   },
//   {
//     text: '김서현',
//     num: '1기',
//     ma: 'Android',
//     in: '카카오톡',
//   },
//   {
//     text: '김서현',
//     num: '1기',
//     ma: 'Android',
//     in: '카카오톡',
//   },
//   {
//     text: '김서현',
//     num: '1기',
//     ma: 'Android',
//     in: '카카오톡',
//   },
  
// ]

// export default Android;