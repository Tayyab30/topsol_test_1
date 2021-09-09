import {useState} from 'react';
// import axios from 'axios';
import TodoList from './TodoList';
const AddTodos = ()=>{

    const [todo, setTodo] = useState({
        id: Math.random()
    });
    const [ add, setAdd ] = useState([]);
    const handleChange = (e)=> {
        const {value, name} = e.target;
        setTodo({...todo,
            [name] : value
        });
        console.log(todo);
    }
    const addTodo = ()=>{
        setAdd([...add,todo]);
        console.log(add);
    }

    const deleteItem =(e)=>{
        const todo = e;
        setAdd(add.filter(item=> item.id != todo));
        console.log(e);
    }
    return(
        <>
            <div>
                <input type="text" name="todos"  onChange={handleChange} />
                <button type='button' onClick={addTodo}>+</button>
            </div>

            <div>
                {
                    add.map((t,i)=>(
                        <div key={i} >
                            <h2  >{t.todos}</h2>
                            <button onClick={()=>deleteItem(t.id)} type="button">del</button>
                        </div>
                        
                    ))
                }
            </div>
            
        </>
    );
}

export default AddTodos;