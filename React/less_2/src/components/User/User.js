import css from './User.module.css'

const User = ({user, getUserId, getUser}) => {

    const {id, name, username} = user;

    return (
        <div className={css.colorRed}>
            {id} -- {name} -- {username}
            <button onClick={() => {
                getUserId(id)
                getUser(user)
            }}>click</button>
        </div>
    );
};

export {User};