import React from 'react';
import * as S from '../../style';
import * as SA from './artistDetailModifyStyle';

const ArtistDetailModify = () => {
  return (
    <S.MainWrapper>
        <S.MainTitle>내 작가페이지 수정</S.MainTitle>

      <SA.Chepter>
        <SA.Title>작가 소개</SA.Title>
        <SA.InputContent/>
      </SA.Chepter>

      <SA.Chepter>
        <SA.CategoryBox>
          <SA.Title>작품분야</SA.Title>
          <div>한국화</div>
          <div>회화</div>
          <div>조각</div>
          <div>공예</div>
          <div>건축</div>
          <div>서예</div>
        </SA.CategoryBox>
        <S.EndBar/>
      </SA.Chepter>

      <SA.Chepter>
        <SA.Title>작가 이력</SA.Title>

        <S.EndBar/>
      </SA.Chepter>

      <SA.Chepter>
        <S.OneLine>
          <SA.Title>외부 링크 및 아이디</SA.Title>
          <SA.SmallTitle>기재한 외부링크 및 아이디는 작가 소개창에 공유됩니다.</SA.SmallTitle>
        </S.OneLine>

        <SA.SocialBox>
          <SA.Social>Instagram</SA.Social>
          <SA.Icon src="http://localhost:10000/files/api/get/insta.png?filePath=images/mypage" alt="default profile" />
          <S.Emptybox/>
          <p>gradation</p>
        </SA.SocialBox>
        <S.EndBar/>

        <SA.SocialBox>
          <SA.Social>Youtube</SA.Social>
          <SA.Icon src="http://localhost:10000/files/api/get/youtube.png?filePath=images/mypage" alt="default profile" />
          <S.Emptybox/>
          <p>www.test.com/sdkajhfgshvbjsk</p>
        </SA.SocialBox>
        <S.EndBar/>

        <SA.SocialBox>
          <SA.Social>Blog</SA.Social>
          <SA.Icon src="http://localhost:10000/files/api/get/blog.png?filePath=images/mypage" alt="default profile" />
          <S.Emptybox/>
          <p>www.test.com/sdkajhfgshvbjsk</p>
        </SA.SocialBox>
        <S.EndBar/>
      </SA.Chepter>

      <SA.Chepter>
        <S.OneLine>
          <SA.Title>작가 작품</SA.Title>
          <SA.SmallTitle>체크된 작품은 작가 배경화면으로 등록됩니다.</SA.SmallTitle>
        </S.OneLine>

          <SA.ArtGrid>
            <div>
              <S.ArtImage src="http://localhost:10000/files/api/get/eximage.png?filePath=images/mypage" alt="eximage" />
            </div>
          </SA.ArtGrid>
      </SA.Chepter>

      <S.ButtonDiv>
        <S.Button120x45R>페이지 수정</S.Button120x45R>
      </S.ButtonDiv>

    </S.MainWrapper>
  );
};

export default ArtistDetailModify;