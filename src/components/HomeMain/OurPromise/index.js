import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import { OurPromiseData } from "../../../mocks/OurPromise";

const OurPromise = () => {
  return (
    <Container>
      <Fade bottom>
        <h2>Our Promise</h2>
        <p>
          As part of our high quality service, we'd like to offer something
          extra too.
        </p>
        <Promises>
          {OurPromiseData.map((item) => (
            <PromisesWrapper key={item.id}>
              <PWicon>
                <img src={`${item.icon}`} />
              </PWicon>
              <PWtitle>{item.title}</PWtitle>
              <PWdesc>{item.desc}</PWdesc>
            </PromisesWrapper>
          ))}
        </Promises>
      </Fade>
    </Container>
  );
};

export default OurPromise;

const Container = styled.div`
  padding: 10rem 3rem;
  > h2 {
    font-family: "Poppins";
    font-weight: 700;
    font-size: 36px;
    line-height: 54px;
    text-align: center;
    color: ${(props) => props.theme.mainBlack};
  }
  > p {
    font-family: "Poppins";
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
    text-align: center;
    color: ${(props) => props.theme.mainBlack};
  }
  @media screen and (max-width: 768px) {
    padding: 6rem 1rem;
  }
`;
const Promises = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 15rem);
  gap: 2rem;
  align-content: center;
  justify-content: center;
  margin-top: 4rem;
  @media screen and (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
const PromisesWrapper = styled.div`
  background-color: ${(props) => props.theme.whiteSmoke};
  padding: 0 1.5rem;
  display: grid;
  grid-template-columns: 1rem 1fr;
  gap: 1.5rem;
  align-content: center;
  justify-content: space-around;
  border-radius: 10px;
  transition: all 0.2s;
  &:hover {
    transform: scale(1.02);
  }
  @media screen and (max-width: 768px) {
    padding: 0.5rem;
  }
`;
const PWicon = styled.div`
  grid-row: 1 / span 3;
  img {
    padding-top: 2.2px;
  }
`;
const PWtitle = styled.h4`
  font-family: "Poppins";
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
  color: ${(props) => props.theme.mainBlack};
`;
const PWdesc = styled.p`
  font-family: "Poppins";
  font-weight: 400;
  font-size: 14px;
  line-height: 1.7rem;
  color: ${(props) => props.theme.mainBlack};
`;
