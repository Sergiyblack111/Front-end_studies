import css from './App.module.css'

import {useState} from "react";

import {Users, SingleUser, Form1, Form2} from "./components";



function App() {
    const [singleUser, setSingleUser ] = useState(null);

    return(
        <div className={css.border}>
            {singleUser && <SingleUser user={singleUser}/>}
            <Users getUser={setSingleUser}/>
            <Form1/>
            <Form2/>
        </div>
    );
}

export default App;