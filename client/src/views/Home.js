import {Link} from '@reach/router';
import React from 'react';
import AuthorList from '../components/AuthorList';


export default () => {


    return(
        <>
        <Link to ="/new">Add Author</Link>
        <h3>Here are THE BEST authors</h3>
        <AuthorList/>
        </>
    )

}