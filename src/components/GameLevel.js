import '../style/GameLevel.scss'
import {useState} from "react";
import one from '../imgs/memefrontpage.png'

const GameLevel = ({setGameMode}) =>{
    const [image,setImage] = useState(1);
    console.log(image);
    return(
        <div className={'gameLevel'}>
            <div className={'gameLevelBtns'}>
                <div className={'level1'} onClick={() => setGameMode(3)}/>
                <div className={'level2'} onClick={() => setGameMode(4)}/>
                <div className={'level3'} onClick={() => setGameMode(5)}/>
                <div className={'gameLevelImgs'}>
                    {
                        <img src={one} alt="wow" id={'one'}/>
                    }
                </div>
            </div>
        </div>
    )
}
export default GameLevel;