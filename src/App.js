import { useState } from "react";

function App() {

   const [todos, SetTodos] = useState([
   {
    text: "Закончить INTOCODE",
    favorite: false,
  }, 
  {
   text: "Найти работу",
   favorite: true,
 },
 {
   text: "Купить ламбу",
   favorite: true,
 }
]);

 const [text, setText] = useState("") 

   const deleteTodo = (Item) => {
     const filtered = todos.filter((todo, index) => {
      if(index === Item) {
        return false;
      }
      return true;
     });

     SetTodos(filtered);
   }

   const makeFavorite = (Item) => {
     const newTodos = todos.map((item,index) => {
       if (Item === index) {
         return {
           ...item,
           favorite: !item.favorite
         }
       }
       return item;
     });

     SetTodos(newTodos);
   }
  
   const newTodos = todos.map((todo, index) => {
     return(
      <div className={`todo ${todo.favorite ? 'selected' : ''}`} >
      <div className="favorite">
        <button onClick={() => makeFavorite(index)}>⭐</button>
      </div>
      <div className="todo-text">
        {todo.text}
      </div>
      <div className="actions">
      <button onClick={() => deleteTodo(index)}>❌</button>
      </div>
    </div>
     )
   });

  const addTodo = () => {
    SetTodos( [ {
      text: text, 
      favorite: false
    }, ...todos]);

    setText("")
  }

  return (
    <div className="app">
      <div className="header">
        Список дел
      </div>
      <div className="form">
      <input 
      placeholder="Введите текст..." 
      type="text"
      value={text}
      onChange={(e) => setText(e.target.value)}
      />
      <button onClick={addTodo}>
        Добавить
      </button>
      </div>
      <div className="todos">
        {newTodos}
      </div>
    </div> 
  );
}

export default App;
