import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/layout/Layout";
import MainContainer from "../pages/main/MainContainer";
import ArtistDetailContainer from "../pages/artist/artistDetail/ArtistDetailContainer";
import ArtistDetail from "../pages/artist/artistDetail/ArtistDetail";
import LoginLayout from "../pages/layout/LoginLayout";
import DisplayCategory from "../pages/display/DisplayCategory";
import DisplayRegistration from "../pages/display/displayRegistration/DisplayRegistration";
import DisplayContainer from "../pages/display/DisplayContainer";
import DisplayDetailContainer from "../pages/display/displayDetail/DisplayDetailContainer";
import DisplayDetail from "../pages/display/displayDetail/DisplayDetail";
import ArtistContainer from "../pages/artist/ArtistContainer";
import AuctionContainer from "../pages/auction/AuctionContainer";
import AuctionBiddingContainer from "../pages/auction/auctionBidding/AuctionBiddingContainer";
import AuctionCompleteContainer from "../pages/auction/auctionComplete/AuctionCompleteContainer";
import AuctionCategory from "../pages/auction/AuctionCategory";
import ExhibitionContainer from "../pages/exhibition/ExhibitionContainer";
import ExhibitionGradation from "../pages/exhibition/exhibitionGradation/ExhibitionGradation";
import ExhibitionUniversity from "../pages/exhibition/exhibitionUniversity/ExhibitionUniversity";
import MyPageContainer from "../pages/mypage/MyPageContainer";
import UserRead from "../pages/mypage/myInfo/userInfo/read/UserRead";
import ArtistDetailModify from "../pages/mypage/myInfo/artistDetailModify/ArtistDetailModify";
import AuctionExpectedContainer from "../pages/auction/auctionExpected/AuctionExpectedContainer";
import AuctionBiddingDetailContainer from "../pages/auction/auctionBiddingDetail/AuctionBiddingDetailContainer";
import AuctionBiddingDetail from "../pages/auction/auctionBiddingDetail/AuctionBiddingDetail";
import AuctionCompleteDetailContainer from "../pages/auction/auctionCompleteDetail/AuctionCompleteDetailContainer";
import AuctionCompleteDetail from "../pages/auction/auctionCompleteDetail/AuctionCompleteDetail";
import AuctionExpectedDetailContainer from "../pages/auction/auctionExpectedDetail/AuctionExpectedDetailContainer";
import AuctionExpectedDetail from "../pages/auction/auctionExpectedDetail/AuctionExpectedDetail";
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
import Modify from "../pages/mypage/myInfo/userInfo/modify/Modify";
import ChangePassword from "../pages/mypage/myInfo/changePassword/ChangePassword";
import ChangePasswordOk from "../pages/mypage/myInfo/changePassword/ChangePasswordOk";
import UniversityCheck from "../pages/mypage/myInfo/universityCheck/UniversityCheck";
import CommentList from "../pages/mypage/myActive/comment/CommentList";
import ContactArtistContainer from "../pages/mypage/myActive/contactArtist/ContactArtistContainer";
import ContactArtistDetail from "../pages/mypage/myActive/contactArtist/ContactArtistDetail";
import ContactArtistDetailContainer from "../pages/mypage/myActive/contactArtist/ContactArtistDetailContainer";
import ContactArtistDetailModify from "../pages/mypage/myActive/contactArtist/ContactArtistDetailModify";
import DisplayKorean from "../pages/display/displayCategoryDetail/DisplayKorean";
import DisplayPainting from "../pages/display/displayCategoryDetail/DisplayPainting";
import DisplaySculpture from "../pages/display/displayCategoryDetail/DisplaySculpture";
import DisplayCraft from "../pages/display/displayCategoryDetail/DisplayCraft";
import DisplayArchitecture from "../pages/display/displayCategoryDetail/DisplayArchitecture";
import DisplayCalligraphy from "../pages/display/displayCategoryDetail/DisplayCalligraphy";
import AuctionArchitecture from "../pages/auction/auctionCategoryDetail/AuctionArchitecture";
import AuctionKorean from "../pages/auction/auctionCategoryDetail/AuctionKorean";
import AuctionPainting from "../pages/auction/auctionCategoryDetail/AuctionPainting";
import AuctionSculpture from "../pages/auction/auctionCategoryDetail/AuctionSculpture";
import AuctionCraft from "../pages/auction/auctionCategoryDetail/AuctionCraft";
import AuctionCalligraphy from "../pages/auction/auctionCategoryDetail/AuctionCalligraphy";
import ArtistKorean from "../pages/artist/artistCategoryDetail/ArtistKorean";
import ArtistPainting from "../pages/artist/artistCategoryDetail/ArtistPainting";
import ArtistSculpture from "../pages/artist/artistCategoryDetail/ArtistSculpture";
import ArtistCraft from "../pages/artist/artistCategoryDetail/ArtistCraft";
import ArtistArchitecture from "../pages/artist/artistCategoryDetail/ArtistArchitecture";
import ArtistCalligraphy from "../pages/artist/artistCategoryDetail/ArtistCalligraphy";
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
import MyMailContainer from "../pages/mypage/myMail/MyMailContainer";
import MyMailReceived from "../pages/mypage/myMail/MyMailReceived";
import MyMailSended from "../pages/mypage/myMail/MyMailSended";
import MyMailListContainer from "../pages/mypage/myMail/MyMailListContainer";
import MyMailReceivedDetail from "../pages/mypage/myMail/MyMailReceivedDetail";
import MyMailSendedDetail from "../pages/mypage/myMail/MyMailSendedDetail";
import MyPaymentDeliveryInfoContainer from "../pages/mypage/myPayment/MyPaymentDeliveryInfoContainer";
import MyMailReceivedDetailContainer from "../pages/mypage/myMail/MyMailReceivedDetailContainer";
import MyMailSendedDetailContainer from "../pages/mypage/myMail/MyMailSendedDetailContainer";
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
import AdminFaqDetailModify from "../pages/admin/faq/AdminFaqDetailModify";
import UserManagement from "../pages/admin/userManagement/UserManagement";
import NotFound from "../pages/notFound/NotFound";

const router = createBrowserRouter([
  {
    path : "/",
    element : <Layout />,
    children : [
      {
        path : "",
        element : <MainContainer />
      },
      {
        path : "/display",
        element : <DisplayContainer />,  // display 메인
        children : [
          {
            path : "",
            element : <DisplayCategory />,
            children : [
              {
                path : "korean",
                element : <DisplayKorean />
              },
              {
                path : "painting",
                element : <DisplayPainting />
              },
              {
                path : "sculpture",
                element : <DisplaySculpture />
              },
              {
                path : "craft",
                element : <DisplayCraft />
              },
              {
                path : "architecture",
                element : <DisplayArchitecture />
              },
              {
                path : "calligraphy",
                element : <DisplayCalligraphy />
              }
            ]
          },
          {
            path : "detail",
            element : <DisplayDetailContainer />,
            children : [
              {
                path : ":id",
                element : <DisplayDetail />
              }
            ]
          },
          {
            path : "registration",
            element : <LoginLayout />,
            children : [
              {
                index : true,
                element : <DisplayRegistration />
              }
            ]
          }
        ]
      },
      {
        path : "/artist",
        element : <ArtistContainer />,  // artist 메인
        children : [
          {
            path : "",
            element : <ArtistCategory />,
            children : [
              {
                path : "korean",
                element : <ArtistKorean />
              },
              {
                path : "painting",
                element : <ArtistPainting />
              },
              {
                path : "sculpture",
                element : <ArtistSculpture />
              },
              {
                path : "craft",
                element : <ArtistCraft />
              },
              {
                path : "architecture",
                element : <ArtistArchitecture />
              },
              {
                path : "calligraphy",
                element : <ArtistCalligraphy />
              }
            ]
          },
          {
            path : "detail",
            element : <ArtistDetailContainer />,
            children : [
              {
                path : ":id",
                element : <ArtistDetail />
              }
            ]
          }
        ]
      },
      {
        path : "/auction",
        element : <AuctionContainer />,
        children : [
          {
            path : "",
            element : <AuctionBiddingContainer />,
            children : [
              {
                path : "",
                element : <AuctionCategory />,
                children : [
                  {
                    path : "korean",
                    element : <AuctionKorean />
                  },
                  {
                    path : "painting",
                    element : <AuctionPainting />
                  },
                  {
                    path : "sculpture",
                    element : <AuctionSculpture />
                  },
                  {
                    path : "craft",
                    element : <AuctionCraft />
                  },
                  {
                    path : "architecture",
                    element : <AuctionArchitecture />
                  },
                  {
                    path : "calligraphy",
                    element : <AuctionCalligraphy />
                  }
                ]
              }
            ]
          },
          {
            path : "bidding",
            element : <AuctionBiddingContainer />,
            children : [
              {
                path : "",
                element : <AuctionCategory />,
                children : [
                  {
                    path : "korean",
                    element : <AuctionKorean />
                  },
                  {
                    path : "painting",
                    element : <AuctionPainting />
                  },
                  {
                    path : "sculpture",
                    element : <AuctionSculpture />
                  },
                  {
                    path : "craft",
                    element : <AuctionCraft />
                  },
                  {
                    path : "architecture",
                    element : <AuctionArchitecture />
                  },
                  {
                    path : "calligraphy",
                    element : <AuctionCalligraphy />
                  }
                ]
              }
            ]
          },
          {
            path : "expected",
            element : <AuctionExpectedContainer />,
            children : [
              {
                path : "",
                element : <AuctionCategory />,
                children : [
                  {
                    path : "korean",
                    element : <AuctionKorean />
                  },
                  {
                    path : "painting",
                    element : <AuctionPainting />
                  },
                  {
                    path : "sculpture",
                    element : <AuctionSculpture />
                  },
                  {
                    path : "craft",
                    element : <AuctionCraft />
                  },
                  {
                    path : "architecture",
                    element : <AuctionArchitecture />
                  },
                  {
                    path : "calligraphy",
                    element : <AuctionCalligraphy />
                  }
                ]
              }
            ]
          },
          {
            path : "complete",
            element : <AuctionCompleteContainer />,
            children : [
              {
                path : "",
                element : <AuctionCategory />,
                children : [
                  {
                    path : "korean",
                    element : <AuctionKorean />
                  },
                  {
                    path : "painting",
                    element : <AuctionPainting />
                  },
                  {
                    path : "sculpture",
                    element : <AuctionSculpture />
                  },
                  {
                    path : "craft",
                    element : <AuctionCraft />
                  },
                  {
                    path : "architecture",
                    element : <AuctionArchitecture />
                  },
                  {
                    path : "calligraphy",
                    element : <AuctionCalligraphy />
                  }
                ]
              }
            ]
          },
          {
            path : "bidding-detail",
            element : <AuctionBiddingDetailContainer />,
            children : [
              {
                path : ":id",
                element : <AuctionBiddingDetail />
              }
            ]
          },
          {
            path : "complete-detail",
            element : <AuctionCompleteDetailContainer />,
            children : [
              {
                path : ":id",
                element : <AuctionCompleteDetail />
              }
            ]
          },
          {
            path : "expected-detail",
            element : <AuctionExpectedDetailContainer />,
            children : [
              {
                path : ":id",
                element : <AuctionExpectedDetail />
              },
              {
                path : ":id/modify",
                element : <ContactArtistDetailModify />
              }
            ]
          },
          {
            path : "payment",
            element : <LoginLayout />,
            children : [
              {
                index : true,
                element : <AuctionPayment />
              }
            ]
          },
          {
            path : "agreement",
            element : <AuctionAgreementContainer />,
            children : [
              {
                index : true,
                element : <AuctionAgreementExplanation />
              },
              {
                path : "explanation",
                element : <AuctionAgreementExplanation />
              },
              {
                path : "privacy-policy",
                element : <AuctionAgreementPrivacyPolicy />
              },
              {
                path : "auction-policy",
                element : <AuctionAgreementAuctionPolicy />
              }
            ]
          },
          {
            path : "resgistration",
            element : <LoginLayout />,
            children : [
              {
                index : true,
                element : <AuctionRegistration />
              }
            ]
          }
        ]
      },
      {
        path : "/exhibition",
        element : <ExhibitionContainer />,
        children : [
          {
            path : "",
            element : <ExhibitionCategory />,
            children : [
              {
                path : "gradation",
                element : <ExhibitionGradation />
              },
              {
                path : "university",
                element : <ExhibitionUniversity />
              }
            ]
          },
          {
            path : "gradation/past",
            element : <ExhibitionGradationPastContainer />,
            children : [
              {
                path : ":id",
                element : <ExhibitionGradationPast />
              }
            ]
          },
          {
            path : "university/registration",
            element : <LoginLayout />,
            children : [
              {
                index : true,
                element : <ExhibitionRegistration />
              }
            ]
          }
        ]
      },
      {
        path : "/mypage",
        element : <LoginLayout />,
        children : [
          {
            path : "",
            element : <MyPageContainer />,
            children : [
              {
                path : "",
                element : <UserRead />
              },
              {
                path : "user-info",
                element : <UserRead />
              },
              {
                path : "modify",
                element : <Modify />
              },
              {
                path : "artist-datail-modify",
                element : <ArtistDetailModify />
              },
              {
                path : "change-password",
                element : <ChangePassword />
              },
              {
                path : "change-password-ok",
                element : <ChangePasswordOk />
              },
              {
                path : "university-check",
                element : <UniversityCheck />
              },
              {
                path : "comment-list",
                element : <CommentList />
              },
              {
                path : "delete",
                element : <MypageDelete />
              },
              {
                path : "contact-artist",
                element : <ContactArtistContainer />,
                children : [
                  {
                    path : "detail",
                    element : <ContactArtistDetailContainer />,
                    children : [
                      {
                        path: ":id",
                        element: <ContactArtistDetail />
                      },
                      {
                        path: ":id/modify",
                        element: <ContactArtistDetailModify />
                      }
                    ]
                  },
                  {
                    path : "write",
                    element : <ContactArtistWrite />
                  }
                ]
              },
              {
                path : "like",
                element : <ArtLikeContainer />,
                children : [
                  {
                    path : "",
                    element : <ArtLikeList />
                  },
                  {
                    path : "art",
                    element : <ArtLikeList />
                  },
                  {
                    path : "university",
                    element : <UniversityLikeList />
                  },
                ]
              },
              {
                path : "my-art",
                element : <MyArtContainer />,
                children : [
                  {
                    path : "",
                    element : <MyArtList />
                  },
                  {
                    path : "art-list",
                    element : <MyArtList />
                  },
                  {
                    path : "available-auction-art-list",
                    element : <MyAvailableAuctionArt />
                  },
                ]
              },
              {
                path : "my-payment",
                element : <MyPaymentContainer />,
                children : [
                  {
                    path : "",
                    element : <MyAuctionList />
                  },
                  {
                    path : "auction-list",
                    element : <MyAuctionList />
                  },
                  {
                    path : "payment-list",
                    element : <MyPaymentList />,
                  },
                  {
                    path : "payment-list/delivery-info",
                    element : <MyPaymentDeliveryInfoContainer />,
                    children : [
                      {
                        path : ":id",
                        element : <MyPaymentDeliveryInfo />
                      }
                    ]
                  }
                ]
              },
              {
                path: "my-mail",
                element: <MyMailContainer />,
                children: [
                  {
                    path: "",
                    element: <MyMailListContainer />,
                    children: [
                      {
                        path: "received",
                        element: <MyMailReceived />
                      },
                      {
                        path: "sended",
                        element: <MyMailSended />
                      }
                    ]
                  },
                  {
                    path: "received/detail/:id",
                    element: <MyMailReceivedDetail />
                  },
                  {
                    path: "sended/detail/:id",
                    element: <MyMailSendedDetail />
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        path : "/service-center/qna",
        element : <LoginLayout />,
        children : [
          {
            path : "",
            element : <ServiceCenterContainer />,
            children : [
              {
                path : "",
                element : <QnaList />
              },
              {
                path : "detail/:id",
                element : <QnaDetail />
              },
              {
                path : "registration",
                element : <QnaSend />
              },
            ]
          },
        ]
      },
      {
        path : "/service-center/faq",
        element : <ServiceCenterContainer />,
        children : [
          {
            path : "",
            element : <FaqList />
          },
          {
            path : "detail/:id",
            element : <FaqDetail />
          }
        ]
      },
      {
        path : "admin",
        element : <LoginLayout />,
        children : [
          {
            path : "",
            element : <AdminContainer />,
            children : [
              {
                path : "faq",
                element : <AdminFaqList />
              },
              {
                path : "faq/detail/:id",
                element : <AdminFaqDetail />,
              },
              {
                path : "faq/detail/:id/modify",
                element : <AdminFaqDetailModify />
              },
              {
                path : "faq/registration",
                element : <AdminFaqRegistration />
              },
              // {
              //   path : "qna-waiting",
              //   element : <AdminFaqRegistration />
              // },
              {
                path : "user-management",
                element : <UserManagement />
              }
            ]
          }
        ]
      },
      {
        path : "*",
        element : <NotFound />
      }
    ]
  }
])

export default router;
