import React, {useState} from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';


export default () => {

    const [name, setName] = useState("");
    const [errors, setErrors] = useState([]);

    const onSubmit = event => {
        event.preventDefault();
        axios.post('http://localhost:8000/api/author/create', {
            name
        })
            .then(res => {
                navigate('/');
                console.log(res)
            })
            .catch(err => {
                console.log(err);
                const errorResonse = err.response.data.errors;
                const errorArray = [];
                for (const key of Object.keys(errorResonse)){
                    errorArray.push(errorResonse[key].message)
                }
                setErrors(errorArray);
            })
    }

    return(
        <>
        {errors.map ((err, index) => 
            <p key = {index}>{err}</p>
        )}

        <form onSubmit = {onSubmit}>
            <label>Name:</label>
            <input type = "text" onChange = {(event) => setName(event.target.value)}></input>
            <br/>
            <button>Submit</button>
        </form>
        </>
    )

}