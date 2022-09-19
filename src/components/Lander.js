import '../styles/Lander.css';
import window from '../Assets/window.png';
import gold_lines from '../Assets/gold_lines.png';
import throne from '../Assets/throne.png';

const Lander = () => {
    return(
        <div className='lander'>
                <img className="window" src={window} alt="" />
                <img className="gold_lines" src={gold_lines} alt="" />
                <img className="throne" src={throne} alt="" />
            
        </div>
    )
}

export default Lander;