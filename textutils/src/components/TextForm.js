import React,{useState} from 'react';
export default function TextForm(props) {
    const handleUpClick = ()=>{
        console.log("Uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText)

    }

    const handleLowClick = ()=>{
        console.log("Lowercase was clicked");
        let newText = text.toLowerCase();
        setText(newText)
    }


    const handleOnChange = (event)=>{
        console.log("On change"); 
        setText(event.target.value)
    }
    
    const [text,setText] = useState("");
  return (
    <>
        <div className='mb-5'>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value = {text} onChange = {handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
        </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to uppercase</button>
            <button className="btn btn-primary mx-2  " onClick={handleLowClick}>Convert to lowercase</button>
        </div>
        <div className="container my-3">
            <h1>Your text summary</h1>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008*text.split(" ").length} minute read</p>
            <h3>Preview</h3>
            <p>{text}</p>
        </div>
    </>
  );
}
