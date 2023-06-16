import { useState, useEffect } from "react";

const UsePost = (url, data) => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(url, {
            method: "POST",
            headers: {
                contentType: "application/json",
            },
            body: JSON.stringify(data)
        })
        .then(res => {
            setResponse(res);
        })
        .catch(err => {
            setError(err);
        });
    })
    return {res: response, error};
}
 
export default UsePost;