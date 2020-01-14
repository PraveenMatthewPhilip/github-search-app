import React, {Component} from 'react';
class Alert extends Component{

    render(){
        
        if(this.props.alert !== null){
            const {type, message} = this.props.alert
        
        return(
            <div className={`alert alert-${type}`} role="alert">
                {message}
            </div>
        )
        }
        else
        return null;
    }
}

export default Alert;