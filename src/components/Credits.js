import React from "react";
import "../style/Credits.scss";
import ReactLogo from "../imgs/react.svg";

function Credits(props) {
  return (
    <>
      <div className="credits">
        <div className="heading">
          <a href={"https://github.com/untitled-team-101"} target="_blank">
            Made with
            <img className="App-logo" src={ReactLogo} />
            by @untitledTeam
          </a>
        </div>
        <div className="contributors">
          <small className="contributors-text">Contributors</small>
          <ul className="member-list">
            <li>
              <a href={"https://github.com/Ayan-Dhara"} target="_blank">
                Ayan Dhara
              </a>
            </li>
            <li>
              <a href={"https://github.com/grawish"} target="_blank">
                Grawish Sachdeva
              </a>
            </li>
            <li>
              <a href={"https://github.com/tanmayVaish"} target="_blank">
                Tanmay Vaish
              </a>
            </li>
            <li>
              <a href={"https://github.com/dhruvgarg02"} target="_blank">
                Dhruv Garg
              </a>
            </li>
            <li>
              <a href={"https://github.com/sarveshspatil111"} target="_blank">
                Sarvesh Patil
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Credits;
