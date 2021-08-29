import React,{useState} from 'react'

export default function Textform(props) {
    const [text, setText] = useState('Enter The Text here');
    const handleUpperCaseClick =()=> {
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert('Convert in to Upper case','success');
    }
    const handleLowerCaseCaseClick =()=> {

        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert('Convert in to Lower case','success');
    }
    const handelChange =(event,)=> {
        console.log(event.target.value);
        setText(event.target.value);
        
    }
    return (
        <div>
            <div className="container" style={{color:props.mode==='dark'?'white':'blank'}}>
                <div className="mb-3">
                    <h1>{props.heading}</h1>
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Enter Your Text</label>
                    <textarea className="form-control" style={{backgroundColor:props.mode==='dark'?'red':'grey',color:props.mode==='dark'?'white':'blank'}} value={text} onChange={handelChange} id="exampleFormControlTextarea1" rows="8"></textarea>
                    <button className="btn btn-primary mx-2" onClick={handleUpperCaseClick}>Convert to UperCase</button>
                    <button className="btn btn-primary mx-2" onClick={handleLowerCaseCaseClick}>Convert to LowerCase</button>
                </div>
            </div>
            <div className="container my-2" style={{color:props.mode==='dark'?'white':'blank'}}>
                <h1>Your text summary</h1>
                <p>{text.split(" ").length} and {text.length} characters</p>
                <p>{.008*text.split(" ").length} Read mintus</p>
                <h3>Priview</h3>
                <p>{text}</p>
            </div>
        </div>
    )
}
