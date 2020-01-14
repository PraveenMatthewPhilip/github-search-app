import React, {Component, Fragment} from 'react';
import { Link } from 'react-router-dom';
class SingleUser extends Component{
    render(){
       
        return(
            <Fragment>
            <h1>{this.props.match.params.login}</h1>
            <Link className="btn btn-light" to='/'>Back to home</Link>
            </Fragment>
        )
    }
}
export default SingleUser;