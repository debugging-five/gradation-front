// import React from 'react';
// import { Outlet, useNavigate, useParams } from 'react-router-dom';
// import S from './style';

// const ExhibitionCategory = () => {
//   const { category } = useParams();
//   const navigate = useNavigate();

//   const gradationExhibition = () => {
//     navigate(`/exhibition/gradation`);
//   }
//   const universityExhibition = () => {
//     navigate(`/exhibition/university`);
//   }

//   return (
//     <div>
//       <S.CategoryWrapper>
//         <S.TypeDiv>
//           {category === "gradation" ? 
//             <S.SelectedRed>그라데이션 전시회</S.SelectedRed> : 
//             <S.UnSelectedType onClick={gradationExhibition}>그라데이션 전시회</S.UnSelectedType>
//           }
//         </S.TypeDiv>
//         <S.Bar>|</S.Bar>
//         <S.TypeDiv>
//           {category === "university" ? 
//             <S.SelectedRed>대학교 전시회</S.SelectedRed> : 
//             <S.UnSelectedType onClick={universityExhibition}>대학교 전시회</S.UnSelectedType>
//           }
//         </S.TypeDiv>
//       </S.CategoryWrapper>

//       <Outlet />
//     </div>
//   );
// };

// export default ExhibitionCategory;