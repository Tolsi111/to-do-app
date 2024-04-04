import React, {useEffect, useState } from 'react';
import StartFirebase from "../../config/firebase-config";
import {ref, remove} from "firebase/database";
import Card from '../../components/Card/Card';
import './MainPage.css'

function MainPage() {

    const [initialMemos, setInitialMemos] = useState([]);
    const [memos, setMemos] = useState([]);
    const [newestFirst, setNewestFirst] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');

    const db = StartFirebase();

    function sortMemos(arr, sort) {
        // get sorted array of memos by date
        return sort? [...arr].sort((a, b) => new Date(a.date) - new Date(b.date) ) : [...arr].sort((a, b) => new Date(b.date) - new Date(a.date))
    }

    function handleKeyPress(event) {
        // Handle search
        if (event.key === 'Enter') {
            if(searchTerm === '') {
                // clear search, maintain sort
                setMemos(sortMemos(initialMemos,newestFirst));
            } else {
                // filter memos
                const filtered = initialMemos.filter((item) => {
                    const memoTitle = item.title.toLowerCase();
                    const memoText = item.text.toLowerCase();
                    return memoTitle.includes(searchTerm.toLowerCase()) || memoText.includes(searchTerm.toLowerCase());
                })
                // maintain sort
                setMemos(sortMemos(filtered,newestFirst));
            }
          }
    }

    function handleChecboxChange() {
        setMemos(sortMemos(memos,!newestFirst))
        setNewestFirst(!newestFirst);

    }

    function onDeleteMemo(id) {
        setMemos(prevState => {
            return prevState.filter((memoItem) => {
                return memoItem.props.id !== id;
            })
        })
        //also delete from db
        // careful how you handle delete. maybe make a call to refresh after each operation.
    }

    function handleEdit(memo) {
        console.log(memo);
        console.log("EDIT");
    }

    useEffect(() => {
        async function getMemos() {
            // fetch
            const response = await fetch('https://to-do-app-619a8-default-rtdb.europe-west1.firebasedatabase.app/memos.json');
            const responseData = await response.json();

            const loadedMemos = [];
            // parse
            for(const key in responseData) {
                loadedMemos.push({
                    id: key,
                    title: responseData[key].title,
                    text: responseData[key].text,
                    date: responseData[key].date
                })
            }
            console.log(loadedMemos);
            setInitialMemos(loadedMemos);
            setMemos(loadedMemos);
        }

        getMemos().catch((err) => {
            console.log(err);
        })
    }, [])


    return(
        <div className="main-container">
            {memos.length >= 0 && memos.map((memoItem) => {
                    return <Card key={memoItem.id} id={memoItem.id} inputForm={false} date={memoItem.date} title={memoItem.title} text={memoItem.text} onDelete={onDeleteMemo} onSave={handleEdit}/>
                })}
            {memos.length === 0 && <div className='not-found'>No memos found, sadly.</div>}
            <div className='main-toolbox'>
                <div>
                    <input className='main-search-box'
                    placeholder='search'
                    onKeyDown={handleKeyPress}
                    onChange={(e) => {setSearchTerm(e.target.value)}}/>
                </div>
                <div className='main-sort-box'>
                    <label>
                        Newest first
                        <input
                        type="checkbox"
                        checked={newestFirst}
                        onChange={handleChecboxChange}
                        />
                    </label>
                </div>
            </div>
        </div>
    )
}

export default MainPage;