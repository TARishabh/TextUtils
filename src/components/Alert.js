import React from 'react'

export default function Alert(props) {
    return (
        <div style={{height:'100px'}}>
            {props.alert && <div class={`alert alert-${props.alert.type} alert-dismissible fade show role=alert`}>
            <strong>{props.alert.type}: {props.alert.message}</strong>
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>}
        </div>
    )
}

    // if (props.alert){
    //     return (
    //             <div class="alert alert-warning alert-dismissible fade show" role="alert">
    //             <strong>{props.alert}</strong>
    //             <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    //             </div>
    //     )}
    // else{
    //     return null
    // }
