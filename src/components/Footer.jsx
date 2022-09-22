import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

const Footer = (props) => {
  return (
    <>
      <footer>
        {props.footer}
        <BsFacebook />
        <BsLinkedin />
        <BsInstagram />
      </footer>
    </>
  );
};
export default Footer;
