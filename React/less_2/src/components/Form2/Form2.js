import {useState} from "react";

const Form2 = () => {

    const [user, setUser] = useState({});

    const getUser = (e) => {
        setUser({...user, [e.target.name]:e.target.value})
    }

    return (
        <form>
            <div><label>Name:<input type='text' name={'name'} onChange={getUser}/></label></div>
            <div><label>Name:<input type='number' name={'age'} onChange={getUser}/></label></div>
            {JSON.stringify(user)}
        </form>
    );
};

export {Form2};