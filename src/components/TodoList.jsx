import {useState,useEffect} from 'react';



const TodoList =({add})=>{
    const data = add;
    return(
        <>
          <div>
                {
                    data.map((t,i)=>(
                        <h2 key={i}>{t.todos}</h2>
                    ))
                }
            </div>
        </>
    );
}

export default TodoList;