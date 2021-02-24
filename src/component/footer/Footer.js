import React from "react";
import reactLogo from "../../assets/reactVlogo.png";
import JsLogo from "../../assets/JsLogo.png";
import commerceLogo from "../../assets/commerceLogo.png";
import linkdin from "../../assets/linkdinLogo.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerdiv">
        <a className="linkText" href="www.linkedin.com/in/malamine-bah/">
          Malamine Bah
        </a>

        <img
          className="footerimg"
          src={linkdin}
          alt="Mangoshop"
          height="30px"
          width="50px"
        />
      </div>
      <div className="footerBox">
        <h3>Stack : </h3>
        <img
          className="footerimg"
          src={reactLogo}
          alt="Mangoshop"
          height="30px"
          width="80px"
        />
        <img
          className="footerimg"
          src={JsLogo}
          alt="Mangoshop"
          height="30px"
          width="30px"
        />
        <img
          className="footerimg"
          src={commerceLogo}
          alt="Mangoshop"
          height="30px"
          width="90px"
        />
      </div>
    </div>
  );
};
export default Footer;
