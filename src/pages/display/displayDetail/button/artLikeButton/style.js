import styled from 'styled-components'
import { EN_H3, EN_H6, H10, H2, H3, H5, H6, H8 } from '../../../../../styles/common';
import { Link } from 'react-router-dom';

const S = {};

S.Container = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
`

S.Detail = styled.div`
  display: flex;
  gap: 120px;
  margin: 70px 0 0 0;
`
S.LeftWrapper = styled.div`

`

S.ArtImg = styled.img`
  width: 558px;
`

S.ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin: 28px 0 0 0;

  .button {
    ${H5}
    width: 210px;
    height: 50px;
    border-radius: 3px;
    border: solid 1.5px #EE3333;
  }
`

S.LikeButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  /* color: #EE3333; */
  /* background-color: #FBFCFC; */
  background-color: ${({$isLiked}) => ($isLiked ? "#EE3333" : "#FBFCFC")};
  color: ${({$isLiked}) => ($isLiked ? "#FBFCFC" : "#EE3333")};
`

S.Link = styled(Link)`
  text-decoration: none;
  color: inherit;
  cursor: pointer;
`

S.ArtistButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  color: #FBFCFC;
  background-color: #EE3333;
`

S.MessageIcon = styled.img`
  width: 20px;
  height: 20px;
`

S.RightWrapper = styled.div`

`

S.TitleWrapper = styled.div`

`

S.Title = styled.p`
  ${H2}
  height: 36px;
`

S.Artist = styled.div`
  height: 25px;
  display: flex;
  margin: 8px 0 0 0;
  
  span {
    width: 8px;
    display: inline-block;
    margin: 0 4px;
  }
`

S.H3 = styled.p`
  ${H3}
`


S.LikeCountWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  height: 19px;
  color: #EE3333;
  margin: 44px 0 0 0;
  position: relative;
`

S.LikeLabel = styled.p`
  ${H5}
  width: 47px;
`

S.LikeCount = styled.p`
  ${H5}
  width: 66px;
`

S.NoticeIconWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  &:hover p {
    display: block;
  }
`;

S.NoticeIcon = styled.img`
  width: 16px;
  height: 16px;
`

S.Notice = styled.p`
  ${H10}
  display: none;
  margin-left: 6px;
  color: #6E7476;
`

S.ArtInfoContainer = styled.div`
  border-top: solid 1px #6E7476;
  border-bottom: solid 1px #6E7476;
  padding: 20px 0;
  width: 480px;
  margin: 14px 0 0 0;
`

S.ArtInfoWrapper = styled.div`
  display: flex;
  margin: 0 0 28px 0;
  height: 21px;

  &:last-child {
    margin-bottom: 0;
  }
`

S.ArtInfoLabel = styled.p`
  ${H5}
  width: 120px;
  margin: 0;
`

S.ArtInfo = styled.p`
  ${H8}
  color: #6E7476;
  width: 360px;
  margin: 0;
`


S.ArtDescription = styled.div`
  width: 480px;
  margin: 28px 0 0 0;

`

S.CommentContainer = styled.div`
  
`

S.CommentWrapper = styled.div`
  margin: 160px 0 0 0;
`

S.Line = styled.div`
  width: 1160px;
  height: 1px;
  background-color: #6E7476;
  margin: 0;
`

S.EnH3 = styled.p`
  ${EN_H3}
  color: #EE3333;
  height: 26px;
  padding: 0 0 12px 0; 
`

S.InputWrapper = styled.div`
  position: relative;
  width: 1160px;
`

S.Input = styled.textarea`
  ${H8}
  width: 100%;
  height: 177px;
  border-radius: 2px;
  border: solid 1px #6E7476;
  resize: none;
  background-color: #FBFCFC;
  padding: 12px;
  margin: 16px 0 0 0;
  box-sizing: border-box;
  outline: none;
`

S.CountButtonWrapper = styled.div`
  position: absolute;
  bottom: 18px;
  right: 12px;
  display: flex;
  align-items: center;
  gap: 12px;
`

S.Count = styled.span`
  ${H8}
  color: #6E7476;
`

S.RegisterButton = styled.button`
  background-color: #EE3333;
  border: solid 1.2px #EE3333;
  border-radius: 2px;
  color: #FBFCFC;
  ${H8}
  width: 75px;
  height: 35px;
  padding: 6px 12px;
`

S.Comment = styled.div`
  margin: 0 0 64px 0;

`

S.Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  width: 1132px;
`

S.ProfileWrapper = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  /* cursor: pointer; */
`

S.Profile = styled.img`
  /* width: 28px;
  height: 28px; */
  width: 32px;
  height: 32px;
  border-radius: 50px;
`

S.Name = styled.div`
  ${H6}
`

S.ArtistProfile = styled.div`
  ${H10}
  width: 32px;
  height: 20px;
  background-color: #EE3333;
  border-radius: 1px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #FBFCFC;
`

S.MoreIcon = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`

S.Content = styled.div`
  margin: 12px 0 0 40px;
  ${H8}
`

S.LikeWrapper = styled.div`
  display: flex;
  gap: 8px;
  margin: 16px 0 0 40px;
  cursor: pointer;
`

S.LikeIcon = styled.img`
  width: 16px;
  height: 16px;
`

S.LikeCount = styled.p`
  ${EN_H6}

  .unit {
    ${H5}
    margin: 0 0 0 2px;
  }
`

S.MoreMenu = styled.div`
  position: absolute;
  left: 1144px;
  background-color: #FBFCFC;
  border-radius: 2px;
  border: 1px solid #6E7476;
  :hover {
    color: #EE3333;
  }
`;


S.Menu = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
`

S.DropdownWrapper = styled.div`
  margin: 64px 0 40px 0;
  display: flex;
  align-items: center;
  gap: 4px;
`

S.DropdownButton = styled.div`
  width: 60px;
  height: 35px;
  border-radius: 2px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  ${H8}
`

S.DropdownIcon = styled.img`
  width: 16px;
  height: 16px;
`

S.Dropdown = styled.div`
  position: absolute;
  top: 100px; 
  left: auto;
  right: 0;
  background-color: #FBFCFC;
  border-radius: 2px;
  z-index: 100; 
  display: flex;
  flex-direction: column;
  border: 1px solid #6E7476;

  :hover {
    color: #EE3333;
    /* color: #FBFCFC; */
  }
`

S.Option = styled.div`
  width: 75px;
  height: 35px;
  ${H8}
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

S.ModifyWrapper = styled.div`
  position: relative;
  width: 100%;
  margin-top: 16px;
`;

S.ButtonContainer = styled.div`
  position: absolute;
  bottom: 18px;
  right: 12px;
  display: flex;
  gap: 10px;
`;


S.SaveButton = styled.button`
  /* position: absolute;
  bottom: 12px;
  right: 12px; */
  padding: 6px 16px;
  background-color: #EE3333;
  border: solid 1.2px #EE3333;
  border-radius: 2px;
  color: #FBFCFC;
  ${H8}
  width: 75px;
  height: 35px;
  padding: 6px 12px;
`

S.CancelButton = styled.button`
  /* position: absolute;
  bottom: 12px;
  right: 12px; */
  padding: 6px 16px;
  background-color: #FBFCFC;
  border: solid 1.2px #EE3333;
  border-radius: 2px;
  color: #EE3333;
  ${H8}
  width: 75px;
  height: 35px;
  padding: 6px 12px;
`


export default S;