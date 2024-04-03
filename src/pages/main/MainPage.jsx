import React, { useEffect, useState } from 'react';
import Card from '../../components/Card/Card';
import './MainPage.css'

const fetchedMemos = [
    {
        title: "Lorem impsum",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
    {
        title: "Go to gym",
        text: "Haven't had a leg day in a long while, ey? Unless you prefer chicken legs, go out there and do some lifting or else. >:["
    },
    {
        title: "Do some reading",
        text: "Remember to stay sharp by reading. It can be anything, just stop playing on the computer all day. "
    },
    {
        title: "Lorem impsum",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
    {
        title: "Go to gym",
        text: "Haven't had a leg day in a long while, ey? Unless you prefer chicken legs, go out there and do some lifting or else. >:["
    },
    {
        title: "Do some reading",
        text: "Remember to stay sharp by reading. It can be anything, just stop playing on the computer all day. "
    },
    {
        title: "Lorem impsum",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
    {
        title: "Go to gym",
        text: "Haven't had a leg day in a long while, ey? Unless you prefer chicken legs, go out there and do some lifting or else. >:["
    },
    {
        title: "Do some reading",
        text: "Remember to stay sharp by reading. It can be anything, just stop playing on the computer all day. "
    },
    {
        title: "Lorem impsum",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
    {
        title: "Go to gym",
        text: "Haven't had a leg day in a long while, ey? Unless you prefer chicken legs, go out there and do some lifting or else. >:["
    },
    {
        title: "Do some reading",
        text: "Remember to stay sharp by reading. It can be anything, just stop playing on the computer all day. "
    },
    
    
]

function MainPage() {

    const [memos, setMemos] = useState([]);
    const [newestFirst, setNewestFirst] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    function handleKeyPress(event) {// IMPROVE THIS
        if (event.key === 'Enter') {
            console.log('SEARCH');
            if(event.target.value === '') {
                setMemos(fetchedMemos.map((memoItem, index) => {
                    return <Card key={index} id={index} inputForm={false} title={memoItem.title} text={memoItem.text} onDelete={onDeleteMemo} onSave={handleEdit}/>
                }));
            } else {
                console.log(searchTerm);
                setMemos(memos.filter((item) => {
                    const memoTitle = item.props.title.toLowerCase();
                    const memoText = item.props.text.toLowerCase();
                    return memoTitle.includes(searchTerm.toLowerCase()) || memoText.includes(searchTerm.toLowerCase());
                }));
            }
          }
    }

    function onDeleteMemo(id) {
        setMemos(prevState => {
            return prevState.filter((memoItem) => {
                return memoItem.props.id !== id;
            })
        })
        //also delete from db
    }

    function handleEdit(memo) {
        console.log(memo);
        console.log("EDIT");
    }

    useEffect(() => {
        setMemos(fetchedMemos.map((memoItem, index) => {
            return <Card key={index} id={index} inputForm={false} title={memoItem.title} text={memoItem.text} onDelete={onDeleteMemo} onSave={handleEdit}/>
        }))
    }, [])

    return(
        <div className="main-container">
            {memos}
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
                        onChange={(e) => {setNewestFirst(!newestFirst)}}
                        />
                    </label>
                </div>
            </div>
        </div>
    )
}

export default MainPage;