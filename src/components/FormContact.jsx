import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { createContactAction } from '../actions/contactAction';

const FormContact = () => {

    const [ contact, setContact ] = useState({
        name: '',
        email: '',
        phone: '',
        contactType: ''
    });

    const { name, email, phone, contactType } = contact;

    const onChange = (e) => {
        setContact({
            ...contact,
            [e.target.name]: e.target.value
        })
    }

    const dispatch = useDispatch();

    const onSubmit = e => {
        e.preventDefault();
        if( name.trim() === '' && email.trim() === '' && phone.trim() === '' &&  contactType === ''){
            return;
        }
        
        dispatch( createContactAction( contact ) );
    }

    return (
        <div className="row d-flex justify-content-center">
            <div className="col-6">
                <h1 className="text-center text-primary mb-3">Add Contact</h1>
                <form onSubmit = { onSubmit }>
                    <input 
                        placeholder="Name"
                        type="text" 
                        className="form-control mb-3"
                        value= { name }
                        name="name"
                        onChange = { onChange }
                    />
                    <input 
                        placeholder="Email"
                        type="email" 
                        className="form-control mb-3"
                        value= { email }
                        name="email"
                        onChange = { onChange }
                    />
                    <input 
                        placeholder="Phone"
                        type="text" 
                        className="form-control mb-3"
                        value= { phone }
                        name="phone"
                        onChange = { onChange }
                    />
                    <div className="form-check form-check-inline">
                        <input 
                            className="form-check-input" 
                            type="radio" 
                            name="contactType" 
                            value= "personal"
                            id = "personal"
                            onChange = { onChange }
                        />
                        <label 
                            className="form-check-label" 
                            htmlFor="personal"
                        >Personal
                        </label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input 
                            className="form-check-input" 
                            type="radio" 
                            name="contactType" 
                            id="proffesional"
                            value= "proffesional"
                            onChange = { onChange }
                        />
                        <label 
                            className="form-check-label" 
                            htmlFor="proffesional"
                        >Proffesional</label>
                    </div>
                    <button 
                        type="submit"
                        className="btn btn-block btn-primary mt-4"
                    >Add Contact</button>
                </form>
            </div>
        </div>
    );
}
 
export default FormContact;