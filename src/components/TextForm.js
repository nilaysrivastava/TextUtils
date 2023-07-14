import React, {useState} from 'react'

export default function TextForm(props) {
  const myStyle={
    // color: 'black',
    // backgroundColor: '#0d6efd',
    padding: '30px',
    borderRadius: '15px'
  }
  const handleUpClick=()=>{
    let newText=text.toUpperCase();
    setText(newText);
  }
  const handleLoClick=()=>{
    let newText=text.toLowerCase();
    setText(newText);
  }
  const handleClearClick=()=>{
    let newText='';
    setText(newText);
  }
  const handleCopy=()=>{
    var text=document.getElementById("myBox");
    text.select();
    text.setSelectionRange(0,9999);
    navigator.clipboard.writeText(text.value);
  }
  const handleSpaces=()=>{
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "));
  }
  const handleOnChange=(event)=>{
    setText(event.target.value);
  }
  
  const [text, setText] = useState('');
  return (
    
    <>
    <div className={`cantainer container-${props.mode} bg-${props.mode} text-${props.mode==='light'?'dark':'light'}`} style={myStyle} > 
      <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className={`form-control form-${props.mode} bg-${props.mode} text-${props.mode==='light'?'dark':'light'}`} value={text} onChange={handleOnChange} id="myBox" rows="10"></textarea>
        </div>
        <button className="btn btn-outline-primary mx-2" onClick={handleUpClick}>Convert to UPPERCASE</button>
        <button className="btn btn-outline-primary mx-2" onClick={handleLoClick}>Convert to lowercase</button>
        <button className="btn btn-outline-primary mx-2" onClick={handleClearClick}>Clear text</button>
        <button className="btn btn-outline-primary mx-2" onClick={handleCopy}>Copy text</button>
        <button className="btn btn-outline-primary mx-2" onClick={handleSpaces}>Remove extra spaces</button>
    </div>
    <div className={`container my-2 text-${props.mode==='light'?'dark':'light'}`}>
      <h2>Your text summary</h2>
      <p>{text.split(" ").length-1} words, {text.length} characters</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  );
}
