import './Card.css'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

function Card() {

    function handleEdit() {
        console.log("edit");
    }

    function handleDelete() {
        console.log("delete");
    }

    return(
        <div className="card-wrapper">
            <div className='card-title'>title</div>
            <div className='card-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
            <div className='card-toolbox'>
                <div className='card-button-edit' onClick={handleEdit}><EditIcon/></div>
                <div className='card-button-delete' onClick={handleDelete}><DeleteIcon/></div>
            </div>
        </div>
    )
}

export default Card;