import {useEffect, useState} from "react";

import {userService} from "../../services";
import {User} from "../User/User";

const Users = ({getUser}) => {
    const [users, setUsers] = useState([]);

    let [user, setUser] = useState(null);

    useEffect(() => {
        userService.getAll().then(({data}) => setUsers(data))
    }, []);

    const getUserId = async (id) => {
        const {data} = await userService.getById(id);
        setUser(data)
    }
    
    return (
        <div>
            <div>
                {users.map(item => <User key={item.id} user={item} getUserId={getUserId} getUser={getUser}/>)}
            </div>

            <div>
                {user && <div> {user.name} -- {user.username}</div>}
            </div>
        </div>
    );
};

export {Users};