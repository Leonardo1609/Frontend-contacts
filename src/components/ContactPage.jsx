import React, { Fragment } from 'react'
import FormContact from './FormContact';
import ListContact from './ListContact';

const ContactPage = () => {

    return ( 
        <Fragment>
            <FormContact/>
            <ListContact />
        </Fragment>
    );
}
 
export default ContactPage;