import React, { useEffect, useRef, useState } from "react";
import * as S from "./UpcyclingMainStyle";
import { useNavigate } from "react-router-dom";

const UpcyclingMain = () => {
  const navigate = useNavigate();

  // 타임라인 줄그리기
  const StepItem = ({ number, numCircle, title, texts, isLast }) => {
    return (
      <S.Step $isLast={isLast}>
        <S.CircleContainer>
          <S.Number>{number}</S.Number>
          {numCircle}
        </S.CircleContainer>
        <S.TimelineContent>
          <S.TimelineTitle>{title}</S.TimelineTitle>
          {texts.map((line, i) => ( // 설명부분이 여러줄이라 배열을 맵으로 각각 랜더링
            <S.TimelineText key={i}>{line}</S.TimelineText>
          ))}
        </S.TimelineContent>
      </S.Step>
    );
  };

  const chapter2Ref = useRef(null);
  const [isImgVisible, setIsImgVisible] = useState(false);

  // 이미지들 애니메이션 효과
  useEffect(() => {
    const observer = new IntersectionObserver(
  // 요소가 일정 비율이상 보여지면 화면에 보인다고 세팅
      ([entry]) => {
        if (entry.isIntersecting) setIsImgVisible(true);
      },
      { threshold: 0.3 } // 30% 이상!
    );
  // 화면 스크롤로 해당 요소가 나타나면 entry.isIntersecting 조건이 발동
    if (chapter2Ref.current) { 
      observer.observe(chapter2Ref.current);
    }
  // 컴포넌트 언마운트 면 중단, 메모리 누수 방지용 정리 코드
    return () => {
      if (chapter2Ref.current) observer.unobserve(chapter2Ref.current);
    };
  }, []);

  const chapter3Ref = useRef(null);
  const [isChapter3Visible, setIsChapter3Visible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsChapter3Visible(true);
      },
      { threshold: 0.3 }
    );
    if (chapter3Ref.current) observer.observe(chapter3Ref.current);

    return () => {
      if (chapter3Ref.current) observer.unobserve(chapter3Ref.current);
    };
  }, []);


  return (
    <S.UpcyclingWrapper>
      <S.UpcycleTitle>upcycle</S.UpcycleTitle>
      <S.BannerContainer>
        <S.BannerImgContainer>
          <S.BannerImg
            src="http://localhost:10000/files/api/get/banner.png?filePath=images/upcycling/upcycling-main"
            alt="upcycling-banner1"
          />
          <S.BannerText>
            <p>"창작의 흔적이 환경과 미래를 망치는 폐기물이 되지 않도록."</p>
            <p>"이제는 변화를 만들어야 할 때 입니다."</p>
          </S.BannerText>
        </S.BannerImgContainer>
      </S.BannerContainer>

      <S.Chapter1>
        <S.Chapter1Title>"아름다움 뒤에 숨겨진 환경 문제"</S.Chapter1Title>
        <S.ChapterStats>
          <S.ChapterBox>
            <S.StatsTitle>9,739회</S.StatsTitle>
            <S.StatsDesc>2024년 국내 미술 전시회</S.StatsDesc>
          </S.ChapterBox>
          <S.ChapterBox>
            <S.StatsTitle>200,000톤</S.StatsTitle>
            <S.StatsDesc>한해 전시회에서 발생되는 폐기물</S.StatsDesc>
          </S.ChapterBox>
          <S.ChapterBox>
            <S.StatsTitle>화학 물질</S.StatsTitle>
            <S.StatsDesc>
              <p>희석용제, 부식액, 스프레이 등</p>
              <p>인체와 환경에 유해한 물질</p>
            </S.StatsDesc>
          </S.ChapterBox>
          <S.ChapterBox>
            <S.StatsTitle>5%</S.StatsTitle>
            <S.StatsDesc>
              <p>연간 재활용 되는</p>
              <p>폐기물 비율</p>
            </S.StatsDesc>
          </S.ChapterBox>
        </S.ChapterStats>
      </S.Chapter1>

      <S.Chapter2>
        <S.Chapter2Img
          ref={chapter2Ref}
          src="http://localhost:10000/files/api/get/chepter-2.png?filePath=images/upcycling/upcycling-main"
          alt="upcycling-banner1"
          $isVisible={isImgVisible}
        />
      </S.Chapter2>


      <S.Chapter3 ref={chapter3Ref}>
        <S.Chapter3Title>"폐기물이 새 새명을 얻는 순환의 과정</S.Chapter3Title>
        <S.Chapter3TopImg $isVisible={isChapter3Visible}>
          <S.StepImg
            src="http://localhost:10000/files/api/get/step1.png?filePath=images/upcycling/upcycling-main"
            alt="step1"
          />
          <S.ArrowImg
            src="http://localhost:10000/files/api/get/arrow.png?filePath=images/upcycling/upcycling-main"
            alt="arrow"
          />
          <S.StepImg
            src="http://localhost:10000/files/api/get/step2.png?filePath=images/upcycling/upcycling-main"
            alt="step2"
          />
          <S.ArrowImg
            src="http://localhost:10000/files/api/get/arrow.png?filePath=images/upcycling/upcycling-main"
            alt="arrow"
          />
          <S.StepImg
            src="http://localhost:10000/files/api/get/step3.png?filePath=images/upcycling/upcycling-main"
            alt="step3"
          />
          <S.ArrowImg
            src="http://localhost:10000/files/api/get/arrow.png?filePath=images/upcycling/upcycling-main"
            alt="arrow"
          />
          <S.StepImg
            src="http://localhost:10000/files/api/get/step4.png?filePath=images/upcycling/upcycling-main"
            alt="step4"
          />
        </S.Chapter3TopImg>
          <S.Chapter3Labels $isVisible={isChapter3Visible}>재생 캔버스, 친환경 에코백</S.Chapter3Labels>
        <S.Chapter3MidImg $isVisible={isChapter3Visible}>
          <S.StepImg
            src="http://localhost:10000/files/api/get/step5.png?filePath=images/upcycling/upcycling-main"
            alt="step5"
          />
          <S.ArrowImg
            src="http://localhost:10000/files/api/get/arrow.png?filePath=images/upcycling/upcycling-main"
            alt="arrow"
          />
          <S.StepImg
            src="http://localhost:10000/files/api/get/step6.png?filePath=images/upcycling/upcycling-main"
            alt="step6"
          />
          <S.ArrowImg
            src="http://localhost:10000/files/api/get/arrow.png?filePath=images/upcycling/upcycling-main"
            alt="arrow"
          />
          <S.StepImg
            src="http://localhost:10000/files/api/get/step7.png?filePath=images/upcycling/upcycling-main"
            alt="step7"
          />
          <S.ArrowImg
            src="http://localhost:10000/files/api/get/arrow.png?filePath=images/upcycling/upcycling-main"
            alt="arrow"
          />
          <S.StepImg
            src="http://localhost:10000/files/api/get/step8.png?filePath=images/upcycling/upcycling-main"
            alt="step8"
          />
        </S.Chapter3MidImg>
        <S.Chapter3Labels $isVisible={isChapter3Visible}>재생 크레용</S.Chapter3Labels>
        <S.Chapter3BottomImg $isVisible={isChapter3Visible}>
          <S.StepImg
            src="http://localhost:10000/files/api/get/step9.png?filePath=images/upcycling/upcycling-main"
            alt="step9"
          />
          <S.ArrowImg
            src="http://localhost:10000/files/api/get/arrow.png?filePath=images/upcycling/upcycling-main"
            alt="arrow"
          />
          <S.StepImg
            src="http://localhost:10000/files/api/get/step10.png?filePath=images/upcycling/upcycling-main"
            alt="step10"
          />
          <S.ArrowImg
            src="http://localhost:10000/files/api/get/arrow.png?filePath=images/upcycling/upcycling-main"
            alt="arrow"
          />
          <S.StepImg
            src="http://localhost:10000/files/api/get/step11.png?filePath=images/upcycling/upcycling-main"
            alt="step11"
          />
          <S.ArrowImg
            src="http://localhost:10000/files/api/get/arrow.png?filePath=images/upcycling/upcycling-main"
            alt="arrow"
          />
          <S.StepImg
            src="http://localhost:10000/files/api/get/step12.png?filePath=images/upcycling/upcycling-main"
            alt="step12"
          />
        </S.Chapter3BottomImg>
        <S.Chapter3Labels $isVisible={isChapter3Visible}>목재 프레임</S.Chapter3Labels>
      </S.Chapter3>

      <S.Chapter4>
        <StepItem
          number="01"
          numCircle={<S.BlueCircle />}
          title="신청 - 손쉽게 기부하고 참여하세요!"
          texts={[
            "품목: 캔버스, 남은 액자, 유화 도구, 기타 미술 재료 등",
            "신청 방법: 웹사이트에서 간단한 신청서 작성 후 제출",
          ]}
        />
        <StepItem
          number="02"
          numCircle={<S.GrayCircle />}
          title="방문 수거 - 직접 찾아갑니다!"
          texts={[
            "신청 완료 후, 정해진 일정 맞춰 폐기된 미술품을 신청자분이 계신 곳에 방문하여 수거합니다.",
            "친환경 운송 시스템 도입 : 탄소 배출을 최소화한 수거 방식",
          ]}
        />
        <StepItem
          number="03"
          numCircle={<S.RedCircle />}
          title="폐기물 분류 - 사용 가능한 재료 선별"
          texts={[
            "재사용 가능: 찢어진 캔버스 천, 액자 프레임, 일부 사용 된 채색 도구, 팔레트",
            "재활용 필요 : 손상된 종이, 페인트, 유화용 나무 팔레트",
            "폐기 대상 : 납, 카드뮴이 포함된 물감, 스프레이 페인트, 희석제(테레빈유, 시너), 접착제, 곰팡이 핀 종이나 캔버스",
          ]}
        />
        <StepItem
          number="04"
          numCircle={<S.WhiteCircle />}
          title="가공 및 생산 - 새로운 제품 제작을 위한 변신"
          texts={[
            "캔버스 리폼 : 폐기된 캔버스를 세척, 보강하여 새로운 캔버스로 제작",
            "목제 프레임 재활용 : 낡은 액자를 컷팅, 샌딩 과정을 거쳐 재사용 가능하게 가공",
            "색연필, 크레파스 재조합 : 사용된 재료를 녹여 새로운 제품으로 가공",
            "친환경 에코백 : 일부 오염된 캔버스를 제단하여 세척 후, 도색 및 재단하여 가방으로 제작",
            "재생 노트 : 버려진 종이를 모아 만든 친환경 노트",
          ]}
        />
        <StepItem
          number="05"
          numCircle={<S.YellowCircle />}
          title="판매와 기부 - 예술의 순환"
          texts={[
            "판매 : 온라인 스토어 및 전시회를 통해 업사이클링 제품 판매",
            "기부 : 미술 교육이 필요한 대학 및 학생들에게 무료 제공",
            "순환 시스템 : 수익금의 일부는 다시 미술 재료 기부에 사용",
          ]}
          isLast={true}
        />
      </S.Chapter4>

      <S.BottomText>
        <S.BottomTextTop>
          "예술을 사랑하고 모두가 함께 만드는 변화"
        </S.BottomTextTop>
        <S.BottomTextBottom>
          환경을 지키고, 미래의 창작가를 응원하는 움직임에 동참해주세요.
        </S.BottomTextBottom>
      </S.BottomText>

      <S.ButtonsWrapper>
        <S.ApplicationButton onClick={() => navigate("/service-center/qna")} >
          문의하기
        </S.ApplicationButton>
        <S.InquiryButton onClick={() => navigate("/upcycling/registration")}>
          업사이클 신청
        </S.InquiryButton>
      </S.ButtonsWrapper>
    </S.UpcyclingWrapper>
  );
};

export default UpcyclingMain;
