
import React, {useState} from 'react'



export default function TextFrom(props) {

  const handelChange = (event) => {
    // setTitle(event.target.value);
    console.log("UpperCase Was Clicked" + title);
    setTitle(event.target.value);
  }

  const handelClick = () =>  {
    console.log("Upper Case Is Clicked");
    let UpperCase = title.toUpperCase();
    setTitle(UpperCase);
    props.alert("Success", "Changed To Upper Case");
  }

  const handelLoClick = () => {
    let toLower = title.toLowerCase();
    setTitle(toLower);
    props.alert("Success", "Changed To Lower Case");

  }

  const handelclear = () => {
    let text = "";
    setTitle(text);
    props.alert("Success", "Cleared The Text");

  }

  const handelCopy = () => {
    let text = document.querySelector('#mybox');
    navigator.clipboard.writeText(text.value);          // sass
    props.alert("Success", "Text Copied");
  }

  // const handleDownload = () => {
  //   const element = document.createElement("a");
  //   const file = new Blob([title], { type: 'text/plain' });
  //   element.href = URL.createObjectURL(file);
  //   element.download = "text.pdf";
  //   document.body.appendChild(element); // Required for this to work in FireFox
  //   element.click();
  // };


  const [title, setTitle] = useState("Enter Text Here");
  console.log(title); 

  

  return (
    <>
<div className='container'>
<div className="mb-3">
    <h2>{props.heading}</h2>
  <textarea className="form-control" id="mybox" rows="8" onChange={handelChange} value={title} ></textarea>
</div>
<button className="btn btn-primary mx-2 my-3" onClick={handelClick}>Convert to Uppercase</button>
<button className="btn btn-primary mx-2 my-3" onClick={handelLoClick}>Convert to Uppercase</button>
{/* <button className="btn btn-primary mx-2 my-3" onClick={handelclear}>Clear</button> */}
<button className="btn btn-primary mx-2 btn btn-secondary my-3" onClick={handelCopy} id='Btncopy'  data-bs-toggle="tooltip" data-bs-placement="top" title="Copy Text">Copy Text</button>
{/* <button onClick={handleDownload}>Download</button> */}




    </div>
    <div className="container my-2">
        <h3>Your Text Summary</h3>
        <p>{title.split(" ").length>0?title.split(" ").length-1:'0'} Words, {title.length} Characters</p>
        <p>{0.08 * title.split(" ").length}  Minutes Reading Time</p>
        <h3>Preview</h3>
        <p>{title.length>0?title: 'Enter Some Text In Input'}</p>
    </div>
    </>
  )
}
