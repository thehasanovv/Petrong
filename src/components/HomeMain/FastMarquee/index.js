import React from "react";
import Marquee from "react-fast-marquee";
import styled from "styled-components";

const portraits = [
  "https://randomuser.me/api/portraits/women/68.jpg",
  "https://randomuser.me/api/portraits/men/75.jpg",
  "https://randomuser.me/api/portraits/women/89.jpg",
  "https://randomuser.me/api/portraits/men/10.jpg",
  "https://randomuser.me/api/portraits/men/12.jpg",
  "https://randomuser.me/api/portraits/men/15.jpg",
  "https://randomuser.me/api/portraits/men/19.jpg",
];

const ReviewSlider = () => {
  return (
    <Container>
      <h2>Our Review</h2>
      <p>See how are clients feel about us.</p>
      <Marquee gradient={false}>
        {portraits.map((item, id) => (
          <Box key={id}>
            <Review>
              <Avatar>
                <img src={item} alt="" />
              </Avatar>
              <Content>
                <p>
                  Working with the PETRONG team has been a huge success! They're
                  good people who care deeply about our business!
                </p>
              </Content>
            </Review>
          </Box>
        ))}
      </Marquee>
    </Container>
  );
};

export default ReviewSlider;

const Container = styled.div`
  padding: 7rem 0;
  background: #002fa60d;
  h2 {
    text-align: center;
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
    margin-bottom: 3rem;
  }
`;

const Box = styled.div``;

const Review = styled.div`
  display: flex;
  align-items: center;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 7px 20px 0 rgba(0, 0, 0, 0.12);
  width: 400px;
  height: 150px;
  padding: 1rem;
  gap: 20px;
  margin-right: 5rem;
  box-shadow: 10px;
`;

const Avatar = styled.div`
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
  width: 5rem;
  height: 5rem;
  img {
    max-width: 100%;
  }
`;

const Content = styled.div`
  p {
    margin: 0;
    color: #444;
    font-family: Helvetica, sans-serif;
    font-weight: 100;
    text-align: left;
  }
`;
