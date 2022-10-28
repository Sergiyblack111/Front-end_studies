const SingleUser = ({user}) => {
    const {id, name, username, email} = user;

    return (
        <div>
            {id} -- {name} -- {username} -- {email}
        </div>
    );
};

export {SingleUser};