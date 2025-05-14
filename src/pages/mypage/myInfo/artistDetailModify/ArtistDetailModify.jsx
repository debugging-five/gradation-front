import React from 'react';
import { ArtImage, Button120x45R, ButtonDiv, Emptybox, EndBar, MainTitle, MainWrapper, OneLine } from '../../style';
import { ArtGrid, CategoryBox, Chepter, Icon, InputContent, SmallTitle, Social, SocialBox, Title } from './artistDetailModifyStyle';

const ArtistDetailModify = () => {
  return (
    <MainWrapper>
        <MainTitle>내 작가페이지 수정</MainTitle>

      <Chepter>
        <Title>작가 소개</Title>
        <InputContent/>
      </Chepter>

      <Chepter>
        <CategoryBox>
          <Title>작품분야</Title>
          <div>한국화</div>
          <div>회화</div>
          <div>조각</div>
          <div>공예</div>
          <div>건축</div>
          <div>서예</div>
        </CategoryBox>
        <EndBar/>
      </Chepter>

      <Chepter>
        <Title>작가 이력</Title>

        <EndBar/>
      </Chepter>

      <Chepter>
        <OneLine>
          <Title>외부 링크 및 아이디</Title>
          <SmallTitle>기재한 외부링크 및 아이디는 작가 소개창에 공유됩니다.</SmallTitle>
        </OneLine>

        <SocialBox>
          <Social>Instagram</Social>
          <Icon src="http://localhost:10000/files/api/get/insta.png?filePath=images/mypage" alt="default profile" />
          <Emptybox/>
          <p>gradation</p>
        </SocialBox>
        <EndBar/>

        <SocialBox>
          <Social>Youtube</Social>
          <Icon src="http://localhost:10000/files/api/get/youtube.png?filePath=images/mypage" alt="default profile" />
          <Emptybox/>
          <p>www.test.com/sdkajhfgshvbjsk</p>
        </SocialBox>
        <EndBar/>

        <SocialBox>
          <Social>Blog</Social>
          <Icon src="http://localhost:10000/files/api/get/blog.png?filePath=images/mypage" alt="default profile" />
          <Emptybox/>
          <p>www.test.com/sdkajhfgshvbjsk</p>
        </SocialBox>
        <EndBar/>
      </Chepter>

      <Chepter>
        <OneLine>
          <Title>작가 작품</Title>
          <SmallTitle>체크된 작품은 작가 배경화면으로 등록됩니다.</SmallTitle>
        </OneLine>

          <ArtGrid>
            <div>
              <ArtImage src="http://localhost:10000/files/api/get/eximage.png?filePath=images/mypage" alt="eximage" />
            </div>
          </ArtGrid>
      </Chepter>

      <ButtonDiv>
        <Button120x45R>페이지 수정</Button120x45R>
      </ButtonDiv>

    </MainWrapper>
  );
};

export default ArtistDetailModify;