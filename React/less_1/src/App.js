import './App.css';
import Actor from "./components/Actor";
import Users from "./components/Users";

const actors = [
    {id: 1, name: 'Tom', img: 'https://i.pinimg.com/564x/92/a6/2f/92a62f0221f58fe503a15fcb13f5c107--tom-jerry-movies-.jpg'},
    {id: 2, name: 'Jerry', img: 'https://drawinghowtos.com/wp-content/uploads/2021/11/Jerry-colored.png'},
    {id: 3, name: 'Mammy', img: 'https://static1.personality-database.com/profile_images/ee5a6a204b9b4ab4930ff878f1157299.png'},
    {id: 4, name: 'Spike', img: 'https://i.ebayimg.com/images/g/YkgAAOSwZFJcXx8C/s-l500.png'}
]

function App() {
    return(
        <div>
           {actors.map(actor=><Actor key={actor.id} name={actor.name} img={actor.img}/>)}  {/*actor є довільною назвою яка позначає 1 об'єкт з масива окремо*/}

            <Users/>


        </div>
    );
}

export default App;
