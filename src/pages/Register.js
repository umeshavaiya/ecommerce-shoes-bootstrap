import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, Link } from 'react-router-dom'
import { registerInitiate } from '../redux/action'
import './Register.css'

const Register = () => {
    const [state, setstate] = useState({
        displayName: '',
        email: '',
        password: '',
        passwordConfirm: ''
    });

    const { currentUser } = useSelector((state) => state.user)

    const history = useHistory();

    useEffect(() => {
        if (currentUser) {
            history.push('/')
        }
    }, [currentUser, history])

    const dispatch = useDispatch();

    const { email, password, displayName, passwordConfirm } = state;
    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== passwordConfirm) {
            return;
        }
        dispatch(registerInitiate(email, password, displayName))
        setstate({ email: '', displayName: '', password: '', passwordConfirm: '' })
    };
    const handleChange = (e) => {
        let { name, value } = e.target;
        setstate({ ...state, [name]: value })
    }
    return (
        <div>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css" integrity="sha512-YWzhKL2whUzgiheMoBFwW8CKV4qpHQAEuvilg9FAn5VJUDwKZZxkJNuGM4XkWuk94WCrrwslk8yWNGmY1EduTA==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
            <div id="register-form">
                <form id='form-signup' onSubmit={handleSubmit}>
                    <h1 className='h3 mb-3 font-weight-normal' style={{ textAlign: "center" }}>
                        Sign up
                    </h1>
                    <input
                        type="text"
                        id="displayName"
                        className="form-control"
                        placeholder="Full Name"
                        name="displayName"
                        onChange={handleChange}
                        value={displayName}
                        required
                    />
                    <input
                        type="email"
                        id="userEmail"
                        className="form-control"
                        placeholder="Email Address"
                        name="email"
                        onChange={handleChange}
                        value={email}
                        required
                    />

                    <input
                        type="password"
                        id="inputPassword"
                        className="form-control"
                        placeholder="Password"
                        name="password"
                        onChange={handleChange}
                        value={password}
                        required
                    />
                    <input
                        type="password"
                        id="inputRePassword"
                        className="form-control"
                        placeholder="Confirm Password"
                        name="passwordConfirm"
                        onChange={handleChange}
                        value={passwordConfirm}
                        required
                    />
                    <button className='btn btn-primary btn-block' type='submit'>
                        <i className="fas fa-user-plus"></i> Sign Up
                    </button>
                    <hr />
                    <Link to='/login'>
                        <button className='btn btn-secondary btn-block' type='submit'>
                            <i className="fas fa-sign-in-alt"></i> Back to Login
                        </button>
                    </Link>
                </form>
            </div>
        </div>
    )
}

export default Register
