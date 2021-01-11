import './App.css';
import {InputComponent} from "./components/InputComponent/InputComponent";
import {ImageList} from "./components/ImageList/ImageList";
import {useState} from 'react'


function App() {
    const key = `19845645-a0c6eba89c2d765e51efc1d07`;
    const buildRequest = (request) => {
        return `https://pixabay.com/api/?key=${key}&q=${request}&image_type=photo`
    }
    const [data, setData] = useState();


    const updateRequest = (request) => {
        if (request) {
            (
                async () => {
                    const answer = await fetch(buildRequest(request));
                    if (answer.status === 200) {
                        const dataJson = await answer.json();
                        setData(dataJson);
                    }
                })()
        }
    };


    return (
        <div className="App">
            <InputComponent updateRequest={updateRequest}/>
            {(
                () => {
                    if (data) {
                        return <ImageList data={data}/>
                    }
                })()}
        </div>
    );
}

export default App;
