import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { Homepage } from "./pages/homepage/Homepage";
import { Wiki } from "./components/wiki/Wiki";
import { LandingPage } from "./pages/landing-page/LandingPage";
import { Shop } from "./pages/products/Shop";
import { Directory } from "./components/category/menu/Directory";
import Navbar from "./components/header/Navbar";
import CheckOut  from "./pages/check-out/CheckOut";
import { SignIn } from "./components/auth/sign-in/SignIn";
import { auth, createUserProfileDocument } from './firebase/config';
import { connect } from 'react-redux';
import SignUp from "./components/auth/sign-up/SignUp";
import {setCurrentUser} from './redux/actions/authAction'



export class App extends React.Component {
 
  unsubscribeFromAuth = null;
  
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      
      if (userAuth) {
        const userRef =await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          
            this.props.setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
            })
          })
      }
      else {
        this.props.setCurrentUser(userAuth)
      }
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
}
 
  
  render() {
    
  return (
    <Router>
      <div>
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/" component={Homepage}/>
          <Route exact path="/categories" component={(Directory)}  />
          <Route exact path="/checkout" component={(CheckOut)}  ></Route>
          <Route exact path="/collections" component={(Shop)} ></Route>
          <Route exact path="/landing" component={(LandingPage)} ></Route>
          <Route exact path="/login" render={()=> this.props.currentUser ? (<Redirect to="/categories" />):(<SignIn></SignIn>)}/>
          <Route exact path="/sign-up" component={(SignUp)}></Route>
          <Route exact path="/wiki" component={(Wiki)} ></Route>
        </Switch>
      </div>
    </Router>
  );
}
};
const mapStateToProps = ({user}) => ({
  currentUser: user.currentUser
});
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})
export default connect(mapStateToProps,mapDispatchToProps)(App);
