import endCred from '../video/video_3.webm'
import '../style/GameOver.scss'

const GameOver = () => {

  return (
    <div className={'endCredits'}>
      <video src={endCred} autoPlay={true}>wow</video>
    </div>
  )
}

export default GameOver;