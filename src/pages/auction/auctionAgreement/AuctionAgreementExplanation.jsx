import React from 'react';
import S from './style';

const AuctionAgreementExplanation = () => {
  return (
    <S.Container>
      <S.MainWrapper>
        <S.FlexWrapper>
          <S.H2>그라데이션 경매 안내</S.H2>
          <S.StyledLink to="privacy-policy" style={{ textDecoration: 'none' }}>
            <label>
              경매 약관
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
              <S.H5>그라데이션의 경매는 별도의 연회비 없이 홈페이지를 통해 간편하게 회원가입 후 본인인증을 완료하면 누구나 참여가 가능합니다.</S.H5>
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
              <S.H5>경매 출품작을 경매 전에 미리 관람하고 작품 상태를 확인할 수 있도록 도와드리는 전시로, 누구나 관람할 수 있습니다.</S.H5>
              <S.Margin10Block></S.Margin10Block>
              <S.H5>디스플레이에 전시되는 출품작들의 상태는 당사가 위탁받은 시점의 상태와 동일하며, 당사가 보증하는 작품상태는 경매시점의 상태에</S.H5>
              <S.Margin10Block></S.Margin10Block>
              <S.H5>준합니다.</S.H5>
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
              <S.H5>경매 기간 동안 홈페이지에서 작품을 이미지로 감상, 확인하여 응찰 할 수 있습니다.</S.H5>
              <S.Margin10Block></S.Margin10Block>
              <S.H5>응찰 방법은 1) 자동 응찰, 2) 응찰 두가지로 구분되며 동일한 응찰 금액을 등록할 경우, 1), 2) 순으로 낙찰 우선 순위가 정해집니다.</S.H5>
              <S.Margin10Block></S.Margin10Block>
              <S.H5>자동응찰은 미리 설정한 최대 응찰금액까지 자동으로 응찰이 이루어 집니다. (응찰범위 내 최저가 응찰)</S.H5>
              <S.Margin10Block></S.Margin10Block>
              <S.H5>경매 마감은 당사가 정한 일시를 기준으로 순차적으로 진행됩니다.</S.H5>
              <S.Step3Content>
                <S.H5>모든 응찰은 응찰자가 디스플레이를 통해 작품의 실물을 확인하였음을 전제로 하며, 낙찰 후에는 위약금 지불 후 취소가 가능하오니 
                  <br/>충분히 상태를 확인하시고 신중하게 응찰하여 주시기 바랍니다.</S.H5>
              </S.Step3Content>
              <S.H5Red>· 호가 단위 자동 변경 기준</S.H5Red>
              <S.Margin10Block></S.Margin10Block>
              <S.H5>호가 금액은 최종 입찰가의 10%로 자동 변경 됩니다.</S.H5>
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
                  <S.H5>낙찰 시, 회원가입 시 등록된 이메일로 「낙찰결과통보서」가 발송되며, 홈페이지에서도 낙찰결과를 확인하실 수 있습니다.</S.H5>
                </S.TextDiv>
                <S.TextDiv>
                  <S.H5>낙찰자는 낙찰일로부터 7일 이내에 낙찰가와 낙찰수수료, 부가가치세를 합친 구매대금을 당사로 지불하셔야 합니다.</S.H5>
                </S.TextDiv>
                <S.TextDiv>
                  <S.H5>* 단, 낙찰가가 3억 이상일 경우 낙찰 일로부터 7일 이내 총 구매대금의 30%를 선납해 주시고 나머지 70%는</S.H5>
                </S.TextDiv>
                <S.TextDiv>
                  <S.H5> &nbsp;&nbsp; 낙찰일로부터 21일 이내에 완납해 주시기 바랍니다.</S.H5>
                </S.TextDiv>
              </S.Step4_1>
                <S.TextDiv>
                  <S.H5> 낙찰대금은 계좌이체, 신용카드 등으로 결제가 가능합니다.</S.H5>
                </S.TextDiv>

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

            </S.ContentDiv>

          </S.StepWrapper>
        </S.Step>

      </S.MainWrapper>
    </S.Container>
  );
};

export default AuctionAgreementExplanation;