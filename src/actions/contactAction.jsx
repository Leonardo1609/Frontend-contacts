import{
    CREATE_CONTACT,
    CREATE_CONTACT_SUCCESS,
    CREATE_CONTACT_ERROR,
    GET_CONTACTS,
    GET_CONTACTS_SUCCESS,
    GET_CONTACTS_ERROR
} from '../types/index';

import clienteAxios from '../config/axios';
import Swal from 'sweetalert2';

// Create new contact
export function createContactAction( contact ){
    return async dispatch => {
        dispatch( createContact() );
        console.log( contact );
        try {
            await clienteAxios.post('/api/contacts', contact);
            dispatch( createContactSuccess( contact ) );

            Swal.fire(
                'Success',
                'User created',
                'success'
            );
        } catch (error) {
           console.log( error.response );
           dispatch( createContactError() ); 
        }
    }
}

const createContact = () => ({
    type: CREATE_CONTACT,
    payload: true   
});

const createContactSuccess = ( contact ) => ({
    type: CREATE_CONTACT_SUCCESS,
    payload: contact
});

const createContactError = () => ({
    type: CREATE_CONTACT_ERROR,
    payload: true
});

export function getContactsAction(){
    return async (dispatch) =>{
        dispatch( getContacts() );
        try {
            const result = await clienteAxios.get('/api/contacts');
            dispatch( getContactsSuccess( result.data.contacts ) );
        } catch (error) {
            console.log(error);
            dispatch( getContactsError() )
        }
    }
}

const getContacts = () => ({
    type: GET_CONTACTS,
    payload: true
});

const getContactsSuccess = contacts => ({
    type: GET_CONTACTS_SUCCESS,
    payload: contacts
});

const getContactsError = () => ({
    type: GET_CONTACTS_ERROR,
    payload: true
})