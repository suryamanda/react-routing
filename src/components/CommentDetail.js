import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import {Link} from 'react-router-dom';

const CommentDetail = (props) => {

    const[comment, setComment] = useState({});

    useEffect(() => {
        console.log("props", props)
        getcomment()
    },[]);

    const getcomment = () => {

        Axios.get(`https://jsonplaceholder.typicode.com/comments/${props.match.params.id}`).then(response => {
            console.log(response.data);
            setComment(response.data);
        }).catch(error => {
            console.log(error);
        })
    }


    return (
<div>
       {comment.name}           
</div>
    );
}

export default CommentDetail;