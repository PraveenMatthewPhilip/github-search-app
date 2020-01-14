import React, { Fragment } from 'react';
import axios from 'axios';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Navbar from './component/layout/Navbar';
import Users from './component/Users';
import Search from './component/Search';
import SingleUser from './component/SingleUser';
import Alert from './component/Alert';
import About from './component/layout/About';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      users: [],
      loading: false,
      alert: null
        }
        this.searchSingleUser = this.searchSingleUser.bind(this);
        this.clearUsers = this.clearUsers.bind(this);
  }
  componentDidMount(){
    this.setState({
      loading: true
    })
    axios.get('https://api.github.com/users').then(response => {
      this.setState({
        users: response.data,
        loading: false
      })
    })
  }
  searchSingleUser(text){
    if(text === '')
    {
      this.setState(
        {alert :  {
          type:'danger',
          message: 'No text entered'
        }}
      )
      setTimeout(()=>{
        this.setState({
          alert: null
        })
      },3000)
    }
    else if(text === 'god'){
      this.setState(
        {alert :  {
          type:'success',
          message: 'God mode activated'
        }}
      )
      setTimeout(()=>{
        this.setState({
          alert: null
        })
      },3000)
    }
    else{
    this.setState({
      loading: true
    })
    axios.get('https://api.github.com/search/users', {
      params: {
      q: text
      }
    }).then(response => {
      this.setState({
        users: response.data.items,
        loading: false
      })
    })
  }
  }
  clearUsers(){
    this.setState({
      users: []
    })
  }
  render(){
    return (
      <Fragment>
        <BrowserRouter>
        <Navbar />
        <div className="container">
          <Switch>
        <Route path='/' exact render={props => (
        <Fragment>
          <Alert alert={this.state.alert} />
          <Search searchSingleUser={this.searchSingleUser} clearUsers={this.clearUsers} showClear={this.state.users.length > 0 ? true: false}/>
          
            <Users users={this.state.users} loading={this.state.loading}/>
            </Fragment>)}
          />
          <Route path='/user/:login'  exact render={props => (
            <SingleUser {...props}/>
          )}/>
          <Route path='/about'  exact component={About}/>
          </Switch>
        </div>
        </BrowserRouter>
      </Fragment>
    );
  }
}

export default App;