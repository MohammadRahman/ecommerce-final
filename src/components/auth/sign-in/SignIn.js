import React, { Component } from 'react'
import {InputComponent} from '../input-components/InputComponent'
import {signInWithGoogle} from '../../../firebase/config'
import { Link } from 'react-router-dom';
import {auth} from '../../../firebase/config'
import { connect } from 'react-redux';



export class SignIn extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            errors:{}
        }
    }

    onChangeHandler = e => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    onSubmitHandler = async e => {
        e.preventDefault();
       
        const { email, password, errors } = this.state;
          

        // error handling
        if(email === '') {
            this.setState({ errors: { email: 'Email is required' } });
            return;
    }
        if(password === '') {
            this.setState({ errors: { password: 'Email is required' } });
            return;
        }
        
        try {
      
            await auth.signInWithEmailAndPassword(email, password);

        // to Clear the state after submit
        this.setState({
            email: '',
            password: '',
            errors:{}
        })
        } catch (error) {
            console.log(error)
        }

}

    render() {
        const { email, password, errors } = this.state;
        return (
            <div className='container'>
                <div className="card mt-5">
                    <div className="card-header lead text-center">User Sign-in</div>
                    <div className="card-body">
                        <form onSubmit={this.onSubmitHandler}>
                            <InputComponent label="Email" name="email" type="text" value={email} onChange={this.onChangeHandler} error={errors.email} />
                            <InputComponent label="Password" name="password" type="password" value={password} onChange={this.onChangeHandler} error={errors.password} />
                            <div className="sign-up-link">
                                <Link to="/sign-up">create account here?</Link>
                            </div>
                            <button className="btn btn-success btn-block" type="submit" >Sign-in</button>
                            <button className="btn btn-dark btn-block" onClick={signInWithGoogle} type="submit">Google Sign-in</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default SignIn;
