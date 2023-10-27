import React,{useState} from 'react'

export default function TextForm(props){

    const [text,setText] = useState('Your changing Text')
    
    const handleUpper = () =>{
        let upper_text = text.toUpperCase()
        setText(upper_text)
    }
    const handleLower = () =>{
        let lower_text = text.toLowerCase()
        setText(lower_text)
    }
    const handleOnChange = (event) =>{
        setText(event.target.value)
    }
    
    // const handleclear = () =>{
    //     let cleared_text = ''
    //     setText(cleared_text)
    // }

    // const textvalue = () =>{
    //     let new_text = text + 12345
    //     setText(new_text)
    // }
    // (#d1d174':'#1571f7'
    return (
        <>
            <div>
                <div className="mb-3">
                <label style={{color:props.mode === 'dark'?'white':'black'}} htmlFor="exampleFormControlTextarea1" className="form-label">Write The Text To Convert</label>
                <textarea style={{backgroundColor:props.mode === 'dark'?'#cfc9c9':'white'}} className="form-control" id="exampleFormControlTextarea1" rows="5" value={text} onChange={handleOnChange}></textarea>
                <button id="upper" type="button" className="btn btn-outline-primary" onClick={handleUpper}>Upper</button>
                <button id = "lower" type="button" className="btn btn-outline-warning" onClick={handleLower}>Lower</button>
                {/* <button id = "clear" type="button" className="btn btn-outline-warning" onClick={handleclear}>Clear</button>
                <button onClick={textvalue}>Test</button> */}
                </div>
                {/* <div className='summary'>
                    <h1>Your Text Summary</h1>
                    <p>{text.split(' ').length} Words,{text.length} Letters</p>

                    <h1>Time Required for you to read</h1>
                    <p>{text.split(' ').length * 0.008}</p>
                </div> */}
            </div>
        </>
    );
}