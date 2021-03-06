import {Link} from "react-router-dom";
import "../style/FrontPage.scss";
import {motion} from "framer-motion";
import {BrowserView, MobileView} from "react-device-detect";
import React from "react";

const FrontPage = () => {
  const pageTransition = {
    in: {
      opacity: 1,
      x: 0,
    },
    out: {
      opacity: 0,
      x: "-100%",
    },
  };
  localStorage.removeItem("grid");
  localStorage.setItem("score", "0");
  return (
    <motion.div initial="out" animate="in" exit="out" variants={pageTransition}>
      <div className="frontPageContent">
        <div className={"frontPage"}>
          <div className={"frontPageTitle"}>2048</div>
          <BrowserView>
            <Link to={"/how_to_desktop"}>
              <div className={"playBtn"}>Play</div>
            </Link>
          </BrowserView>
          <MobileView>
            <Link to={"/how_to_mobile"}>
              <div className={"playBtn"}>Play</div>
            </Link>
          </MobileView>
        </div>
      </div>
      <div className={"frontPageFooter"}>
        Made with &#10084; by @untitledTeam
      </div>
    </motion.div>
  );
};

export default FrontPage;
