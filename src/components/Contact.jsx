import React from 'react'

const Contact = ({ contact }) => {
    const { name, phone, email, contactType } = contact;

    return ( 
        <div className="card">
            <div className="card-header">
                { name }
            </div>
            <div className="card-body">
                <h5 className="card-title">{ email }</h5>
                <p className="card-text">{ phone }</p>
                <span className={`inline-block py-1 px-3 text-white ${contactType === 'personal' ? 'bg-primary' : 'bg-success'}`}>{ contactType }</span>
            </div>
        </div>
    );
}
 
export default Contact;