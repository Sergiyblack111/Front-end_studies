import {useEffect, useState} from "react";

import {usersService} from "../../services";
import {User} from "../User/User";

const Users = ({setUser, setUserIdForPosts}) => {
    const [users, setUsers] = useState(null);  // useState( [] );

    useEffect(() => {
        usersService.getAll().then(({data}) => setUsers(data))
    }, []);
    //console.log(users)

    // useEffect(() => {
    //     usersService.getAll2().then((data) => {
    //         console.log(data)
    //         setUsers(data);
    //     })
    // }, []);

    return (
        <div>

            {/*{users.map((user) => <User key={user.id}
                                       user={user}
                                       setUser={setUser}/>)}*/}

            {/*{users && users.map((user) => <User key={user.id}
                                                   user={user}
                                                   setUser={setUser}/>)}*/}

            {users
                ? users.map((user) => <User key={user.id} user={user} setUser={setUser} setUserIdForPosts={setUserIdForPosts}/>)
                :"loading.."
            }

        </div>
    );
};

export {
    Users
};
