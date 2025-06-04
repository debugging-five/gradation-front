import styled from 'styled-components'
import { EN_H3, H10, H3, H6, H8 } from '../../../../styles/common';
import { Link } from 'react-router-dom';

const S = {};

S.Link = styled(Link)`
  text-decoration: none;
  color: inherit;
  cursor: pointer;
`

S.H3 = styled.p`
  ${H3}
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

S.Time = styled.span`
  margin-left: 8px;
  color: #6E7476;
  ${H8}
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

S.MoreMenu = styled.div`
  position: absolute;
  left: 1144px;
  background-color: #FBFCFC;
  border-radius: 2px;
  border: 1px solid #6E7476;
  :hover {
    color: #EE3333;
  }
`

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
`

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

// 페이지네이션
S.PagenationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  margin: 160px 0 0 0;
`

S.PagenationButton = styled.div`
  width: 9px;
  height: 20px;
  color: ${(props) => (props.$active ? '#FF3333' : '#6E7476')};
  cursor: pointer;
  display: flex;
  align-items: center; 
  justify-content: center;

  &:hover {
    color: #333333;
  }
`

S.PagenationIcon = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
`

export default S;