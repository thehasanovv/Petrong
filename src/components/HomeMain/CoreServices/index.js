import styled from "styled-components";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { CoreServices } from "../../../mocks/CoreServices";
import Fade from "react-reveal/Fade";

const CoreMain = () => {
  return (
    <Container>
      <Wrapper>
        <WrapperLeft>
          <LazyLoadImage
            threshold={0}
            effect="blur"
            src="images/core-services.svg" // use normal <img> attributes as props
            placeholderSrc="images/core-services.svg"
          />
        </WrapperLeft>
        <WrapperRight>
          <Fade bottom>
            <WrapperRightTitle>Our Core Services</WrapperRightTitle>
            <WrapperRightDesc>
              Our technology solutions are perfectly designed to ensure the
              virtual world meets your needs.
            </WrapperRightDesc>
            {CoreServices.map((item) => (
              <WrapperRightContent key={item.id}>
                <WRCimg src={`${item.img}`} />
                <WRCtitle>{item.title}</WRCtitle>
                <WRCdesc>{item.desc}</WRCdesc>
              </WrapperRightContent>
            ))}
          </Fade>
        </WrapperRight>
      </Wrapper>
    </Container>
  );
};

export default CoreMain;

const Container = styled.div`
  padding: 13rem 3rem;
  margin: 0 6rem;
  @media screen and (max-width: 1300px) {
    margin: 0 2rem;
  }
  @media screen and (max-width: 992px) {
    margin: 0;
  }
  @media screen and (max-width: 768px) {
    padding: 8rem 1rem 6rem;
  }
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 992px) {
    flex-direction: column-reverse;
  }
`;
const WrapperLeft = styled.div`
  padding: 3rem 3rem 3rem 0;
  width: 40%;
  > span {
    width: 100%;
  }
  @media screen and (max-width: 1200px) {
    width: 50%;
  }
  @media screen and (max-width: 992px) {
    width: 100%;
    margin: 0 auto;
    padding: 0;
  }

  img {
    width: 100%;
  }
`;
const WrapperRight = styled.div`
  font-family: "Poppins", sans-serif;
  width: 60%;
  @media screen and (max-width: 1200px) {
    width: 50%;
  }
  @media screen and (max-width: 992px) {
    width: 100%;
  }
`;
const WrapperRightTitle = styled.h2`
  font-weight: 600;
  line-height: 54px;
  font-size: 36px;
  margin-bottom: 1rem;
  color: ${(props) => props.theme.mainBlack};
`;
const WrapperRightDesc = styled.div`
  font-weight: 500;
  line-height: 21px;
  font-size: 14px;
  margin-bottom: 2.5rem;
  color: ${(props) => props.theme.mainBlack};
`;
const WrapperRightContent = styled.div`
  display: grid;
  grid-template-columns: 5rem 1fr;
  margin-bottom: 2rem;
`;
const WRCimg = styled.img`
  grid-row: 1 / span 3;
`;
const WRCtitle = styled.h4`
  font-weight: 600;
  font-size: 14px;
  line-height: 21px;
  margin-bottom: 0.7rem;
  color: ${(props) => props.theme.mainBlack};
`;
const WRCdesc = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  width: 100%;
  color: ${(props) => props.theme.mainBlack};
`;
