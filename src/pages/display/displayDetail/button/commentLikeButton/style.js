import styled from 'styled-components'
import {EN_H6, H5} from '../../../../../styles/common';

const S = {};

S.LikeWrapper = styled.div`
  display: flex;
  gap: 8px;
  margin: 16px 0 0 40px;
  cursor: pointer;
  height: 20px;
`

S.LikeIcon = styled.img`
  width: 16px;
  height: 16px;
`

S.LikeCount = styled.p`
  ${EN_H6}
  /* color: ${({$count}) => ($count > 0 ? '#EE3333' : '#EEEEEE')}; */

  .unit {
    ${H5}
    margin: 0 0 0 2px;
  }
`

export default S;