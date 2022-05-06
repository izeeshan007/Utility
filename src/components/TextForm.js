import React, {useState} from 'react'

export default function TextForm(props){
    const handleUpClick = ()=>{
        // console.log("uppercase Was Clicked " + text)
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to UpperCase", "success")
    }
    const handleLoClick = ()=>{
        // console.log("lowercase Was Clicked " + text)
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert('Converted to LowerCase', 'success')
    }
    const handleClearClick = ()=>{
        let newText ="";
        setText(newText)
    }
    const handleRemoveExtSp = ()=>{
        let newText =text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert('Removed Extra Spaces', 'success')
    }

    const handleCopy = ()=>{
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert('Copied to Clipboard!', 'success');
    }

    const handleOnChange = (event)=>{
        // console.log("handle");
        setText(event.target.value);
    }

    const [text, setText] = useState('');
    // setText = "New text";
    return (
        <>
         <div className='conatiner' style={{color:props.mode==='light' ? 'black': 'White'}} >
<h1>{props.heading}</h1>  

<div className='mb-3'>
<textarea className='form-control' id="myBox" rows="8" style={{backgroundColor: props.mode==='light' ? 'white': '#1b1b1b', color:props.mode==='light' ? 'black': 'White'}} value={text} onChange={handleOnChange}></textarea>
</div>
<button className='btn btn-primary mx-3' onClick={handleUpClick} >Covert To UpperCase</button>
<button className='btn btn-primary mx-3' onClick={handleLoClick} >Covert To LowerCase</button>
<button className='btn btn-danger mx-3' onClick={handleClearClick} >Clear All</button>
<button className='btn btn-success mx-3' onClick={handleRemoveExtSp} >Remove Extra Space</button>
<button className='btn btn-primary mx-3' onClick={handleCopy} >Copy</button>







 </div>    
<div className="container my-3 " style={{color:props.mode==='light' ? 'black': 'White'}} >
    <h1>Your text Summary</h1>
    <p>{text.split(" ").length} words and {text.length} charactors</p>
    <p>{0.008*text.split(" ").length} Minutes to Read</p>
    <p>{text.split(".").length-1} Sentences</p>


    <h2>Preview</h2>
    <p>{text.length>0?text:"Enter Text in above Box to Preview here"}</p>
</div>


        </>

    )
}


