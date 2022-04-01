import styled from "styled-components";
import { LinksQuick } from "../../mocks/FooterLinks";
import { LinksService } from "../../mocks/FooterLinks";
import { LinksTechnology } from "../../mocks/FooterLinks";

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <FooterTop>
          <List>
            <ListTitle>QUICK LINKS</ListTitle>
            {LinksQuick.map((item) => (
              <ListItem>{item.title}</ListItem>
            ))}
          </List>
          <List>
            <ListTitle>QUICK LINKS</ListTitle>
            {LinksService.map((item) => (
              <ListItem>{item.title}</ListItem>
            ))}
          </List>
          <List>
            <ListTitle>QUICK LINKS</ListTitle>
            {LinksTechnology.map((item) => (
              <ListItem>{item.title}</ListItem>
            ))}
          </List>
          <List>
            <ListTitle>QUICK LINKS</ListTitle>
            <Social>
              <div>
                <a href="#">
                  <img src="images/linkedin-icon.svg" />
                </a>
              </div>
              <div>
                <a href="#">
                  <img src="images/instagram-icon.svg" />
                </a>
              </div>
              <div>
                <a href="#">
                  <img src="images/facebook-icon.svg" />
                </a>
              </div>
              <div>
                <a href="#">
                  <img src="images/youtube-icon.svg" />
                </a>
              </div>
            </Social>
            <Phone>
              <img src="images/mail-icon.svg" />
              <p>Phone: (234) 0800-000-0000</p>
            </Phone>
            <Mail>
              <img src="images/telephone-icon.svg" />
              <p>
                E-mail: <span>info@petrongsolutuonscom</span>
              </p>
            </Mail>
          </List>
        </FooterTop>
        <FooterBottom>
          <p>Petrong Software Solution Copyright 2022 - All Right Reserved</p>
        </FooterBottom>
      </Wrapper>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  padding: 0 3rem;
  background-color: ${(props) => props.theme.thirdBlack};
  height: 80vh;
  @media screen and (max-width: 996px) {
    height: auto;
  }
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-image: url("images/footer-bg-img.svg");
  background-repeat: no-repeat;
  height: 100%;
  padding: 4rem 3rem;
  max-width: 115rem;
  margin: 0 auto;
  background-position: 50% 50%;
`;
const FooterTop = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 3rem;
  margin-bottom: 5rem;
  /* align-items: center; */
`;
const List = styled.ul``;

const ListTitle = styled.h4`
  font-family: "Montserrat";
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: #fff;
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5rem;
`;
const ListItem = styled.li`
  font-family: "Montserrat";
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;
  margin-bottom: 1rem;
  cursor: pointer;
  color: ${(props) => props.theme.mainGrey};
  transition: 0.5s all;
  &:hover {
    color: #fff;
  }
`;
const Social = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  color: ${(props) => props.theme.mainGrey};
  gap: 1rem;
  div {
    border-radius: 50%;
    background: ${(props) => props.theme.mainBlack};
    width: 3rem;
    height: 3rem;

    a {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
    }
  }
`;
const Phone = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  color: ${(props) => props.theme.mainGrey};
  font-family: "Montserrat";

  img {
    margin-right: 1rem;
  }
  > p {
    font-weight: 400;
    font-size: 13px;
    line-height: 16px;
  }
`;
const Mail = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  color: ${(props) => props.theme.mainGrey};
  font-family: "Montserrat";
  img {
    margin-right: 1rem;
  }

  > p {
    font-weight: 400;
    font-size: 13px;
    line-height: 16px;

    span {
      color: ${(props) => props.theme.mainGreen};
      cursor: pointer;
      &:hover {
        color: #34eb8c;
      }
    }
  }
`;

const FooterBottom = styled.div`
  height: 2rem;

  > p {
    font-family: "Montserrat";
    font-weight: 400;
    font-size: 13px;
    line-height: 16px;
    color: #fff;
  }
`;
