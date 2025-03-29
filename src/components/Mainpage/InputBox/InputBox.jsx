import React from "react";
import '../InputBox/InputBox.css';

function InputBox() {
    return (
        <div className="InputBox">
            <textarea 
            className="inputdiary"
            placeholder="Text here..."
            />
            <div className="buttonArea">
                    <input placeholder="username"/>
                    <input placeholder="password"/>
                    <div className = "submitButton">SUBMIT</div>
            </div>
        </div>
    );
}

export default InputBox;