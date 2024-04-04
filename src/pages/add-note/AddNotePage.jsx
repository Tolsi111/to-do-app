import { useNavigate } from "react-router-dom";
import StartFirebase from "../../config/firebase-config";
import {ref, remove} from "firebase/database";
import './AddNotePage.css'
import Card from '../../components/Card/Card';

function AddNotePage() {

    const navigate = useNavigate();
    const db = StartFirebase();

    function goBack(id) {
        navigate('/');
    }

    async function handleSave(memo) {
        //save memo
        //maybe force refresh after
        memo.id = 0;
        console.log(memo);
        const response = await fetch('https://to-do-app-619a8-default-rtdb.europe-west1.firebasedatabase.app/memos.json', {
            method: 'POST',
            body: JSON.stringify(memo),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await response.json();
        console.log(data)
        navigate('/');
        window.location.reload();
    }


    return(
        <div className='main-add-note-container'>
            <Card inputForm={true} title={'Give a title'} text={'Describe your task'} onDelete={goBack} onSave={handleSave}/>
        </div>
    )
}

export default AddNotePage;