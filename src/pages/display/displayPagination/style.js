import styled from 'styled-components';

const S = {};

S.Wrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
  margin: 20px 0;
`

S.Button = styled.div`
  width: 9px;
  height: 20px;
  color: ${(props) => (props.active ? '#FF3333' : '#6E7476')};
  cursor: pointer;
  display: flex;
  align-items: center; 
  justify-content: center;

  &:hover {
    color: #333333;
  }
`

S.Icon = styled.img`
  width: 20px;
  height: 20px;
`

export default S;