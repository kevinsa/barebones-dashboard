import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSkullCrossbones } from '@fortawesome/free-solid-svg-icons';
import useAuth from '../../context/Auth';
import LoginForm from './components/LoginForm';
import './Login.css';

const Login = (props) => {
    const navigate = useNavigate();
    const { login } = useAuth();
    const [ isSubmitting, setIsSubmitting] = useState(false);

    /*
     * Login the user
     */
    const handleFormSubmit = (values) => {
        const { email, password } = values;

        setIsSubmitting(true);
        login(email, password).then(() => {
            setIsSubmitting(false);
            navigate("/");
        }, (error) => {
            setIsSubmitting(false);
            console.log(error);
        });
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