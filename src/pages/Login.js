import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import { googleSignInInitiate, loginInitiate } from '../redux/action'
import './Login.css'
import { CloseOutlined } from '@ant-design/icons';
import styled from 'styled-components'


const Login = (props) => {


    const [state, setstate] = useState({
        email: '',
        password: '',
    });

    const { currentUser } = useSelector((state) => state.user)

    const history = useHistory();
    useEffect(() => {
        if (currentUser) {
            history.push('/')
        }
    }, [currentUser, history])

    const dispatch = useDispatch();

    const { email, password } = state;
    const handleGoogleSignIn = () => {
        dispatch(googleSignInInitiate())
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email || !password) {
            return;
        }
        dispatch(loginInitiate(email, password))
        setstate({ email: "", password: "" })
    }

    const handleChange = (e) => {
        let { name, value } = e.target;
        setstate({ ...state, [name]: value })
    }
    const valuesOfProps = props.trigger
    const [closers, setClosers] = useState(true)

    useEffect(() => {
        document.title = "Login Your Account"
    }, []);

    return ((valuesOfProps && closers) ) ? (
        <>
            <div className="login__component">
                <Link to={props.fromTo}>
                    <div className="close__menu"><i onClick={() => { setClosers(false) }} class="fas fa-times-circle"></i></div>
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
                                <h3>Login or Signup</h3>
                            </div>
                            <div id="logreg-forms">
                                <form id='form-signin' onSubmit={handleSubmit}>
                                    <p>Email</p>
                                    <input
                                        type="email"
                                        id="inputEmail"
                                        className="form-control"
                                        // placeholder="Email Address"
                                        name="email"
                                        onChange={handleChange}
                                        value={email}
                                        required
                                    />
                                    <p>password</p>

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
                                    <button className='btn btn-secondary btn-block' type='submit'>
                                        {/* <i className="fas fa-sign-in-alt"></i> Sign In */}
                                        Login
                                    </button>
                                    <Link to='/register'>
                                        {/* <button className='btn btn-primary btn-block' type='button' id="btn-"> */}
                                        <i className="fas fa-user-plus"></i>  Create your Account
                                        {/* </button> */}
                                    </Link>
                                    <hr />
                                    <div className="social-login">
                                        <button className='btn google-btn social-btn' type='button' onClick={handleGoogleSignIn}>
                                            <span>
                                                <i className="fab fa-google-plus-g"></i>  Google+
                                            </span>
                                        </button>
                                    </div>
                                    <div className="policy__text">
                                        <p style={{ fontSize: '14px' }}>By continuing, I agree to the<span style={{ color: '#c54b4a' }}> Terms of use </span>& <span style={{ color: '#c54b4a' }}>Privacy Policy</span></p>
                                    </div>
                                    {/* <p>Don't have Acoount</p>
                            <Link to='/register'>
                            <button className='btn btn-primary btn-block' type='button' id="btn-">
                            <i className="fas fa-user-plus"></i>  Create your Account
                            </button>
                            </Link> */}
                                </form>
                            </div>
                        </div>
                        {/* <div className="login__compo__2_3">button</div> */}
                        {/* </div> */}
                        {/* </div>   */}
                    </div>
                </div>
            </div>
            {/* </BurgerNav> */}

        </>
    ) : "";
    // )


}

export default Login


const CustomClose = styled(CloseOutlined)`
            cursor:pointer;
            `