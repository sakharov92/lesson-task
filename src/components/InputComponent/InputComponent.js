import React, {useState} from 'react';
import "./InputComponent.css"

export const InputComponent = ({updateRequest}) => {

    const [request, setRequest] = useState("");

    const inputHandler = (event) => {
        setRequest(event.target.value)
    }
    const onPressHandler = (event) => {
        if (event.key === "Enter") {
            updateRequest(request);
        }
    }

    return (
        <div className="inputCOmponent">
            <input className="input" type="text" onKeyPress={onPressHandler} onChange={(event) => {
                inputHandler((
                    event))
            }} value={request}/>
            <button className="btn" onClick={() => {
                updateRequest(request)
            }}>SEARCH
            </button>
        </div>
    )
}
