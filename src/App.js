import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Homepage } from "./pages/homepage/Homepage";
import { Wiki } from "./components/wiki/Wiki";
import { LandingPage } from "./pages/landing-page/LandingPage";
import { Shop } from "./pages/shop/Shop";
import { Directory } from "./components/directory/Directory";
import Navbar from "./components/navbar/Navbar";
import CheckOut  from "./pages/check-out/CheckOut";
import { SignIn } from "./components/auth/sign-in/SignIn";
import { auth, createUserProfileDocument } from './firebase/config';
import { connect } from 'react-redux';
import SignUp from "./components/auth/sign-up/SignUp";

class App extends React.Component {
  
  constructor() {
    super();
    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;
  
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = createUserProfileDocument(userAuth);
        const snapShot = (await userRef).onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          },()=> console.log(userAuth))
        })
      }
      else {
        this.setState({
          currentUser:userAuth
        })
      }
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
}
  
  render(){
  return (
    <Router>
      <div>
        <Navbar currentUser={this.state.currentUser}></Navbar>
        <Switch>
          <Route exact path="/" component={Homepage}></Route>
          <Route exact path="/categories" component={Directory}></Route>
          <Route exact path="/checkout" component={CheckOut}></Route>
          <Route exact path="/collections" component={Shop}></Route>
          <Route exact path="/landing-page" component={LandingPage}></Route>
          <Route exact path="/sign-in" component={SignIn}></Route>
          <Route exact path="/sign-up" component={SignUp}></Route>
          <Route exact path="/wiki" component={Wiki}></Route>
        </Switch>
      </div>
    </Router>
  );
}
};
const mapStateToProps = state => ({
  currentUser:state.auth.currentUser
})
export default connect(mapStateToProps)(App);
