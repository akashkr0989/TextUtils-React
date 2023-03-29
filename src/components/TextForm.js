import React, { useState } from 'react'
import PropTypes from 'prop-types'



export default function TextForm(props) {

    const handleUpperCaseClick = () => {
        // console.log("Upper Case was clicked = " + text);
        setText(text.toUpperCase());
        props.showAlert("Converted to uppercase!", "success");
    }

    const handleLowerCaseClick = () => {
        setText(text.toLowerCase());
        props.showAlert("Converted to lowercase!", "success");
    }

    const handleClearClick = () => {
        setText('');
        props.showAlert("Text has been cleared!", "success");
    }

    const handleOnChange = (event) => {
        // console.log("On Change")
        setText(event.target.value)
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extraspaces is removed from the given text!", "success");
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        document.getSelection().removeAllRanges();
        props.showAlert("Copied to clipboard!", "success");
    }

    const [text, setText] = useState('');
    // text = "new text"; // wrong way to set the text
    // setText("Enter text here2"); // correct way to set the text

    return (
        <>
            <div className='container' style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{
                        backgroundColor: props.mode === 'dark' ? '#042743' : 'white',
                        color: props.mode === 'dark' ? 'white' : '#042743'
                    }}
                        id="myBox" rows="10"></textarea>
                </div>
                <button className="btn btn-primary mx-1 my-1" disabled={!text} onClick={handleUpperCaseClick}>Convert to UpperCase</button>
                <button className="btn btn-primary mx-1 my-1" disabled={!text} onClick={handleLowerCaseClick}>Convert to LowerCase</button>
                <button className="btn btn-primary mx-1 my-1" disabled={!text} onClick={handleClearClick}>Clear Text</button>
                <button className="btn btn-primary mx-1 my-1" disabled={!text} onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-primary mx-1 my-1" disabled={!text} onClick={handleExtraSpaces}>Remove Extra spaces</button>

            </div>

            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h2>Your text summary</h2>
                <p>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").filter((element) => { return element.length !== 0 }).length} Minutes read</p>
                <h3>Preview</h3>
                {text.length > 0 ? text : "Enter something in the text box to preview"}
            </div>
        </>
    )
}

TextForm.propTypes = { heading: PropTypes.string }


