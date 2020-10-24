import React, { Fragment } from 'react';
import { Field, reduxForm } from 'redux-form';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

const required = value => (value || typeof value === 'number' ? undefined : 'Required')

const maxLength = max => value =>
    value && value.length > max ? `Must be ${max} characters or less` : undefined
const maxLength15 = maxLength(15)

const minLength = min => value =>
    value && value.length < min ? `Must be ${min} characters or more` : undefined
const minLength2 = minLength(2)

const email = value =>
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
        ? 'Invalid email address'
        : undefined

const elonMusk = value =>
    value && /[0-9 ]/i.test(value) ? "Are you Elon Musk's son?" : undefined

const alphaNumeric = value =>
    value && /[^a-zA-Z0-9 ]/i.test(value)
        ? 'Only alphanumeric characters'
        : undefined

export const phoneNumber = value =>
    value && !/^(0|[1-9][0-9]{9})$/i.test(value)
        ? 'Invalid phone number, must be 10 digits'
        : undefined

const renderField = ({
    input,
    label,
    type,
    meta: { touched, error }
}) => {
    const inputClasses = classNames({
        'formInput': true,
        'hasError': error && touched
    });
    return (
        <div className={inputClasses}>
            <input {...input} placeholder={label} type={type} />
            {touched &&
                (error && <span>{error}</span>)}
        </div>

    )
}

const Shipping = ({ handleSubmit, submitting, invalid }) => {

    const { totalPrice, items } = useSelector(({ cart }) => cart);

    const submit = (value) => {

        let cartInfo = [];
        for (let cart of items) {
            cartInfo.push(` TITLE: ${cart.title}, COUNT: ${cart.selectedCount};\n`)
        }
        alert(`Dear ${value.name}, your order consists of:\n ${cartInfo.join(' ')}
        Cart price: ${totalPrice} 
        Delivery price: ${value.options}
        Total price: ${Number(totalPrice) + Number(value.options)}`)
    }

    return (
        <div className="container">

            <form className="form" onSubmit={handleSubmit(submit)}>
                <NavLink to="/cart">
                    <button type='button' className='btn-back'>Back to Cartlist</button>
                </NavLink>
                <div className="form__name info">
                    <label>Name</label>
                    <Field
                        name="name"
                        type="text"
                        component={renderField}
                        label="Name"
                        validate={[required, maxLength15, minLength2, elonMusk, alphaNumeric]}
                    />
                </div>

                <div className="form__adress info">
                    <label>Adress</label>
                    <Field
                        name="adress"
                        component={renderField}
                        type="text"
                        label="Adress"
                        validate={[required, minLength2, alphaNumeric]}
                    />
                </div>

                <div className="form__phone info">
                    <label>Phone</label>
                    <Field
                        name="phone"
                        type="number"
                        component={renderField}
                        label="Phone"
                        validate={[required, phoneNumber]}
                    />
                </div>

                <div className="form__email info">
                    <label>E-mail</label>
                    <Field
                        name="email"
                        type="email"
                        component={renderField}
                        label="Email"
                        validate={[required, email]}
                    />
                </div>

                <div className="form__options info">
                    <label>Shipping options</label>
                    <Field name="options" component="select">
                        <option defaultValue="0">Free shipping</option>
                        {totalPrice < 300
                            ?
                            (<Fragment><option value="9.99">Express shipping</option>
                                <option value="19.99">Courier shipping</option></Fragment>)
                            :
                            (<option value="0">Free express shipping</option>)}
                    </Field>
                </div>

                <button type="submit" disabled={submitting || invalid} className="btn">PAY</button>
            </form>

        </div >
    )
}

export default reduxForm({
    form: 'form'
})(Shipping)