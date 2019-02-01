import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {

    currentUser:{}

  }
  renderProfile =() =>{
    render <Profile currentUser = {this.state.currentUser} />

  }
 handleCode = (code) => {
   Auth.login(code)
   .then(res=>{
     const currentUser = res
     this.setState({currentUser}, this.props.history.push("/profile"))
   })
 }
 handleCallback = ({location}) => {
   return <Callback localtion={location} handleCode={this.handleCode} />
 }

  render() {
    return (
      <div className="App">
      <h1> Meu Spotify </h1>
      </br>
        <Login currentUser= {this.state.currentUser}/>
        <Route exact path="/callback" component={} />
        <Route exact path="/profile" component={this.renderProfile}/>
      </div>
    );
  }
}

export default withRouter(App);
