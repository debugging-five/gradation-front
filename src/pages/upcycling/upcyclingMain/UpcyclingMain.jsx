import React from "react";
import { useNavigate } from "react-router-dom";

const UpcyclingMain = () => {
  const navigate = useNavigate();
  const isLoggedIn = Boolean(localStorage.getItem("token"));

  const handleNavigate = (path) => {
    if (!isLoggedIn) {
      navigate("/login");
    } else {
      navigate(path);
    }
  };

  return (
    <div className="upcycling-wrapper">
      <div className="upcycle-text">upcycling</div>

      <section className="banner-container">
        <div className="banner">
          <div className="banner-img">
            <img
              src="http://localhost:10000/files/api/get/banner.png?filePath=images/upcycling/upcycling-main"
              alt="upcycling-banner1"
            />
            <div className="banner-text">
              <p>"창작의 흔적이 환경과 미래를 망치는 폐기물이 되지 않도록."</p>
              <p>"이제는 변화를 만들어야 할 때 입니다.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="chapter1">
        <h1>"아름다움 뒤에 숨겨진 환경 문제"</h1>
        <div className="chapter-stats">
          <div className="chapter-box">
            <div className="title">9,739회</div>
            <div className="desc">2024년 국내 미술 전시회</div>
          </div>
          <div className="chapter-box">
            <div className="title">200,000톤</div>
            <div className="desc">한해 전시회에서 발생되는 폐기물</div>
          </div>
          <div className="chapter-box">
            <div className="title">화학 물질</div>
            <div className="desc">
              <p>희석용제, 부식액, 스프레이 등</p>
              <p>인체와 환경에 유해한 물질</p>
            </div>
          </div>
          <div className="chapter-box">
            <div className="title">5%</div>
            <div className="desc">
              <p>연간 재활용 되는</p>
              <p>폐기물 비율</p>
            </div>
          </div>
        </div>
      </section>
      <section className="chapter2">
        <img
          className="chapter2-img"
          src="http://localhost:10000/files/api/get/banner1.png?filePath=images/upcycling/upcycling-main"
          alt="upcycling-banner1"
        />
      </section>

      <section className="chapter3">
        <h1 className="chapter3-title">
          "폐기물이 새 생명을 얻는 순환의 과정"
        </h1>
        <div className="chapter3-top-img">
          <img
            className="step-img"
            src="http://localhost:10000/files/api/get/step1.png?filePath=images/upcycling/upcycling-main"
            alt="step1"
          />
          <img
            className="arrow-img"
            src="http://localhost:10000/files/api/get/aorrw.png?filePath=images/upcycling/upcycling-main"
            alt="arrow"
          />
          <img
            className="step-img"
            src="http://localhost:10000/files/api/get/step2.png?filePath=images/upcycling/upcycling-main"
            alt="step1"
          />
          <img
            className="arrow-img"
            src="http://localhost:10000/files/api/get/arrow.png?filePath=images/upcycling/upcycling-main"
            alt="arrow"
          />
          <img
            className="step-img"
            src="http://localhost:10000/files/api/get/step3.png?filePath=images/upcycling/upcycling-main"
            alt="step1"
          />
          <img
            className="arrow-img"
            src="http://localhost:10000/files/api/get/arrow.png?filePath=images/upcycling/upcycling-main"
            alt="arrow"
          />
          <img
            className="step-img"
            src="http://localhost:10000/files/api/get/step4.png?filePath=images/upcycling/upcycling-main"
            alt="step1"
          />
          <div className="chapter3-labels">
            <span>재생 캔버스, 친환경 에코백</span>
          </div>
        </div>
        <div className="chapter3-mid-img">
          <img
            className="step-img"
            src="http://localhost:10000/files/api/get/step5.png?filePath=images/upcycling/upcycling-main"
            alt="step1"
          />
          <img
            className="arrow-img"
            src="http://localhost:10000/files/api/get/arrow.png?filePath=images/upcycling/upcycling-main"
            alt="arrow"
          />
          <img
            className="step-img"
            src="http://localhost:10000/files/api/get/step6.png?filePath=images/upcycling/upcycling-main"
            alt="step1"
          />
          <img
            className="arrow-img"
            src="http://localhost:10000/files/api/get/arrow.png?filePath=images/upcycling/upcycling-main"
            alt="arrow"
          />
          <img
            className="step-img"
            src="http://localhost:10000/files/api/get/step7.png?filePath=images/upcycling/upcycling-main"
            alt="step1"
          />
          <img
            className="arrow-img"
            src="http://localhost:10000/files/api/get/arrow.png?filePath=images/upcycling/upcycling-main"
            alt="arrow"
          />
          <img
            className="step-img"
            src="http://localhost:10000/files/api/get/step8.png?filePath=images/upcycling/upcycling-main"
            alt="step1"
          />
          <div className="chapter3-labels">
            <span>재생 크레용</span>
          </div>
        </div>
        <div className="chapter3-bottom-img">
          <img
            className="step-img"
            src="http://localhost:10000/files/api/get/step9.png?filePath=images/upcycling/upcycling-main"
            alt="step1"
          />
          <img
            className="arrow-img"
            src="http://localhost:10000/files/api/get/arrow.png?filePath=images/upcycling/upcycling-main"
            alt="arrow"
          />
          <img
            className="step-img"
            src="http://localhost:10000/files/api/get/step10.png?filePath=images/upcycling/upcycling-main"
            alt="step1"
          />
          <img
            className="arrow-img"
            src="http://localhost:10000/files/api/get/arrow.png?filePath=images/upcycling/upcycling-main"
            alt="arrow"
          />
          <img
            className="step-img"
            src="http://localhost:10000/files/api/get/step11.png?filePath=images/upcycling/upcycling-main"
            alt="step1"
          />
          <img
            className="arrow-img"
            src="http://localhost:10000/files/api/get/arrow.png?filePath=images/upcycling/upcycling-main"
            alt="arrow"
          />
          <img
            className="step-img"
            src="http://localhost:10000/files/api/get/step12.png?filePath=images/upcycling/upcycling-main"
            alt="step1"
          />
          <div className="chapter3-labels">
            <span>목재 프레임</span>
          </div>
        </div>
      </section>

      <section className="chapter-4">
        <div className="step">
          <div className="circle-container">
            <span className="number">01</span>
            <div className="circle-blue"></div>
          </div>
          <div className="blue-content">
            <h2 className="timeline-text">신청 - 손쉽게 기부하고 참여하세요!</h2>
            <h3 className="timeline-text">품목: 캔버스, 남은 액자, 유화 도구, 기타 미술 재료 등</h3>
            <h3 className="timeline-text">신청 방법: 웹사이트에서 간단한 신청서 작성 후 제출</h3>
          </div>
        </div>

        <div className="step">
          <div className="circle-container">
            <span className="number">02</span>
            <div className="circle-gray"></div>
          </div>
          <div className="gray-content">
            <h2 className="timeline-text">방문 수거 - 직접 찾아갑니다!</h2>
            <h3 className="timeline-text">신청 완료 후, 정해진 일정 맞춰 폐기된 미술품을 신청자분이 계신 곳에 방문하여 수거합니다.</h3>
            <h3 className="timeline-text">친환경 운송 시스템 도입 : 탄소 배출을 최소화한 수거 방식</h3>
          </div>
        </div>

        <div className="step">
          <div className="circle-container">
            <span className="number">03</span>
            <div className="circle-red"></div>
          </div>
          <div className="red-content">
            <h2 className="timeline-text">폐기물 분류 - 사용 가능한 재료 선별</h2>
            <h3 className="timeline-text">재사용 가능: 찢어진 캔버스 천, 액자 프레임, 일부 사용 된 채색 도구, 팔레트</h3>
            <h3 className="timeline-text">재활용 필요 : 손상된 종이, 페인트, 유화용 나무 팔레트</h3>
            <h3 className="timeline-text">폐기 대상 : 납, 카드뮴이 포함된 물감, 스프레이 페인트, 희석제(테레빈유, 시너), 접착제, 곰팡이 핀 종이나 캔버스</h3>
          </div>
        </div>

        <div className="step">
          <div className="circle-container">
            <span className="number">04</span>
            <div className="circle-white"></div>
          </div>
          <div className="white-content">
            <h2 className="timeline-text">가공 및 생산 - 새로운 제품 제작을 위한 변신</h2>
            <h3 className="timeline-text">캔버스 리폼 : 폐기된 캔버스를 세척, 보강하여 새로운 캔버스로 제작</h3>
            <h3 className="timeline-text">목제 프레임 재활용 : 낡은 액자를 컷팅, 샌딩 과정을 거쳐 재사용 가능하게 가공</h3>
            <h3 className="timeline-text">색연필, 크레파스 재조합 : 사용된 재료를 녹여 새로운 제품으로 가공</h3>
            <h3 className="timeline-text">친환경 에코백 : 일부 오염된 캔버스를 제단하여 세척 후, 도색 및 재단하여 가방으로 제작</h3>
            <h3 className="timeline-text">재생 노트 : 버려진 종이를 모아 만든 친환경 노트</h3>
          </div>
        </div>

        <div className="step">
          <div className="circle-container">
            <span className="number">05</span>
            <div className="circle-yellow"></div>
          </div>
          <div className="yellow-content">
            <h2 className="timeline-text">판매와 기부 - 예술의 순환</h2>
            <h3 className="timeline-text">판매 : 온라인 스토어 및 전시회를 통해 업사이클링 제품 판매</h3>
            <h3 className="timeline-text">기부 : 미술 교육이 필요한 대학 및 학생들에게 무료 제공</h3>
            <h3 className="timeline-text">순환 시스템 : 수익금의 일부는 다시 미술 재료 기부에 사용</h3>
          </div>
        </div>
      </section>

      <div className="bottom-text">
        <p>"예술을 사랑하고 모두가 함께 만드는 변화"</p>
        <p>환경을 지키고, 미래의 창작가를 응원하는 움직임에 동참해주세요.</p>
      </div>
      <div className="upcycling-buttons">
        <button onClick={() => handleNavigate("/upcycling/registration")}>
          업사이클 신청
        </button>
        <button onClick={() => handleNavigate("/service-center/qna")}>
          문의하기
        </button>
      </div>
    </div>
  );
};

export default UpcyclingMain;
