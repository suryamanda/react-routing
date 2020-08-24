import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import {Link} from 'react-router-dom';

const Shop = () => {

    const[comments, setcomments] = useState([]);

    useEffect(() => {
        getcomments()
    },[]);

    const getcomments = () => {

        Axios.get("https://jsonplaceholder.typicode.com/comments").then(response => {
            console.log(response.data);
            setcomments(response.data);
        }).catch(error => {
            console.log(error);
        })
    }


    return (
<div>
    {
        comments.map(comment => 
            <div key={comment.id}>
               <Link to={`/shop/${comment.id}`}> {comment.email} </Link>
            </div>
        )
    }

</div>
    );
}

export default Shop;