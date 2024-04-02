import { useNavigate } from "react-router-dom";
import './NavButton.css'

function NavButton(props) {

    const navigate = useNavigate();

    function handleNav() {
        navigate(props.navDestination)
    }

    return(
        <div className="button-wrapper">
            <h3 onClick={handleNav}>{props.text}</h3>
        </div>
    )
}

export default NavButton;