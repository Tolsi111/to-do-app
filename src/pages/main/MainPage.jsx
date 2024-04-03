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
        text: "Remember to stay sharp by reading. It can be enything, just stop playing on the computer all day. "
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
        text: "Remember to stay sharp by reading. It can be enything, just stop playing on the computer all day. "
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
        text: "Remember to stay sharp by reading. It can be enything, just stop playing on the computer all day. "
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
        text: "Remember to stay sharp by reading. It can be enything, just stop playing on the computer all day. "
    },
    
    
]

function MainPage() {

    const [memos, setMemos] = useState([]);

    function onDeleteMemo(id) {
        setMemos(prevState => {
            return prevState.filter((memoItem) => {
                return memoItem.props.id !== id;
            })
        })
        //also delete from db
    }

    useEffect(() => {
        setMemos(fetchedMemos.map((memoItem, index) => {
            return <Card key={index} id={index} title={memoItem.title} text={memoItem.text} onDelete={onDeleteMemo}/>
        }))
    }, [])

    return(
        <div className="main-container">
            {memos}
        </div>
    )
}

export default MainPage;