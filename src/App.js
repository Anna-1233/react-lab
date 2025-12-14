import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
    // let title = 'Wall-E';
    const [title, setTitle] = useState('Wall-E');  // definicja stanu, Wall-E to wartość startowa
    const [description, setDescription] = useState('A movie about a robot');



    function handleChange(event) {
        // console.log(event.target.value);
        setTitle(event.target.value);
    }

    const titleLength = title.trim().length;

    let message = null;
    if (titleLength > 0 && titleLength < 3) {
        message = "Tytuł jest za krótki.";
    } else if (titleLength >= 3 && titleLength < 10) {
        message = "";
    } else if (titleLength >= 10) {
        message = "Tytuł jest bardzo długi.";
    }


    return (
        <div>
            <h1>My favourite movies to watch</h1>
            <h2>My favourite movie for today is {title}</h2>
            <h2>My favourite movie for today is {title.toUpperCase()}</h2>
            {titleLength > 0 && (
                <p style={{color: "steelblue"}}>{message}</p>
            )}
            <input type="text" value={title} onChange={handleChange}/>
        </div>
    );
}

export default App;
