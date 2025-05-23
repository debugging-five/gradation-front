import React from 'react';
import S from './style';

const AuctionAgreementExplanation = () => {
  return (
    <S.Container>
      <S.MainWrapper>
        <S.FlexWrapper>
          <S.H2>그라데이션 경매 안내</S.H2>
          <S.StyledLink to="privacy-policy" style={{ textDecoration: 'none' }}>
            <label style={{ cursor: 'pointer' }}>
              <span>
                경매약관
              </span>
              <S.Icon18 src="/assets/images/icon/right_black.png" alt='>'/>
            </label>
          </S.StyledLink>
        </S.FlexWrapper>

        <S.H5Title>그라데이션의 옥션 시스템은 온라인 기반으로, 시간과 장소에 구애받지 않고 편리하게 컬렉션 할 수 있는 시스템입니다.</S.H5Title>

        <S.Order>
          <S.OrderImg src='/assets/images/icon/step.png' alt='경매순서'/>
        </S.Order>

        <S.Step>
          <S.StepWrapper>
            <S.TitleDiv>
              <S.H3>1. 회원가입</S.H3>
              <S.StepImg src='/assets/images/icon/auction_step_01.png' alt='step1' />
            </S.TitleDiv>
            <S.ContentDiv>
              <S.H8>그라데이션의 경매는 별도의 연회비 없이 홈페이지를 통해 간편하게 회원가입 후 본인인증을 완료하면 누구나 참여가 가능합니다.</S.H8>
              <S.ChartDiv>
                <S.ChartIndex>
                  <S.IndexBlank></S.IndexBlank>
                  <S.IndexTitle><S.H6>일반 회원</S.H6></S.IndexTitle>
                </S.ChartIndex>
                <S.ChartContent>
                  <S.ChartContentTitles>
                    <S.ChartContentTitle1><S.H6>본인 인증 방식</S.H6></S.ChartContentTitle1>
                    <S.ChartContentTitle2><S.H6>회원 혜택</S.H6></S.ChartContentTitle2>
                  </S.ChartContentTitles>  
                  <S.ChartContents>
                    <S.ChartContent1_1><S.H8>휴대폰 인증</S.H8></S.ChartContent1_1>
                    <S.ChartContent2_1>
                      <S.H8>홈페이지에서 경매 결과 및 이미지 제공 경매</S.H8>
                      <S.H8>경매 전자 도록 및 온라인 소식지 이메일 송부</S.H8>
                      <S.H8>홈페이지에서 온라인 경매 응찰 및 자동응찰 가능</S.H8>
                    </S.ChartContent2_1>
                    <S.ChartContent2_2><S.H8>경매 리플렛, 문자 안내 메세지 송부</S.H8></S.ChartContent2_2>
                  </S.ChartContents>
                </S.ChartContent>
              </S.ChartDiv>
            </S.ContentDiv>
          </S.StepWrapper>
        </S.Step>
        <S.Step>
          <S.StepWrapper>
            <S.TitleDiv>
              <S.H3>2. 디스플레이</S.H3>
              <S.StepImg src='/assets/images/icon/auction_step_02.png' alt='step1' />
            </S.TitleDiv>
            <S.ContentDiv>
              <S.H8>경매 출품작을 경매 전에 미리 관람하고 작품 상태를 확인할 수 있도록 도와드리는 전시로, 누구나 관람할 수 있습니다.</S.H8>
              <S.Margin10Block></S.Margin10Block>
              <S.H8>디스플레이에 전시되는 출품작들의 상태는 당사가 위탁받은 시점의 상태와 동일하며, 당사가 보증하는 작품상태는 경매시점의 상태에</S.H8>
              <S.Margin10Block></S.Margin10Block>
              <S.H8>준합니다.</S.H8>
            </S.ContentDiv>

          </S.StepWrapper>
        </S.Step>
        <S.Step>
          <S.StepWrapper>
            <S.TitleDiv>
              <S.H3>3. 응찰</S.H3>
              <S.StepImg src='/assets/images/icon/auction_step_03.png' alt='step1' />
            </S.TitleDiv>
            <S.ContentDiv>
              <S.H8>경매 기간 동안 홈페이지에서 작품을 이미지로 감상, 확인하여 응찰 할 수 있습니다.</S.H8>
              <S.Margin10Block></S.Margin10Block>
              <S.H8>응찰 방법은 1) 자동 응찰, 2) 응찰 두가지로 구분되며 동일한 응찰 금액을 등록할 경우, 1), 2) 순으로 낙찰 우선 순위가 정해집니다.</S.H8>
              <S.Margin10Block></S.Margin10Block>
              <S.H8>자동응찰은 미리 설정한 최대 응찰금액까지 자동으로 응찰이 이루어 집니다. (응찰범위 내 최저가 응찰)</S.H8>
              <S.Margin10Block></S.Margin10Block>
              <S.H8>경매 마감은 당사가 정한 일시를 기준으로 순차적으로 진행됩니다.</S.H8>
              <S.Step3Content>
                <S.H8>모든 응찰은 응찰자가 디스플레이를 통해 작품의 실물을 확인하였음을 전제로 하며, 낙찰 후에는 위약금 지불 후 취소가 가능하오니 
                  <br/>충분히 상태를 확인하시고 신중하게 응찰하여 주시기 바랍니다.</S.H8>
              </S.Step3Content>
              <S.H8Red>* 호가 단위 자동 변경 기준</S.H8Red>
              <S.Margin10Block></S.Margin10Block>
              <S.H8>호가 금액은 최종 입찰가의 10%로 자동 변경 됩니다.</S.H8>
            </S.ContentDiv>
          </S.StepWrapper>
        </S.Step>
        <S.Step>
          <S.StepWrapper>
            <S.TitleDiv>
              <S.H3>4. 낙찰</S.H3>
              <S.StepImg src='/assets/images/icon/auction_step_04.png' alt='step1' />
            </S.TitleDiv>
            <S.ContentDiv>  
              <S.Step4_1>
                <S.TextDiv>
                  <S.H8>낙찰 시, 회원가입 시 등록된 이메일로 「낙찰결과통보서」가 발송되며, 홈페이지에서도 낙찰결과를 확인하실 수 있습니다.</S.H8>
                </S.TextDiv>
                <S.TextDiv>
                  <S.H8>낙찰자는 낙찰일로부터 7일 이내에 낙찰가와 낙찰수수료, 부가가치세를 합친 구매대금을 당사로 지불하셔야 합니다.</S.H8>
                </S.TextDiv>
                <S.TextDiv>
                  <S.H8Red>* 단, 낙찰가가 3억 이상일 경우 낙찰 일로부터 7일 이내 총 구매대금의 30%를 선납해 주시고 나머지 70%는</S.H8Red>
                </S.TextDiv>
                <S.TextDiv>
                  <S.H8Red> &nbsp;&nbsp; 낙찰일로부터 21일 이내에 완납해 주시기 바랍니다.</S.H8Red>
                </S.TextDiv>
              </S.Step4_1>
              <S.TextDiv>
                <S.H8> 낙찰대금은 계좌이체, 신용카드 등으로 결제가 가능합니다.</S.H8>
              </S.TextDiv>
              <S.Step4_2>
                <S.H8Bold>온라인 경매</S.H8Bold>
                <S.Margin10Block></S.Margin10Block>
                <S.H8 className='sub'>· 온라인 경매 낙찰수수료는 일괄 낙찰가의 15% (VAT 별도)입니다.</S.H8>
                <S.Margin10Block></S.Margin10Block>
                <S.H8 className='sub'>· 낙찰가(Hammer Price) : 경매가 종료된 시점에서 낙찰자가 최종 선언한 금액입니다.</S.H8>
                <S.Margin10Block></S.Margin10Block>
                <S.H8 className='sub'>· 구매가(Purchase Price) : 낙찰가+낙찰수수료+부가가치세가 합산된 금액입니다.</S.H8>
              </S.Step4_2>
              <S.Step4_2>
                <S.H8Bold>[예시]</S.H8Bold>
                <S.Margin10Block></S.Margin10Block>
                <S.H8 className='sub'>· 낙찰가 2,000만원일 경우</S.H8>
                <S.Margin10Block></S.Margin10Block>
                <S.H8 className='sub'>· 낙찰 수수료 2,000만원(낙찰가)x15%(낙찰수수료) = 300만원</S.H8>
                <S.Margin10Block></S.Margin10Block>
                <S.H8 className='sub'>· 부가가치세 300만원(낙찰수수료)x10% = 30만원</S.H8>
                <S.Margin10Block></S.Margin10Block>
                <S.H8 className='sub'>· 총 구매대금 2,000만원(낙찰가)+300만원(낙찰수수료)+30만원(부가가치세) = 2,330만원</S.H8>
              </S.Step4_2>
              <S.Step4_2>
                <S.H8Red>[계좌입금]</S.H8Red>
                <S.Margin10Block></S.Margin10Block>
                <S.H8 className='sub'>· (주)그라데이션 신한 111-2222-3333-44 (입금 후 전화(02-000-0000)로 연락 주시기 바랍니다.)</S.H8>
              </S.Step4_2>
              <S.Step4_2>
                <S.H8Red>[해외송금]</S.H8Red>
                <S.Margin10Block></S.Margin10Block>
                <S.H8 className='sub'>· GRADATION Ltd Bank details.</S.H8>
                <S.Margin10Block></S.Margin10Block>
                <S.H8 className='sub'>· Account Name : GRADATION  AUCTION</S.H8>
                <S.Margin10Block></S.Margin10Block>
                <S.H8 className='sub'>· Back Name : SHINHAN BANK</S.H8>
                <S.Margin10Block></S.Margin10Block>
                <S.H8 className='sub'>· Bank Address : 20, 9GIL, SEJONGDAE-RO, JUMG-GU, SEOUL, REAPUBLIC OF KOREA</S.H8>
                <S.Margin10Block></S.Margin10Block>
                <S.H8 className='sub'>· Account Number : 1111 222 333 4444</S.H8>
                <S.Margin10Block></S.Margin10Block>
                <S.H8 className='sub'>· Swift Code : AR3KOR231</S.H8>
              </S.Step4_2>
              <S.Step3Content>
                <S.H8>낙찰자는 낙찰을 철회할 수 없습니다. 부득이 철회를 하는 경우에는 낙찰일로부터 7일 이내에 서면으로 철회의사를 통보해야하고
                  <br/>만약 낙찰 후 결제를 거부할 시 사이트 이용이 제한될 수 있습니다.</S.H8>
              </S.Step3Content>
            </S.ContentDiv>
          </S.StepWrapper>
        </S.Step>
        <S.Step>
          <S.StepWrapper>
            <S.TitleDiv>
              <S.H3>5. 작품 수령</S.H3>
              <S.StepImg src='/assets/images/icon/auction_step_05.png' alt='step1' />
            </S.TitleDiv>
            <S.ContentDiv>
              <S.Step4_2>
                <S.H8>수령 절차</S.H8>
                <S.Margin10Block></S.Margin10Block>
                <S.H8>· 온라인 경매 낙찰시 홈페이지에제공되는 예상 배송비는 회원가입시 등록된 주소지로 산정됩니다. 작품 수령지 변동이 있을 경우 </S.H8>
                <S.Margin10Block></S.Margin10Block>
                <S.H8>&nbsp;&nbsp;당사에 알려주시기 바랍니다.</S.H8>
                <S.Margin10Block></S.Margin10Block>
                <S.H8>· 작품 인도는 구매대금이 입금된 작품에 한하여 이루어지며 직접 수령 시 수령 희망일자와 시간을 알려주시면 수령 장소를 안내해</S.H8>
                <S.Margin10Block></S.Margin10Block>
                <S.H8>&nbsp;&nbsp;드립니다. 직접 수령이 어려울 경우 낙찰자의 책임과 비용 부담 하에 작품 운송을 주선해드립니다.</S.H8>
                <S.Margin10Block></S.Margin10Block>
                <S.H8>· 낙찰일로부터 당사가 고지한 기한(낙찰가 3억원 미만 : 7일, 3억원 초과 : 21일) 이후 입금여부와 무관하게 인수하지 않은 작품에</S.H8>
                <S.Margin10Block></S.Margin10Block>
                <S.H8>&nbsp;&nbsp;대해서는 건당 1일 1만원의 보관료(부가세 별도)가 발생합니다.</S.H8>
                <S.Margin10Block></S.Margin10Block>
                <S.H8>· 당사의 경매 작품 보증은 낙찰 일로부터 3년까지입니다.</S.H8>
              </S.Step4_2>
              <S.Step4_2>
                <S.H8Red>배송비 안내</S.H8Red>
                <S.Margin10Block></S.Margin10Block>
                <S.H8>서울 : KRW 50,000</S.H8>
                <S.Margin10Block></S.Margin10Block>
                <S.H8>수도권 : KRW 100,000</S.H8>
                <S.Margin10Block></S.Margin10Block>
                <S.H8>수도권 이외의 지역은 배송처 확인 후 거리에 따라 배송비가 추가로 부가될 수 있습니다. </S.H8>
                <S.Margin10Block></S.Margin10Block>
                <S.H8>해외 배송은 별도 문의 부탁드리겠습니다.</S.H8>
              </S.Step4_2>
              <S.Step4_2>
                <S.H8Red>기타 경매와 관련된 사항은 당사 온라인 경매의 이용약관을 참고하시기 바랍니다.</S.H8Red>
                <S.Margin10Block></S.Margin10Block>
                <S.StyledLink to="privacy-policy" style={{ textDecoration: 'none' }}>
                  <label style={{ cursor: 'pointer' }}>
                    이용약관 바로가기
                    <S.Icon18 src="/assets/images/icon/right_black.png" alt='>'/>
                  </label>
                </S.StyledLink>
                
              </S.Step4_2>
            </S.ContentDiv>

          </S.StepWrapper>
        </S.Step>

      </S.MainWrapper>
    </S.Container>
  );
};

export default AuctionAgreementExplanation;