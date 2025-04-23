import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/layout/Layout";
import MainContainer from "../pages/main/MainContainer";
import ArtistDetailContainer from "../pages/artist/artistDetail/ArtistDetailContainer";
import ArtistDetail from "../pages/artist/artistDetail/ArtistDetail";
import LoginLayout from "../pages/layout/LoginLayout";
import DisplayCategory from "../pages/display/DisplayCategory";
import DisplayRegistration from "../pages/display/displayRegistration/DisplayRegistration";
import Test01 from "../pages/display/displayTest/Test01";
import Test02 from "../pages/display/displayTest/Test02";
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
import AuctionTest01 from "../pages/auction/auctionTest/AuctionTest01";
import AuctionTest02 from "../pages/auction/auctionTest/AuctionTest02";
import ExhibitionContainer from "../pages/exhibition/ExhibitionContainer";
import ExhibitionGradation from "../pages/exhibition/exhibitionGradation/ExhibitionGradation";
import ExhibitionUniversity from "../pages/exhibition/exhibitionUniversity/ExhibitionUniversity";
import MyPageContainer from "../pages/mypage/MyPageContainer";
import UserRead from "../pages/mypage/myInfo/userInfo/read/UserRead";
import ArtistDetailModify from "../pages/mypage/myInfo/artistDetailModify/ArtistDetailModify";

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
                path : "korea",
                element : <Test01 />
              },
              {
                path : "jokak",
                element : <Test02 />
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
                    path : "korea",
                    element : <AuctionTest01 />
                  },
                  {
                    path : "seoyea",
                    element : <AuctionTest02 />
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
                    path : "korea",
                    element : <AuctionTest01 />
                  },
                  {
                    path : "seoyea",
                    element : <AuctionTest02 />
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
                    path : "korea",
                    element : <AuctionTest01 />
                  },
                  {
                    path : "seoyea",
                    element : <AuctionTest02 />
                  }
                ]
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
            path : "gradation",
            element : <ExhibitionGradation />
          },
          {
            path : "university",
            element : <ExhibitionUniversity />
          },
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
            path : "my-artist",
            element : <ArtistDetailModify />
          }
        ]
      }
    ]
  }
])

export default router;