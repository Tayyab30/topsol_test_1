// import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AddTodos from './components/AddTodos'
function App() {
  return (
    <div className="App ">
        <div className="container main col-lg-1 ">
        <h2 className="d-flex flex-row">todo app</h2>
        <AddTodos/>
        </div>
      </div>
  );
}

export default App;
