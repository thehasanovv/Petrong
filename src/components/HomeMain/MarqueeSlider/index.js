import React, { useEffect, useState } from "react";
import Marquee from "react-marquee-slider";
import styled from "styled-components";
import times from "lodash/times";
import { withSize } from "react-sizeme";
import { nanoid } from "nanoid";

const FullWidth = styled.div`
  position: relative;
  max-width: 115rem;
  margin: 0 auto;
  background: rgba(0, 47, 166, 0.05);
  padding: 2rem 0;
  /* left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw; */
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

const Height = styled.div`
  position: relative;
  width: 100%;
  height: ${(props) => (props.height ? props.height + "px" : "auto")};
`;

const Box = styled.div`
  padding: ${(props) => props.scale * 25}px;
`;

const Review = styled.div`
  width: ${(props) => props.scale * 350}px;
  display: flex;
  padding: ${(props) => props.scale * 25}px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 7px 20px 0 rgba(0, 0, 0, 0.12);
`;

const Avatar = styled.div`
  border-radius: 50%;
  width: ${(props) => props.scale * 58}px;
  height: ${(props) => props.scale * 58}px;
  overflow: hidden;
  flex-shrink: 0;
  margin-right: ${(props) => props.scale * 15}px;

  img {
    max-width: 100%;
  }
`;

const Content = styled.div`
  p {
    margin: 0;
    color: #444;
    font-family: Helvetica, sans-serif;
    font-size: ${(props) => props.scale * 14}px;
    line-height: ${(props) => props.scale * 20}px;
    font-weight: 100;
    text-align: left;
  }
`;

const portraits = [
  "https://randomuser.me/api/portraits/women/68.jpg",
  "https://randomuser.me/api/portraits/men/75.jpg",
  "https://randomuser.me/api/portraits/women/89.jpg",
  "https://randomuser.me/api/portraits/men/10.jpg",
  "https://randomuser.me/api/portraits/men/12.jpg",
  "https://randomuser.me/api/portraits/men/15.jpg",
  "https://randomuser.me/api/portraits/men/19.jpg",
];

const Reviews = ({ size, onStartPerformance, onEndPerformance }) => {
  const [key, setKey] = useState(nanoid());

  useEffect(() => {
    setKey(nanoid());
  }, [size, setKey]);

  let scale = 0.5;

  if (size && size.width > 800) {
    scale = 0.65;
  }

  if (size && size.width > 1100) {
    scale = 0.8;
  }

  if (size && size.width > 1400) {
    scale = 1.3;
  }

  return (
    <FullWidth>
      <Height height={600}>
        <Marquee
          key={key}
          velocity={25}
          scatterRandomly
          minScale={0.7}
          onInit={onStartPerformance}
          onFinish={onEndPerformance}
        >
          {times(5, String).map((id) => (
            <Box key={`marquee-example-review-${id}`} scale={scale}>
              <Review scale={scale}>
                <Avatar scale={scale}>
                  <img src={portraits[id]} alt="" />
                </Avatar>
                <Content scale={scale}>
                  <p>
                    Working with the PETRONG team has been a huge success!
                    They're good people who care deeply about our business!
                  </p>
                </Content>
              </Review>
            </Box>
          ))}
        </Marquee>
      </Height>
    </FullWidth>
  );
};

// will end in a loop without React.memo
export default React.memo(withSize()(Reviews));
