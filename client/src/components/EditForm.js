import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {navigate} from '@reach/router';

export default props => {
    const id = props.id;
    const [name, setName] = useState("")
    const [author, setAuthor] = useState("");
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/author/' + id)
            .then(res => {
                setAuthor(res.data.name)
            })
    },[])

    const onSubmit = event => {

        // if (name.length < 3){
        //     const errMSG = [];
        //     errMSG.push("name is not long enough");
        //     setErrors(errMSG)
        // }
        // else{
        event.preventDefault();
        axios.put('http://localhost:8000/api/author/' + id,{
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
        // }
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