import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import useForm from '../../../hooks/useForm';
import validate from './LoginFormValidationRules';

const LoginForm = (props) => {

    /*
     * Handle the form submission
    */
    const handleSubmitCallback = () => {
        props.onFormSubmit(values);
    }

    const { values, errors, handleChange, handleSubmit } = useForm(handleSubmitCallback, validate);

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form-group mb-3">
                    <label htmlFor="email" className="form-label">email address</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={values.email || ''}
                        onChange={handleChange}
                        className={`form-control ${errors.email && 'is-invalid'}`} />
                </div>
                <div className="form-group mb-3">
                <label htmlFor="password" className="form-label">password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={values.password || ''}
                        onChange={handleChange}
                        className={`form-control ${errors.password && 'is-invalid'}`} />
                </div>
                <div className="form-group text-center mb-3">
                    <button className="btn btn-dark btn-block">
                        Login &nbsp;&nbsp;
                        {props.isSubmitting ?
                            <FontAwesomeIcon icon={faSpinner} spin />
                            : null
                        }
                    </button>
                </div>
            </form>
        </div>

    );
}

export default LoginForm;