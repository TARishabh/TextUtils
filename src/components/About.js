// import React,{useState} from 'react'

export default function About(props) {
    // const [buttonText,UpdatedButtonText] = useState('Enable Dark Mode');
    // const [myStyle,UpdatedStyle] = useState({
    //     "color":"black",
    //     "backgroundColor":"white"
    // });

    // const handleDarkMode = () =>{
    //     if (mode === 'white'){
    //         console.log()
    //         let new_style = {
    //             "color":"white",
    //             "backgroundColor":"black"
    //         }
    //         UpdatedStyle(new_style)
    //         UpdatedButtonText('Disable Dark Mode')
    //     }
    //     else{
    //         let new_style = {
    //             "color":"black",
    //             "backgroundColor":"white"
    //         }
    //         UpdatedStyle(new_style)
    //         UpdatedButtonText('Enable Dark Mode')
    //     }
    // }
    // #d4d3d7
    return (
        <div className='container' >
            <div style = {{backgroundColor:props.mode === 'dark'?'pink':'blue'}} className="accordion" id="accordionExample">
            <div style={{backgroundColor:props.mode === 'dark'?'#d4d3d7':'white', border:props.mode === 'dark'?'2px solid grey':'2px solid black'}} className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Accordion Item #1
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div className="accordion-body ">
                    <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
                </div>
            </div>
            <div style={{backgroundColor:props.mode === 'dark'?'#d4d3d7':'white', border:props.mode === 'dark'?'2px solid grey':'2px solid black'}} className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Accordion Item #2
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
                </div>
            </div>
            <div style={{backgroundColor:props.mode === 'dark'?'#d4d3d7':'white', border:props.mode === 'dark'?'2px solid grey':'2px solid black'}} className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Accordion Item #3
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
                </div>
            </div>
            </div>
            {/* <button type="button" class="btn btn-warning my-3" >Enable Dark Mode</button> */}
            {/* <button type="button" class="btn btn-warning my-3" onClick={handleDarkMode}>Enable Dark Mode</button> */}
        </div>
    )
}
