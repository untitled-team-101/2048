import {Link} from "react-router-dom";
import "../style/HowTo.scss";
import pressRight from "../imgs/press-right.gif";
import {motion} from "framer-motion";

const HowToDesktop = () => {
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
        <img className={"pressHowTo"} src={pressRight}/>
        <Link to={"/game"}>
          <div className={"nextBtn"}>Next</div>
        </Link>
      </div>
    </motion.div>
  );
};

export default HowToDesktop;
