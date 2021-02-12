import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';


export default props => {

    const [authors, setAuthors] = useState([]);


    useEffect( () => {
        axios.get('http://localhost:8000/api/authors')
            .then (res => {
                setAuthors(res.data);
            })
    }, [])

    
    const deleteAuthor = authorID => {
        axios.delete('http://localhost:8000/api/author/' + authorID)
        .then((res) => {
            removeFromDom(authorID);
            navigate('/');
        })
    }
    
    const removeFromDom = authorID => {
        setAuthors(authors.filter((author) => author._id != authorID));
        navigate('/');
    }



    return (
        <table>
            <tr>
                <th>Author</th>
                <th>Actions</th>
            </tr>
            {authors.map((author, index) => {
                return(
                    <tr key ={index}>
                        <td>{author.name}</td>
                        <td> 
                            <Link to ={'/author/edit/' + author._id}><button>Edit</button></Link> 
                            <button onClick = {event => {deleteAuthor(author._id)}}>Delete</button> 
                        </td>
                    </tr>
                )
            })}
        </table>

    )
}