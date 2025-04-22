import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/layout/Layout";
import MainContainer from "../pages/main/MainContainer";
import DisplayMainContainer from "../pages/display/displayMain/DisplayMainContainer";
import DisplayDetailContainer from "../pages/display/displayDetail/DisplayDetailContainer";
import DisplayRegistrationContainer from "../pages/display/displayRegistration/DisplayRegistrationContainer";
import AuctionAgreementPrivacyPolicyContainer from "../pages/auction/auctionAgreementPrivacyPolicy/AuctionAgreementPrivacyPolicyContainer";
import AuctionBiddingContainer from "../pages/auction/auctionBidding/AuctionBiddingContainer";
import AuctionCommingSoonContainer from "../pages/auction/auctionCommingSoon/AuctionCommingSoonContainer";
import AuctionCommingSoonModifyContainer from "../pages/auction/auctionCommingSoonModify/AuctionCommingSoonModifyContainer";
import AuctionExplanationContainer from "../pages/auction/auctionExplanation/AuctionExplanationContainer";
import AuctionMainContainer from "../pages/auction/auctionMain/AuctionMainContainer";
import AuctionModifyContainer from "../pages/auction/auctionModify/AuctionModifyContainer";
import AuctionPaymentContainer from "../pages/auction/auctionPayment/AuctionPaymentContainer";
import AuctionRegistrationContainer from "../pages/auction/auctionRegistration/AuctionRegistrationContainer";
import AuctionRejectedContainer from "../pages/auction/auctionRejected/AuctionRejectedContainer";
import AuctionSoldContainer from "../pages/auction/auctionSold/AuctionSoldContainer";
import AuctionAgreementTermsAndConditionsContainer from "../pages/auction/auctionAgreementTermsAndConditions/AuctionAgreementTermsAndConditionsContainer";
import ArtistMainContainer from "../pages/artist/artistMain/ArtistMainContainer";
import ArtistDetailContainer from "../pages/artist/artistDetail/ArtistDetailContainer";
import UpcyclingMainController from "../pages/upcycling/upcyclingMain/UpcyclingMainController";
import UpcyclingRegistrationContainer from "../pages/upcycling/upcyclingRegistration/UpcyclingRegistrationContainer";
import ExhibitionGradationContainer from "../pages/exhibition/exhibitionGradation/ExhibitionGradationContainer";
import ExhibitionGradationAdminContainer from "../pages/exhibition/exhibitionGradationAdmin/ExhibitionGradationAdminContainer";
import ExhibitionGradationPastContainer from "../pages/exhibition/exhibitionGradationPast/ExhibitionGradationPastContainer";
import ExhibitionRegistrationContainer from "../pages/exhibition/exhibitionRegistration/ExhibitionRegistrationContainer";
import ExhibitionUniversityContainer from "../pages/exhibition/exhibitionUniversity/ExhibitionUniversityContainer";

const router = createBrowserRouter([
  {
    path : "/",
    element : <Layout />,
    children : [
      {
        index : true,
        element : <MainContainer />
      },
      {
        path : "/display/main",
        element : <DisplayMainContainer />  // display 메인
      },
      {
        path : "/display/detail",
        element : <DisplayDetailContainer />  // display 상세정보
      },
      {
        path : "/display/registration",
        element : <DisplayRegistrationContainer />  // display 신청 양식
      },
      {
        path : "/artist/main",
        element : <ArtistMainContainer />  // artist 메인
      },
      {
        path : "/artist/detail",
        element : <ArtistDetailContainer />  // artist 상세 정보
      },
      {
        path : "/auction/agreement-privacy-policy",
        element : <AuctionAgreementPrivacyPolicyContainer />  // auction 약관1
      },
      {
        path : "/auction/agreement-term-conditions",
        element : <AuctionAgreementTermsAndConditionsContainer />  // auction 약관2
      },
      {
        path : "/auction/bidding",
        element : <AuctionBiddingContainer />  // auction 응찰
      },
      {
        path : "/auction/comming-soon",
        element : <AuctionCommingSoonContainer />  // auction 예정
      },
      {
        path : "/auction/comming-soon-modify",
        element : <AuctionCommingSoonModifyContainer />  // auction 예정 수정
      },
      {
        path : "/auction/explanation",
        element : <AuctionExplanationContainer />  // auction 설명
      },
      {
        path : "/auction/main",
        element : <AuctionMainContainer/>  // auction 메인
      },
      {
        path : "/auction/modify",
        element : <AuctionModifyContainer />  // auction 수정
      },
      {
        path : "/auction/payment",
        element : <AuctionPaymentContainer />  // auction 결제
      },
      {
        path : "/auction/registration",
        element : <AuctionRegistrationContainer />  // auction 신청 양식
      },
      {
        path : "/auction/rejected",
        element : <AuctionRejectedContainer />  // auction 유찰
      },
      {
        path : "/auction/sold",
        element : <AuctionSoldContainer />  // auction 낙찰
      },
      {
        path : "/exhibition/gradtion",
        element : <ExhibitionGradationContainer />  // exhibition gradation 메인
      },
      // {
      //   path : "/exhibition/gradation-admin",
      //   element : <ExhibitionGradationAdminContainer />  // exhibition gradation 관리자 화면
      // },
      {
        path : "/exhibition/gradation-past",
        element : <ExhibitionGradationPastContainer />  // exhibition gradation 지난 전시화
      },
      {
        path : "/exhibition/registration",
        element : <ExhibitionRegistrationContainer />  // exhibition 대학교 신청 양식
      },
      {
        path : "/exhibition/university",
        element : <ExhibitionUniversityContainer />  // exhibition 대학교 메인
      },
      {
        path : "/upcycling/main",
        element : <UpcyclingMainController />  // upcycle 메인
      },
      {
        path : "/upcycling/registration",
        element : <UpcyclingRegistrationContainer />  // upcycle 신청 양식
      },



    ]
  }
])

export default router;