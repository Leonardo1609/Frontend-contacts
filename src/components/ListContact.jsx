import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getContactsAction } from '../actions/contactAction';


const ListContact = () => {
    const dispatch = useDispatch();
    
    useEffect( () => {
        const getContacts = () => dispatch( getContactsAction() );
        getContacts();
        // eslint-disable-next-line
    }, []);

    const contacts = useSelector( state => state.contacts );
    console.log( contacts );

    return (
        <div className="row d-flex justify-content-center mt-5">
            <div className="col-6">
                <h1>List</h1>
            </div>
        </div>
    );
}
 
export default ListContact;