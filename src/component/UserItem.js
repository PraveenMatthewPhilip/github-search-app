import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class UserItem extends Component{

    render(){
        const {avatar_url, login} = this.props.user
        return(
            <div className="card" style={{"minWidth":150}}>
                <img className="card-img-top" src={avatar_url} alt="" />
                <h5 className="card-title">{login}</h5>
                <Link className="btn btn-dark" to={`/user/${login}`}>More</Link>
            </div>
        )
    }
}

export default UserItem;