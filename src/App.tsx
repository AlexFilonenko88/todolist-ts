import React, {useEffect, useState} from 'react';
import './App.css';
import {ToDoList} from "./Todolist";
import {Button} from "./universalComponents/Button";

type dataType = {
    body: string
    id: number
    title: string
    userId: number
}

function App() {
    // const title = "Qwer";
    // const title2 = "ddd";
    //
    // const tasks1 = [
    //     { id: 1, title: "HTML&CSS", isDone: true },
    //     { id: 2, title: "JS", isDone: true },
    //     { id: 3, title: "ReactJS", isDone: false }
    // ]
    // const tasks2 = [
    //     { id: 1, title: "Hello world", isDone: true },
    //     { id: 2, title: "I am Happy", isDone: false },
    //     { id: 3, title: "Yo", isDone: false }
    // ]
    //

    const [data, setData] = useState<Array<dataType>>([])

    const GetMeData = () => {
        setData([])
    }

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => setData(json))
    }, [])

    return (
        <div className="App">
            {/*<ToDoList title={title} titleNEW={100200} tasks={tasks1}/>*/}
            {/*<ToDoList title={title2}  tasks={tasks2}/>*/}

            <Button name={'CLEAN DATA'} callback={GetMeData}/>
            <ul>
                {data.map(el => {
                    return (
                        <li key={el.id}>
                            <span>{el.id}</span>
                            <span>{el.title}</span>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}

export default App;