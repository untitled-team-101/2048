import {Link} from "react-router-dom";
import "../style/HowTo.scss";
import swipeRight from "../imgs/swipe-right.gif";

import {motion} from "framer-motion";

const HowToMobile = () => {
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

  return (
    <motion.div initial="out" animate="in" exit="out" variants={pageTransition}>
      <div className={"howToContent"}>
        <div className={"howToTitle"}>How to play 2048?</div>
        <img className={"swipeHowTo"} src={swipeRight}/>
        <Link to={"/gameLevel"}>
          <div className={"nextBtn"}>Next</div>
        </Link>
      </div>
    </motion.div>
  );
};

export default HowToMobile;
