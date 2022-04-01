import styled from "styled-components";

const Idea = () => {
  return (
    <Container>
      <Wrapper>
        <WrapperLeft>
          <h2>Do you have a next level-idea?</h2>
          <p>Reach out and we can create magic together</p>
        </WrapperLeft>
        <WrapperRight>
          <button>WORK WITH US</button>
        </WrapperRight>
      </Wrapper>
    </Container>
  );
};

export default Idea;

const Container = styled.div`
  padding: 7rem 3rem;
  background: ${(props) => props.theme.lighthGreen};
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
const WrapperLeft = styled.div`
  flex: 1;
  font-family: "Poppins";
  margin: 0 3.3rem;

  @media screen and (max-width: 768px) {
    width: 100%;
    margin-bottom: 2rem;
  }
  h2 {
    font-style: normal;
    font-weight: 500;
    font-size: 36px;
    line-height: 54px;
    color: ${(props) => props.theme.secondBlack};
  }
  p {
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;
    color: ${(props) => props.theme.mainGrey};
  }
`;
const WrapperRight = styled.div`
  flex: 1;
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
    margin: 0 auto;
    display: block;
    &:hover {
      background-image: linear-gradient(to right, #43e97b 0%, #01e08f 100%);
    }
  }
`;
