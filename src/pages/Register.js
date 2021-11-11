import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, Link } from 'react-router-dom'
import { registerInitiate } from '../redux/action'
import Login from './Login'
import './Register.css'

const Register = (props) => {
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

    const valuesOfProps = props.trigger
    const [buttonPopup, setButtonPopup] = useState(false);

    const [closers, setClosers] = useState(true)
    return ((valuesOfProps && closers)) ? (

        <>
            <div className="login__component login__component__reg">
                <Link to={props.fromTo}>
                    <div className="close__menu"><h3 onClick={() => { setClosers(false) }} >Back to Login</h3></div>
                </Link>
                <div className="login__component__0">
                    <div className="login__compo">
                        <div className="login__compo__1">
                            <div className="login__compo__text">
                                <h2>Welcome</h2>
                                <p>To access account and manage orders</p>
                            </div>
                            <div className="login__compo__img">
                                {/* <h4>image tag</h4> */}
                                {/* <img src={loginLogo} /> */}
                            </div>
                        </div>
                        <div className="login__compo__2">
                            <div className="login__compo__2_1">
                                <h3>Register Your Account</h3>
                            </div>
                            <div className="logreg-for" id="logreg-forms">
                                <form id='form-signin' onSubmit={handleSubmit}>
                                    <div className="logreg_for_1">
                                        <div className="logreg_for_2">
                                            <p>Full Name</p>
                                            <input
                                                type="text"
                                                id="displayName"
                                                className="form-control"
                                                // placeholder="Full Name"
                                                name="displayName"
                                                onChange={handleChange}
                                                value={displayName}
                                                required
                                            />
                                        </div>
                                        <div className="logreg_for_2">
                                            <p>Email Address</p>
                                            <input
                                                type="email"
                                                id="userEmail"
                                                className="form-control"
                                                // placeholder="Email Address"
                                                name="email"
                                                onChange={handleChange}
                                                value={email}
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="logreg_for_1">
                                        <div className="logreg_for_2">
                                            <p>Password</p>
                                            <input
                                                type="password"
                                                id="inputPassword"
                                                className="form-control"
                                                // placeholder="Password"
                                                name="password"
                                                onChange={handleChange}
                                                value={password}
                                                required
                                            />
                                        </div>
                                        <div className="logreg_for_2">

                                            <p>Confirm Your Password</p>
                                            <input
                                                type="password"
                                                id="inputRePassword"
                                                className="form-control"
                                                // placeholder="Confirm Password"
                                                name="passwordConfirm"
                                                onChange={handleChange}
                                                value={passwordConfirm}
                                                required
                                            />
                                        </div>
                                    </div>
                                    <button className='btn btn-secondary btn-block' type='submit'>
                                        Sign up
                                    </button>
                                    <hr />
                                    <Link to='/shoes/men/Productdetails'>
                                        <i className="fas fa-user-plus"></i>  <span onClick={() => { setButtonPopup(true) }} >Login with Your Account</span>
                                    </Link>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <Login forOff={false}></Login>


            {/* <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous" />
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
                    <Link to='/shoes/men'>
                        <button className='btn btn-secondary btn-block' type='submit'>
                            <i className="fas fa-sign-in-alt"></i> Back to Login
                        </button>
                    </Link>
                </form>
            </div> */}
        </>
    ) : ""
}

export default Register
