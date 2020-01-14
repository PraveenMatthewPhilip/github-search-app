import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'
  
class Navbar extends Component{

    static defaultProps = {
        title: 'GitHub Finder'
    }
    static propTypes = {
        title: PropTypes.string.isRequired
    }
    render(){
        return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <Link className="navbar-brand" to="/">
                {this.props.title}
            </Link>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/about">About</Link>
                    </li>
                </ul>
            </div>

           </nav>
        )
    }

}

export default Navbar;