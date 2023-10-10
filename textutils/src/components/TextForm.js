import React,{useState} from 'react';
export default function TextForm(props) {
    const handleUpClick = ()=>{
        console.log("Uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText)

    }
    const handleOnChange = (event)=>{
        console.log("On change"); 
        setText(event.target.value)
    }
    const [text,setText] = useState("Enter text here");
  return (
    <>
        <div className='mb-5 contd textform commit in beta'>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value = {text} onChange = {handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
        </div>
            <button className="btn btn-primary" onClick={handleUpClick}>Convert to uppercase</button>
        </div>
        <div className="container my-3">
            <h1>Your text summary</h1>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008*text.split(" ").length} minute read</p>
            <h3>Preview</h3>
            <p></p>
        </div>
    </>
  );
}
