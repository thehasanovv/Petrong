import Navbar from "../Navbar";
import Footer from "../Footer";
import { useParams } from "react-router-dom";

const Layout = ({ children }) => {
  let id = window.location.pathname !== "/";

  return (
    <>
      {id && <Navbar navBgColor={"#000"} />}
      {children}
      <Footer />
    </>
  );
};

export default Layout;
