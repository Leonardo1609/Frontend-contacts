import{
    CREATE_CONTACT,
    CREATE_CONTACT_SUCCESS,
    CREATE_CONTACT_ERROR,
    GET_CONTACTS,
    GET_CONTACTS_SUCCESS,
    GET_CONTACTS_ERROR
} from '../types/index';

const initialState = {
    contacts: [],
    loading: false,
    error: null 
}

export default function( state = initialState, action ){
    switch( action.type ){
        case CREATE_CONTACT:
        case GET_CONTACTS:
            return {
                ...state,
                loading: true
            }
        case CREATE_CONTACT_SUCCESS:
            return{
                ...state,
                loading: false,
                error: null,
                contacts: [ ...state.contacts, action.payload ]
            }
        case GET_CONTACTS_SUCCESS:
            return {
                ...state,
                loading: false,
                error:null,
                contacts: action.payload 
            }
        default:
            return state;
    }
} 