import './App.css';

import Users from "./components/users/Users";
import {Posts} from "./components";
import {Comments} from "./components";

function App() {
    return(
        <div>
            <div className={'users_posts'}>
                <Users/>
                <Posts/>
            </div>

            <Comments/>
        </div>
    );
}

export default App;