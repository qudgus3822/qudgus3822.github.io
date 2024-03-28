import styled from 'styled-components';
import { MainLayout , Row } from 'components/layouts';
import { CommaMainLayout } from "components/layouts/CommaMainLayout";
import { Container } from 'components/containers';
import { media } from 'constants/media';
import { CategoryTab2 } from 'components/menu';
import { useMainBookList } from 'net/hooks';

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { detectTablet } from 'helpers/common';
import Cookies from 'universal-cookie/lib';
import { RecommendedSchoolCounselings, NewCounselings } from 'organisms/sections';
import {
    MainSlider // 기존
  } from './components';
import { Display2 } from 'components/texts';
import { Banners ,ExportCounselings ,CounselingDetails} from './organisms';
export default function CounselingMainView(){
  const router = useRouter();
  const cookies = new Cookies();

  const [isTablet, setIsTablet] = useState(false);

  let BannerNo = "";
  let Apptype = "";
  if (cookies.get('in-app-mode') !== 'true' || isTablet) {
      BannerNo = "8";
      Apptype = "002";
  } else {
      BannerNo = "25";
      Apptype = "001";
  }    

  const datas = require('/public/data/counseling/main/main.json');  
  
  const chanel = useMainBookList('48', '10');
  const chanelData = chanel?.data;
  const chaneError = chanel?.error;

  useEffect(() => {
      setIsTablet(detectTablet());
  }, []);

  const filterOptions = [
      { value: '/counseling/list?categoryno=1&title=상담 분야', label: '우울, 불안, 스트레스' },        
      { value: '/counseling/list?categoryno=2&title=상담 분야', label: '성격 및 자기이해' },
    ];
    const filterOptions2 = [        
      { value: '/counseling/list?categoryno=4&title=상담 분야', label: '학교생활' },
      { value: '/counseling/list?categoryno=5&title=상담 분야', label: '대인관계' },
    ];
  return(
    <MainLayout headerType="store">
      <MainSlider />
      <RecommendedSchoolCounselings
          data={datas}
          error={chaneError}
      />
      <StyledContainer>
        <Display2>{"내 학년에서 많이 한 심리 분야"}</Display2>
        <Component>
          <ButtonsContainer justify="space-between">
            <CategoryTabDiv>
              <RestyledCategoryTab
              options={filterOptions}                   
              />
            </CategoryTabDiv>                  
          </ButtonsContainer>                    
        </Component>
        <Component>
          <ButtonsContainer justify="space-between">
            <CategoryTabDiv>
                <RestyledCategoryTab
                options={filterOptions2}                    
                />
            </CategoryTabDiv>                  
          </ButtonsContainer>
        </Component>
      </StyledContainer>
      <NewCounselings
          data={datas}
          error={chaneError}
      />
      <Banners />
      <ExportCounselings />
      
      <CounselingDetails/>
    </MainLayout>
  )

}
  
const StyledContainer = styled(Container)`
  margin: 70px auto 90px;
  ${({ theme }) =>
    theme.media.under_tablet(`
    margin: 19px auto 120px;
  `)}
`;
const ButtonsContainer = styled(Row)`
  height: 32px;
  margin-top: 5px;
  margin-bottom: 20px;
  position: relative;

  ${media.under_tablet(`
    // height: 80px;
    overflow-x: auto;
    margin: 0 -20px;
    position: absolute;
    left: 20px;
    top: 21px;
    width: calc(100% + 20px);
  `)}
`;
const Component = styled.div`
  margin-bottom: 25px;
  position: relative;
  width: 100%;
  
  padding-top: 30px;

  ${({ theme }) =>
    theme.media.under_tablet(`
    padding-top: 40px;
    padding-top: 20px;
  `)}
`;
const CategoryTabDiv = styled.div`
  margin-top: 10px;
  ${({ theme }) =>
    theme.media.under_tablet(`
    margin-top: 0px;
  `)}
`;
const RestyledCategoryTab = styled(CategoryTab2)`
  ${media.under_tablet(`
    button {
      margin-right: 6px;
    }
  `)}
`;