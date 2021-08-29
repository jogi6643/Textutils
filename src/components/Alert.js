import React from 'react'

function Alert(props) {
 
    return (
        
        
            <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                <stron>{props.alert.type}</stron>:{props.alert.msg}
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        
    )
}

export default Alert
