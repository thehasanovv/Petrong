import styled from "styled-components";
import CoreMain from "./CoreServices";
import PartnershipAndPetrong from "./PartnershipAndPetrong";
import OurPromise from "./OurPromise";
import Idea from "./Idea";
import ReviewSlider from "./FastMarquee";
import PetrongPacioli from "./PetrongPacioli";

const HomeMain = () => {
  return (
    <Container>
      <CoreMain />
      <PartnershipAndPetrong />
      <ReviewSlider />
      <PetrongPacioli />
      <OurPromise />
      <Idea />
    </Container>
  );
};

export default HomeMain;

const Container = styled.div``;
