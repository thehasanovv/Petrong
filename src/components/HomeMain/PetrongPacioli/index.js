import styled from "styled-components";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const PetrongPacioli = () => {
  return (
    <Container>
      <PartnerShipSection>
        <PartnerShipSectionLeft>
          <LazyLoadImage
            threshold={0}
            src="images/partnership-agency.png" // use normal <img> attributes as props
            placeholderSrc="images/partnership-agency.png"
          />
        </PartnerShipSectionLeft>
        <PartnerShipSectionRight>
          <h2>Petrong & Pacioli</h2>
          <p>
            Pacioli is the flagship product at petrong software solutions, a
            tailored digital lending tools that helps microfinance institutions
            to efficiently and quickly onboard customers and to account
            reconciliation with financial inclution as the motivation. Pacioli
            improves female customers comfort with the service by specifically
            design for unique constraint.
          </p>
          <div>
            <button>Pacioli</button>
            <button>Demo Video</button>
          </div>
        </PartnerShipSectionRight>
      </PartnerShipSection>
    </Container>
  );
};

export default PetrongPacioli;

const Container = styled.div`
  /* height: 40rem; */
  background: rgb(0, 0, 0);
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 1) 50%,
    rgba(235, 250, 244, 1) 50%
  );
  padding: 0 3rem;

  @media screen and (max-width: 768px) {
    background: transparent;
    margin-bottom: 3rem;
    padding: 0 1rem;
  }
`;

const PartnerShipSection = styled.div`
  background-image: url("images/partnership.svg");
  height: 100%;
  background-repeat: no-repeat;
  background-position: right top;
  background-size: 20rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 962px) {
    height: 23rem;
  }
  @media screen and (max-width: 768px) {
    height: auto;
    flex-direction: column-reverse;
  }
`;
const PartnerShipSectionLeft = styled.div`
  padding: 3rem;
  width: 50%;
  @media screen and (max-width: 962px) {
    padding: 0rem;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
  }
  img {
    transform: translateX(1rem);
    width: 110%;

    @media screen and (max-width: 1200px) {
      transform: translateX(1.5rem);
    }
    @media screen and (max-width: 962px) {
      transform: translateX(0.8rem);
      width: 100%;
    }
    @media screen and (max-width: 768px) {
      transform: translateX(0);
    }
  }
`;

const PartnerShipSectionRight = styled.div`
  width: 50%;
  padding-left: 3rem;
  font-family: "Montserrat";

  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 1rem 0;
    margin-bottom: 3rem;
  }
  h2 {
    color: ${(props) => props.theme.secondBlack};
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    line-height: 3rem;
    margin-bottom: 1rem;
    @media screen and (max-width: 1200px) {
      margin-bottom: 0.5rem;
    }
    @media screen and (max-width: 962px) {
      font-size: 26px;
      line-height: 2rem;
    }
  }
  p {
    font-weight: 500;
    font-size: 14px;
    line-height: 2rem;
    margin-bottom: 1rem;
    @media screen and (max-width: 1200px) {
      line-height: 1.7rem;
    }
    @media screen and (max-width: 962px) {
      line-height: 1.5rem;
    }
  }
  div {
    display: flex;
    gap: 2rem;
  }
  button {
    border-radius: 100px;
    color: #fff;
    font-weight: 600;
    font-size: 14px;
    border: none;
    outline: none;
    cursor: pointer;
    padding: 1em 2em;
    font-family: "Montserrat", sans-serif;
    background-color: ${(props) => props.theme.mainGreen};
    color: #fff;
    transition: all 0.5s;
    &:hover {
      background-image: linear-gradient(to right, #43e97b 0%, #01e08f 100%);
    }
  }
`;
