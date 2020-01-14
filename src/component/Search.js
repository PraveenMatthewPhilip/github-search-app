import React, { Component, Fragment} from 'react';

class Search extends Component{

    constructor(props){
        super(props);
        this.state = {
            text: ''
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.onClick = this.onClick.bind(this)
    }
    onChange(e){
        this.setState({
            text: e.target.value
        })
    }
    onSubmit(e){
        e.preventDefault();
        this.props.searchSingleUser(this.state.text);
    }
    onClick(){
        this.props.clearUsers();
    }
    render(){
        return(
            <Fragment>
                <form className="form-group" onSubmit={this.onSubmit}>
                    <input className="form-control" placeholder="Enter user ..." onChange={this.onChange}/>
                    <input type="submit" value="Search"  className="btn btn-primary btn-block"/>
                </form>
                {this.props.showClear && (<button onClick={this.onClick} className="btn btn-light btn-block">Clear</button>)}
            </Fragment>
        )
    }
}

export default Search;