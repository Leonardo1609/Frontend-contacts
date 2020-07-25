import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getContactsAction } from '../actions/contactAction';
import Contact from './Contact';


const ListContact = () => {
    const dispatch = useDispatch();
    
    useEffect( () => {
        const getContacts = () => dispatch( getContactsAction() );
        getContacts();
        // eslint-disable-next-line
    }, []);

    const contacts = useSelector( state => state.contacts.contacts );
    return (
        <div className="row d-flex justify-content-center mt-5">
            <div className="col-6">
            {
                contacts ?
                contacts.map( ( contact, i ) => (
                    <Contact 
                        key = { contact._id || i + 1 }
                        contact = { contact }
                    />
                ))
                : null
            }
            </div>
        </div>
    );
}
 
export default ListContact;