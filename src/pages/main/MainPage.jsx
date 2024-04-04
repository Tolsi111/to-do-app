import React, {useEffect, useState } from 'react';
import StartFirebase from "../../config/firebase-config";
import {ref, remove} from "firebase/database";
import Card from '../../components/Card/Card';
import './MainPage.css'

function MainPage() {

    const [initialMemos, setInitialMemos] = useState([]);
    const [memos, setMemos] = useState([]);
    const [lastModified, setLastModified] = useState(true);
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
                setMemos(sortMemos(initialMemos,lastModified));
            } else {
                // filter memos
                const filtered = initialMemos.filter((item) => {
                    const memoTitle = item.title.toLowerCase();
                    const memoText = item.text.toLowerCase();
                    return memoTitle.includes(searchTerm.toLowerCase()) || memoText.includes(searchTerm.toLowerCase());
                })
                // maintain sort
                setMemos(sortMemos(filtered,lastModified));
            }
          }
    }

    function handleChecboxChange() {
        setMemos(sortMemos(memos,!lastModified))
        setLastModified(!lastModified);

    }

    function onDeleteMemo(id) {
        const memoRef = ref(db, '/memos/' + id);
        remove(memoRef).then(() => { 
            // if success, remove from the UI too
            setMemos(prevState => {
                return prevState.filter((memoItem) => {
                    return memoItem.id !== id;
                })
            })
        }).catch((err) => {
            console.log(err)
        });
        
    }

    async function handleEdit(memo) {
        // remove by id
        const memoRef = ref(db, '/memos/' + memo.id);
        remove(memoRef).catch((err) => {
            console.log(err)
        });
        // create new
        const response = await fetch('https://to-do-app-619a8-default-rtdb.europe-west1.firebasedatabase.app/memos.json', {
            method: 'POST',
            body: JSON.stringify(memo),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await response.json();
        window.location.reload();
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
                        Last modified
                        <input
                        type="checkbox"
                        checked={lastModified}
                        onChange={handleChecboxChange}
                        />
                    </label>
                </div>
            </div>
        </div>
    )
}

export default MainPage;