import './Header.css'
import NavButton from '../NavButtton/NavButton';
function Header() {

    return(
        <div className='header-container'>
            <h2>Test ToDo WebApp</h2>
            <div className='toolbox'>
                <NavButton text='Add new note' navDestination='/add'/>
                <NavButton text='404 page' navDestination='/randomstring'/>
                <NavButton text='home page' navDestination='/'/>
            </div>
        </div>
    )
}

export default Header;