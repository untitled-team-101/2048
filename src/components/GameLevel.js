import '../style/GameLevel.scss'
import {useState} from "react";
import one from '../imgs/memefrontpage.png'

const GameLevel = () =>{

    const [image,setImage] = useState(1);
    console.log(image);
    return(
        <div className={'gameLevel'}>
            <div className={'gameLevelBtns'}>
                <div className={'level1'} onClick={()=>setImage(1)}>3x3</div>
                <div className={'level2'} onClick={()=>setImage(2)}>4X4</div>
                <div className={'level3'} onClick={()=>setImage(3)}>5X5</div>
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