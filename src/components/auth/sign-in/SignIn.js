import React, { Component } from 'react'
import {InputComponent} from '../../input-components/InputComponent'
import {signInWithGoogle} from '../../../firebase/config'



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

    onSubmitHandler = e => {
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
        
        console.log(this.state);

        // to Clear the state after submit
        this.setState({
            email: '',
            password: '',
            errors:{}
        })
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
                            <input className="btn btn-success btn-block" type="submit" value="Sign-in" />
                            <input className="btn btn-dark btn-block" onClick={signInWithGoogle} value="Google Sign-in"/>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default SignIn
