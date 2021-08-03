import endCred from '../video/video_3.webm'
import '../style/GameOver.scss'
import {Redirect} from "react-router-dom";
import {useEffect, useState} from "react";

const GameOver = () => {
  const [cred, setCred] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setCred(true)
    }, 8000);
  })

  return (
    <div className={'endCredits'}>
      <video src={endCred} autoPlay={true}>wow</video>
      {
        cred ? <Redirect to={"/credits"}/> : null
      }
    </div>
  )
}

export default GameOver;