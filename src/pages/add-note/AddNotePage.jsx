import { useNavigate } from "react-router-dom";
import './AddNotePage.css'
import Card from '../../components/Card/Card';

function AddNotePage() {

    const navigate = useNavigate();

    function goBack(id) {
        navigate('/');
    }

    function handleSave(memo) {
        //save memo
        //maybe force refresh after
        memo.id = 0;
        console.log(memo);
        console.log("SAVE NEW");
        navigate('/');
    }


    return(
        <div className='main-add-note-container'>
            <Card inputForm={true} title={'Give a title'} text={'Describe your task'} onDelete={goBack} onSave={handleSave}/>
        </div>
    )
}

export default AddNotePage;