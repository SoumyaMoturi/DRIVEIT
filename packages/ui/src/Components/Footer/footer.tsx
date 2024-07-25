import React from "react";
import "./footer.scss";

const PageFooter = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="logos">
          <img
            alt="logo"
            src={require("../../assets/icons/footerLogo.png")}
            height="42px"
            width="208px"
          />
          <p className="text">Travel helps companies manage payments easily.</p>
          <div className="social-media">
            <img alt="logo" src={require("../../assets/icons/messenger.svg")} />
            <img alt="logo" src={require("../../assets/icons/linkedin.svg")} />
            <img alt="logo" src={require("../../assets/icons/twitter.svg")} />
            <img alt="logo" src={require("../../assets/icons/twoo.svg")} />
          </div>
        </div>
        <div className="company"></div>
        <div className="destinations"></div>
        <div className="newsLetter"></div>
      </div>
      <div></div>
    </div>
  );
};

export default PageFooter;
