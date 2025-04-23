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
import ArtistCategory from "../pages/artist/ArtistCategory";
import ArtistTest01 from "../pages/artist/artistTest/ArtistTest01";
import ArtistTest02 from "../pages/artist/artistTest/ArtistTest02";
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
import KoreanPainting from "../pages/display/displayCategoryDetail/KoreanPainting";
import Painting from "../pages/display/displayCategoryDetail/Painting";
import Sculpture from "../pages/display/displayCategoryDetail/Sculpture";
import Craft from "../pages/display/displayCategoryDetail/Craft";
import Architecture from "../pages/display/displayCategoryDetail/Architecture";
import Calligraphy from "../pages/display/displayCategoryDetail/Calligraphy";
import AuctionExpectedContainer from "../pages/auction/auctionExpected/AuctionExpectedContainer";
import AuctionBiddingDetailContainer from "../pages/auction/auctionBiddingDetail/AuctionBiddingDetailContainer";
import AuctionBiddingDetail from "../pages/auction/auctionBiddingDetail/AuctionBiddingDetail";
import AuctionCompleteDetailContainer from "../pages/auction/auctionCompleteDetail/AuctionCompleteDetailContainer";
import AuctionCompleteDetail from "../pages/auction/auctionCompleteDetail/AuctionCompleteDetail";
import AuctionExpectedDetailContainer from "../pages/auction/auctionExpectedDetail/AuctionExpectedDetailContainer";
import AuctionExpectedDetail from "../pages/auction/auctionExpectedDetail/AuctionExpectedDetail";
import AuctionExpectedModify from "../pages/auction/auctionExpectedModify/AuctionExpectedModify";
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
                path : "KoreanPainting",
                element : <KoreanPainting />
              },
              {
                path : "Painting",
                element : <Painting />
              },
              {
                path : "Sculpture",
                element : <Sculpture />
              },
              {
                path : "Craft",
                element : <Craft />
              },
              {
                path : "Architecture",
                element : <Architecture />
              },
              {
                path : "Calligraphy",
                element : <Calligraphy />
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
                path : "korea",
                element : <ArtistTest01 /> // 한국화
              },
              {
                path : "seoyea",
                element : <ArtistTest02 />
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
                    path : "KoreanPainting",
                    element : <KoreanPainting />
                  },
                  {
                    path : "Painting",
                    element : <Painting />
                  },
                  {
                    path : "Sculpture",
                    element : <Sculpture />
                  },
                  {
                    path : "Craft",
                    element : <Craft />
                  },
                  {
                    path : "Architecture",
                    element : <Architecture />
                  },
                  {
                    path : "Calligraphy",
                    element : <Calligraphy />
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
                    path : "KoreanPainting",
                    element : <KoreanPainting />
                  },
                  {
                    path : "Painting",
                    element : <Painting />
                  },
                  {
                    path : "Sculpture",
                    element : <Sculpture />
                  },
                  {
                    path : "Craft",
                    element : <Craft />
                  },
                  {
                    path : "Architecture",
                    element : <Architecture />
                  },
                  {
                    path : "Calligraphy",
                    element : <Calligraphy />
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
                    path : "KoreanPainting",
                    element : <KoreanPainting />
                  },
                  {
                    path : "Painting",
                    element : <Painting />
                  },
                  {
                    path : "Sculpture",
                    element : <Sculpture />
                  },
                  {
                    path : "Craft",
                    element : <Craft />
                  },
                  {
                    path : "Architecture",
                    element : <Architecture />
                  },
                  {
                    path : "Calligraphy",
                    element : <Calligraphy />
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
                    path : "koreanPainting",
                    element : <KoreanPainting />
                  },
                  {
                    path : "painting",
                    element : <Painting />
                  },
                  {
                    path : "sculpture",
                    element : <Sculpture />
                  },
                  {
                    path : "craft",
                    element : <Craft />
                  },
                  {
                    path : "architecture",
                    element : <Architecture />
                  },
                  {
                    path : "calligraphy",
                    element : <Calligraphy />
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
            path : "contact-artist-list",
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
            ]
          }
        ]
      }
    ]
  }
])

export default router;