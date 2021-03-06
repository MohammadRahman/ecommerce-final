import React, { Component } from 'react'
import { InputComponent } from '../input-components/InputComponent';
import { auth, createUserProfileDocument } from '../../../firebase/config';

export class SignUp extends Component {
    constructor() {
        super();
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: '',
            errors:{}
        }
    }
// Onchange event Handler
    onChangeHandler = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmitHandler = e => {
        e.preventDefault();
        const { displayName, email, password, confirmPassword, errors } = this.state;

        // error handling
        if (displayName === '') {
            this.setState({ errors: { displayName: 'Name is required' } })
            return;
        }
        if (email === '') {
            this.setState({ errors: { email: 'Name is required' } })
            return;
        }
        if (password === '') {
            this.setState({ errors: { password: 'Name is required' } })
            return;
        }
        if (password !== confirmPassword) {
            this.setState({ errors: { confirmPassword: 'Password did not match' } })
            return;
        }
        if (errors.length < 0) {
              this.setState({errors:{success:'you can log in'}})
          }
        
        try {
            const { user } = auth.createUserWithEmailAndPassword(email, password);
            
            createUserProfileDocument(user,  {displayName} );
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: '',
                errors:{}
            })

        } catch (error) {
            console.log('error created', error)
        }

        
    }
    render() {
        const { displayName, email, password, confirmPassword, errors } = this.state;
        return (
            <div className="container">
                <div className='card mt-5'>
                    <div className="card-header lead text-center">User Sign-up</div>
                    <div className="card-body">
                        <form onSubmit={this.onSubmitHandler}>
                            <InputComponent
                                label="Name"
                                name="displayName"
                                type="text"
                                value={displayName}
                                onChange={this.onChangeHandler}
                                error={errors.displayName}
                            />
                            <InputComponent
                                label="Email"
                                name="email"
                                type="email"
                                value={email}
                                onChange={this.onChangeHandler}
                                error={errors.email}
                            />
                            <InputComponent
                                label="Password"
                                name="password"
                                type="password"
                                value={password}
                                onChange={this.onChangeHandler}
                                error={errors.password}
                            />
                            <InputComponent
                                label="Confirm Password"
                                name="confirmPassword"
                                type="password"
                                value={confirmPassword}
                                onChange={this.onChangeHandler}
                                error={errors.confirmPassword}
                            />
                            <div className="form-group">
                                <button className="btn btn-success btn-block" type="submit" >Sign up</button>
                            </div>

                        </form>
                    </div>
              </div>
                
            </div>
        )
    }
}

export default SignUp
