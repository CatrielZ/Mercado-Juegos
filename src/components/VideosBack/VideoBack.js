import './VideoBack.mp4'
import GameVideo from './VideoBack.mp4'
import './video.css'
const VideoBack = () =>{
    return (
        <video autoPlay loop muted className='VideoBackground'>
            <source src={GameVideo} tipe="video/mp4"/>
        </video>
    )
}

export default VideoBack;