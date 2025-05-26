import dayjs from "dayjs"
import { useNavigate } from "react-router-dom"

const endBidding = async (id) => {
  const response = await fetch(`http://localhost:10000/auction/api/detail/${id}`)
  if(!response.ok) return console.error(`getAuction err ${response}`)
  const datas = await response.json()
  const data = await datas.auction

  // 조회한 경매가 끝난 경매지만 업데이트가 안되어있을 때
  if(dayjs(data.auctionEndDate) < dayjs()) {
    if(data.auctionBiddingDate == null) {
      const biddingResponse = await fetch(`http://localhost:10000/auction/api/read-bidder/${id}`)
      if(!biddingResponse.ok) return console.error(`getAuction err ${response}`)
      const bidding = await biddingResponse.json()
      const auctionEndData = {
        id: id,
        auctionStartDate: data.auctionStartDate,
        auctionEndDate: data.auctionEndDate,
        auctionStartPrice: data.auctionStartPrice,
        auctionEstimatedMinPrice: data.auctionEstimatedMinPrice,
        auctionEstimatedMaxPrice: data.auctionEstimatedMaxPrice,
        auctionBidDate: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        artId: data.artId,
      };
      
      if(bidding.id === null){
        // 유찰
        auctionEndData.auctionAttracted = false
        auctionEndData.auctionBidPrice = null
        auctionEndData.userId = null
      }else {
        // 낙찰
        auctionEndData.auctionAttracted = true
        auctionEndData.auctionBidPrice = bidding.auctionBiddingPrice
        auctionEndData.userId = bidding.userId
      }

      await fetch(`http://localhost:10000/auction/api/modify`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(auctionEndData)
      })
    }
  }
  return datas;
}

export default endBidding;