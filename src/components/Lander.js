
import '../styles/Lander.css';
import window from '../Assets/window.png';
import goldrings from '../Assets/goldrings.png';
import king from '../Assets/king.png';
import logo from '../Assets/logo.png';

const Lander = () => {
    return(
        <div className="lander">
            <img src={logo} alt="" className="logo" />
            <img src={window} alt="" className="window" />
            <div className="goldrings">
                <img src={goldrings} alt="" className="goldrings-img goldrings-img-up" />
                <img src={goldrings} alt="" className="goldrings-img" />
            </div>
            <img src={king} alt="" className="king" />
        </div>
    )
}

export default Lander;