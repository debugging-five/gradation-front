import { createBrowserRouter, Navigate } from "react-router-dom";
import Layout from "../pages/layout/Layout";
import ArtistDetailContainer from "../pages/artist/artistDetail/ArtistDetailContainer";
import ArtistDetail from "../pages/artist/artistDetail/ArtistDetail";
import LoginLayout from "../pages/layout/LoginLayout";
import DisplayCategory from "../pages/display/DisplayCategory";
import DisplayRegistration from "../pages/display/displayRegistration/DisplayRegistration";
import DisplayContainer from "../pages/display/DisplayContainer";
import DisplayDetailContainer from "../pages/display/displayDetail/DisplayDetailContainer";
import ArtistContainer from "../pages/artist/ArtistContainer";
import AuctionContainer from "../pages/auction/AuctionContainer";
import AuctionBiddingContainer from "../pages/auction/auctionBidding/AuctionBiddingContainer";
import AuctionCategory from "../pages/auction/AuctionCategory";
import ExhibitionContainer from "../pages/exhibition/ExhibitionContainer";
import ExhibitionGradation from "../pages/exhibition/exhibitionGradation/ExhibitionGradation";
import ExhibitionUniversity from "../pages/exhibition/exhibitionUniversity/ExhibitionUniversity";
import MyPageContainer from "../pages/mypage/MyPageContainer";
import ArtistDetailModify from "../pages/mypage/myInfo/artistDetailModify/ArtistDetailModify";
import AuctionRegistration from "../pages/auction/auctionRegistration/AuctionRegistration";
import AuctionAgreementContainer from "../pages/auction/auctionAgreement/AuctionAgreementContainer";
import AuctionAgreementExplanation from "../pages/auction/auctionAgreement/AuctionAgreementExplanation";
import AuctionAgreementPrivacyPolicy from "../pages/auction/auctionAgreement/AuctionAgreementPrivacyPolicy";
import AuctionAgreementAuctionPolicy from "../pages/auction/auctionAgreement/AuctionAgreementAuctionPolicy";
import AuctionPayment from "../pages/auction/auctionPayment/AuctionPayment";
import ExhibitionCategory from "../pages/exhibition/ExhibitionCategory";
import ExhibitionGradationPastContainer from "../pages/exhibition/exhibitionGradationPast/ExhibitionGradationPastContainer";
import ExhibitionGradationPast from "../pages/exhibition/exhibitionGradationPast/ExhibitionGradationPast";
import ExhibitionRegistration from "../pages/exhibition/exhibitionRegistration/ExhibitionRegistration";
import UniversityCheck from "../pages/mypage/myInfo/universityCheck/UniversityCheck";
import CommentList from "../pages/mypage/myActive/comment/CommentList";
import ContactArtistContainer from "../pages/mypage/myActive/contactArtist/ContactArtistContainer";
import ArtistCategory from "../pages/artist/ArtistCategory";
import ContactArtistWrite from "../pages/mypage/myActive/contactArtist/ContactArtistWrite";
import ArtLikeContainer from "../pages/mypage/myActive/like/ArtLikeContainer";
import ArtLikeList from "../pages/mypage/myActive/like/ArtLikeList";
import UniversityLikeList from "../pages/mypage/myActive/like/UniversityLikeList";
import MyArtList from "../pages/mypage/myActive/myArt/MyArtList";
import MyAvailableAuctionArt from "../pages/mypage/myActive/myArt/MyAvailableAuctionArt";
import MyArtContainer from "../pages/mypage/myActive/myArt/MyArtContainer";
import MyPaymentContainer from "../pages/mypage/myPayment/MyPaymentContainer";
import MyPaymentList from "../pages/mypage/myPayment/MyPaymentList";
import MyAuctionList from "../pages/mypage/myPayment/MyAuctionList";
import MyPaymentDeliveryInfo from "../pages/mypage/myPayment/MyPaymentDeliveryInfo";
import MypageDelete from "../pages/mypage/mypageDelete/MypageDelete";
import MyPaymentDeliveryInfoContainer from "../pages/mypage/myPayment/MyPaymentDeliveryInfoContainer";
import ServiceCenterContainer from "../pages/serviceCenter/ServiceCenterContainer";
import QnaList from "../pages/serviceCenter/qna/QnaList";
import QnaSend from "../pages/serviceCenter/qna/QnaSend";
import QnaDetail from "../pages/serviceCenter/qna/QnaDetail";
import FaqList from "../pages/serviceCenter/faq/FaqList";
import FaqDetail from "../pages/serviceCenter/faq/FaqDetail";
import AdminContainer from "../pages/admin/AdminContainer";
import AdminFaqList from "../pages/admin/faq/AdminFaqList";
import AdminFaqDetail from "../pages/admin/faq/AdminFaqDetail";
import AdminFaqRegistration from "../pages/admin/faq/AdminFaqRegistration";
import NotFound from "../pages/notFound/NotFound";
import AdminLayout from "../pages/admin/AdminLayout";
import AdminFaqModify from "../pages/admin/faq/AdminFaqModify";
import AdminQnaLayout from "../pages/admin/qna/AdminQnaLayout";
import AdminQnaWaitingList from "../pages/admin/qna/AdminQnaWaitingList";
import AdminQnaDetail from "../pages/admin/qna/AdminQnaDetail";
import AdminQnaCompletedList from "../pages/admin/qna/AdminQnaCompletedList";
import FormManagementLayout from "../pages/admin/formManagement/FormManagementLayout";
import FormManagementApprovedList from "../pages/admin/formManagement/list/FormManagementApprovedList";
import FormManagementDetailContainer from "../pages/admin/formManagement/detail/FormManagementDetailContainer";
import FormManageMentCategory from "../pages/admin/formManagement/FormManageMentCategory";
import UserManagementContainer from "../pages/admin/userManagement/UserManagementContainer";
import UserInfoContainer from "../pages/mypage/myInfo/userInfo/UserInfoContainer";
import ChangePasswordContainer from "../pages/mypage/myInfo/changePassword/ChangePasswordContainer";
import AuctionLayout from "../pages/auction/AuctionLayout";
import AuctionDetailContainer from "../pages/auction/auctionDetail/AuctionDetailContainer";
import AuctionListContainer from "../pages/auction/auctionList/AuctionListContainer";
import AuctionExpectedModify from "../pages/auction/auctionExpectedModify/AuctionExpectedModify";
import DisplayListContainer from "../pages/display/displayList/DisplayListContainer";
import ArtistListContainer from "../pages/artist/artistList/ArtistListContainer";
import ArtistMyProfile from "../pages/artist/artistMyProfile/ArtistMyProfile";
import MyApprovedContainer from "../pages/mypage/myApproved/MyApprovedContainer";
import MyApprovedCategory from "../pages/mypage/myApproved/MyApprovedCategory";
import Login from "../pages/account/login/Login";
import FindId from "../pages/account/findId/FindId";
import FindPassword from "../pages/account/findPassword/FindPassword";
import Join from "../pages/account/join/Join";
import MypageAlertList from "../pages/mypage/myMail/MypageAlertList";
import MypageAlertDetail from "../pages/mypage/myMail/MypageAlertDetail";
import ReceivedList from "../pages/mypage/myActive/contactArtist/ReceivedList";
import SendedList from "../pages/mypage/myActive/contactArtist/SendedList";
import ApprovedDisplayList from "../pages/mypage/myApproved/myApprovedList/ApprovedDisplayList";
import ApprovedExhibitionList from "../pages/mypage/myApproved/myApprovedList/ApprovedExhibitionList";
import ApprovedUniversityList from "../pages/mypage/myApproved/myApprovedList/ApprovedUniversityList";
import ApprovedUpcyclingList from "../pages/mypage/myApproved/myApprovedList/ApprovedUpcyclingList";
import UpcyclingMainContainer from "../pages/upcycling/upcyclingMain/UpcyclingMainContainer";
import UpcyclingRegistration from "../pages/upcycling/upcyclingRegistration/UpcyclingRegistration";
import MypageAlertContainer from "../pages/mypage/myMail/MypageAlertContainer";
import ContactArtistReceivedDetail from "../pages/mypage/myActive/contactArtist/ContactArtistReceivedDetail";
import ContactArtistSendedDetail from "../pages/mypage/myActive/contactArtist/ContactArtistSendedDetail";
import UpcyclingMain from "../pages/upcycling/upcyclingMain/UpcyclingMain";
import NewPassword from "../pages/account/newPassword/NewPassword";
import MainContainer from "../pages/main/MainContainer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <MainContainer />,
      },
    
      {
        path: "/display",
        element: <DisplayContainer />, // display 메인
        children: [
          {
            path: "",
            element: <DisplayCategory />,
            children: [
              {
                path: ":category",
                element: <DisplayListContainer />,
              },
            ],
          },
          {
            path: ":category/detail/:id",
            element: <DisplayDetailContainer />,
          },
          {
            path: "registration",
            element: <LoginLayout />,
            children: [
              {
                index: true,
                element: <DisplayRegistration />,
              },
            ],
          },
        ],
      },
      {
        path: "/artist",
        element: <ArtistContainer />, // artist 메인
        children: [
          {
            path: "",
            element: <ArtistCategory />,
            children: [
              {
                path: "",
                element: <ArtistMyProfile />,
                children: [
                  {
                    path: ":category",
                    element: <ArtistListContainer />,
                  },
                ],
              },
            ],
          },
          {
            path: ":category/detail",
            element: <ArtistDetailContainer />,
            children: [
              {
                path: ":id",
                element: <ArtistDetail />,
              },
            ],
          },
        ],
      },
      {
        path: "/auction",
        element: <AuctionContainer />,
        children: [
          {
            path: "",
            element: <AuctionLayout />,
            children: [
              {
                path: "",
                element: <Navigate to="/auction/bidding/korean" replace />
              },
              {
                path: ":type",
                element: <AuctionBiddingContainer />,
                children: [
                  {
                    path: "",
                    element: <AuctionCategory />,
                    children: [
                      {
                        path: ":category",
                        element: <AuctionListContainer />,
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            path: ":type/:category/detail/:id",
            element: <AuctionDetailContainer />,
          },
          {
            path: ":type/:category/modify/:id",
            element: <AuctionExpectedModify />,
          },
          {
            path: "payment",
            element: <LoginLayout />,
            children: [
              {
                path: ":id",
                element: <AuctionPayment />,
              },
            ],
          },
          {
            path: "agreement",
            element: <AuctionAgreementContainer />,
            children: [
              {
                index: true,
                element: <AuctionAgreementExplanation />,
              },
              {
                path: "explanation",
                element: <AuctionAgreementExplanation />,
              },
              {
                path: "privacy-policy",
                element: <AuctionAgreementPrivacyPolicy />,
              },
              {
                path: "auction-policy",
                element: <AuctionAgreementAuctionPolicy />,
              },
            ],
          },
          {
            path: "registration",
            element: <LoginLayout />,
            children: [
              {
                path: ":id",
                element: <AuctionRegistration />,
              },
            ],
          },
        ],
      },
      {
        path: "/exhibition",
        element: <ExhibitionContainer />,
        children: [
          {
            path: "",
            element: <ExhibitionCategory />,
            children: [
              {
                path: "gradation",
                element: <ExhibitionGradation />,
              },
              {
                path: "university",
                element: <ExhibitionUniversity />,
              },
            ],
          },
          {
            path: "gradation/past",
            element: <ExhibitionGradationPastContainer />,
            children: [
              {
                path: ":id",
                element: <ExhibitionGradationPast />,
              },
            ],
          },
          {
            path: "university/registration",
            element: <LoginLayout />,
            children: [
              {
                index: true,
                element: <ExhibitionRegistration />,
              },
            ],
          },
        ],
      },
      {
        path: "/upcycling",
        element: <UpcyclingMainContainer />,
        children: [
          {
            index: true,
            element: <UpcyclingMain />,
          },
          {
            path: "registration",
            element: <UpcyclingRegistration />,
          },
        ],
      },
      {
        path: "/mypage",
        element: <LoginLayout />,
        children: [
          {
            path: "",
            element: <MyPageContainer />,
            children: [
              {
                path: "",
                element: <UserInfoContainer />,
              },
              {
                path: "artist-datail-modify",
                element: <ArtistDetailModify />,
              },
              {
                path: "university-check",
                element: <UniversityCheck />,
              },
              {
                path: "comment-list",
                element: <CommentList />,
              },
              {
                path: "delete",
                element: <MypageDelete />,
              },
              {
                path: "contact-artist",
                element: <ContactArtistContainer />,
                children: [
                  {
                    path: "",
                    element: <Navigate to="received" replace />,
                  },
                  {
                    path: "received",
                    element: <ReceivedList />,
                  },
                  {
                    path: "sended",
                    element: <SendedList />,
                  },
                ],
              },
              {
                path: "contact-artist/received/detail/:id",
                element: <ContactArtistReceivedDetail />,
              },
              {
                path: "contact-artist/sended/detail/:id",
                element: <ContactArtistSendedDetail />,
              },
              {
                path: "contact-artist/write/:email",
                element: <ContactArtistWrite />,
              },
              {
                path: "like",
                element: <ArtLikeContainer />,
                children: [
                  {
                    path: "",
                    element: <Navigate to="art" replace />,
                  },
                  {
                    path: "art",
                    element: <ArtLikeList />,
                  },
                  {
                    path: "university",
                    element: <UniversityLikeList />,
                  },
                ],
              },
              {
                path: "my-art",
                element: <MyArtContainer />,
                children: [
                  {
                    path: "",
                    element: <Navigate to="art-list" replace />,
                  },
                  {
                    path: "art-list",
                    element: <MyArtList />,
                  },
                  {
                    path: "available-auction-art-list",
                    element: <MyAvailableAuctionArt />,
                  },
                ],
              },
              {
                path: "my-payment",
                element: <MyPaymentContainer />,
                children: [
                  {
                    path: "",
                    element: <MyAuctionList />,
                  },
                  {
                    path: "auction-list",
                    element: <MyAuctionList />,
                  },
                  {
                    path: "payment-list",
                    element: <MyPaymentList />,
                  },
                  {
                    path: "payment-list/delivery-info",
                    element: <MyPaymentDeliveryInfoContainer />,
                    children: [
                      {
                        path: ":id",
                        element: <MyPaymentDeliveryInfo />,
                      },
                    ],
                  },
                ],
              },
              {
                path: "mypage-approved-list",
                element: <MyApprovedContainer />,
                children: [
                  {
                    path: "",
                    element: <MyApprovedCategory />,
                    children: [
                      {
                        path: "",
                        element: <Navigate to="display" replace />,
                      },
                      {
                        path: "display",
                        element: <ApprovedDisplayList />,
                      },
                      {
                        path: "exhibition",
                        element: <ApprovedExhibitionList />,
                      },
                      {
                        path: "upcycling",
                        element: <ApprovedUpcyclingList />,
                      },
                      {
                        path: "university",
                        element: <ApprovedUniversityList />,
                      },
                    ],
                  },
                ],
              },
              {
                path: "alert",
                element: <MypageAlertContainer />,
                children: [
                  {
                    path: "",
                    element: <MypageAlertList />,
                  },
                  {
                    path: "detail/:id",
                    element: <MypageAlertDetail />,
                  },
                ],
              },
              {
                path: "admin",
                element: <AdminLayout />,
                children: [
                  {
                    path: "",
                    element: <AdminContainer />,
                    children: [
                      {
                        path: "faq",
                        element: <AdminFaqList />,
                      },
                      {
                        path: "faq/detail/:id",
                        element: <AdminFaqDetail />,
                      },
                      {
                        path: "faq/modify/:id",
                        element: <AdminFaqModify />,
                      },
                      {
                        path: "faq/registration",
                        element: <AdminFaqRegistration />,
                      },
                      {
                        path: "qna",
                        element: <AdminQnaLayout />,
                        children: [
                          {
                            path: "",
                            element: <AdminQnaWaitingList />,
                          },
                          {
                            path: "complete",
                            element: <AdminQnaCompletedList />,
                          },
                        ],
                      },
                      {
                        path: "form-management",
                        element: <FormManagementLayout />,
                        children: [
                          {
                            path: "",
                            element: <FormManageMentCategory />,
                            children: [
                              {
                                path: ":type",
                                element: <FormManagementApprovedList />,
                              },
                            ],
                          },
                        ],
                      },
                      {
                        path: "form-management/detail/:type/:id",
                        element: <FormManagementDetailContainer />,
                      },
                      {
                        path: "qna/detail/:id",
                        element: <AdminQnaDetail />,
                      },
                      {
                        path: "user-management",
                        element: <UserManagementContainer />,
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            path: "change-password",
            element: <ChangePasswordContainer />,
          },
        ],
      },
      {
        path: "/service-center/qna",
        element: <LoginLayout />,
        children: [
          {
            path: "",
            element: <ServiceCenterContainer />,
            children: [
              {
                path: "",
                element: <QnaList />,
              },
              {
                path: "detail/:id",
                element: <QnaDetail />,
              },
            ],
          },
        ],
      },
      {
        path: "/service-center",
        element: <ServiceCenterContainer />,
        children: [
          {
            path: "registration",
            element: <QnaSend />,
          },
        ],
      },
      {
        path: "/service-center/faq",
        element: <ServiceCenterContainer />,
        children: [
          {
            path: "",
            element: <FaqList />,
          },
          {
            path: "detail/:id",
            element: <FaqDetail />,
          },
        ],
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
  {
    path: "/join",
    element: <Join />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/find-id",
    element: <FindId />,
  },
  {
    path: "/find-password",
    element: <FindPassword />,
  },
  {
    path: "/new-password",
    element: <NewPassword />,
  },
  // {
  //   path: "/join",
  //   element: <Join />,
  // },
  // {
  //   path: "/login",
  //   element: <Login />,
  // },
  // {
  //   path: "/find-id",
  //   element: <FindId />,
  // },
]);

export default router;
