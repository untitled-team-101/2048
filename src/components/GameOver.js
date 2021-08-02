import endCred from '../video/video_3.webm'
import '../style/GameOver.scss'
import {Redirect} from "react-router-dom";
import {useState} from "react";

const GameOver = () => {
    const [cred, setCred] = useState(false);
    localStorage.removeItem("grid");
    localStorage.setItem("score", "0");
    setTimeout(() => {
        setCred(true)
        console.log(cred);
    }, 8000);
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