import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSkullCrossbones } from '@fortawesome/free-solid-svg-icons';
import useAuth from '../../context/Auth';
import LoginForm from './components/LoginForm';
import AuthService from '../../services/Auth';
import './Login.css';

const Login = (props) => {
    const navigate = useNavigate();
    const { login } = useAuth();
    const { state } = useLocation();
    const [ isSubmitting, setIsSubmitting] = useState(false);

    /*
     * Login the user and set the AuthContext to be logged in state
     */
    const handleFormSubmit = (values) => {
        const { email, password } = values;
        const authService = new AuthService();

        setIsSubmitting(true);
        authService.authenticate(email, password).then((res) => {
            const loggedInUser = res.data;

            setIsSubmitting(false);
            login(loggedInUser);
            navigate(state?.path || "/");
        }, (error) => {
            setIsSubmitting(false);
            console.log(error);
        })
    }

    return (
        <div className="row">
            <div className="col-lg-3"></div>
            <div className="col-lg-6">
                <div className="brand">
                    <FontAwesomeIcon icon={faSkullCrossbones} /> barebones
                </div>
                <div className="card">
                    <div className="card-body">
                        <LoginForm onFormSubmit={handleFormSubmit} isSubmitting={isSubmitting} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;