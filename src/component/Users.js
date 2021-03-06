import React, {Component} from 'react';

import UserItem from './UserItem';
import Spinner from './layout/Spinner';
class Users extends Component{

    render(){
        const {users, loading} = this.props
        if(loading){
            return(<Spinner />)
        }
        else{
        return(
            <div className="card-group">
            {users.map(user => (
                <UserItem key={user.id} user={user}/>
            ))}
            </div>
        )
            }
    }
}

export default Users;