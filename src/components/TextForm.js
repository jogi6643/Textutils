import React,{useState} from 'react'

export default function Textform(props) {
    const [text, setText] = useState('Enter The Text here');
    const handleUpperCaseClick =()=> {
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleLowerCaseCaseClick =()=> {
        let newText = text.toLowerCase();
        setText(newText)
    }
    const handelChange =(event,)=> {
        console.log(event.target.value);
        setText(event.target.value);
    }
    return (
        <div>
                <div className="mb-3">
                <h1>{props.heading}</h1>
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Enter Your Text</label>
                <textarea className="form-control" value={text} onChange={handelChange} id="exampleFormControlTextarea1" rows="8"></textarea>
                <button className="btn btn-primary" onClick={handleUpperCaseClick}>Convert to UperCase</button>
                <button className="btn btn-primary" onClick={handleLowerCaseCaseClick}>Convert to LowerCase</button>
             
            </div>
        </div>
    )
}
