import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Homepage from './component/Homepage';
import Create from './component/Create';
import Edit from  './component/Edit'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exaxt path='' element = { <Homepage /> } ></Route>
          <Route path='/create' element = { < Create /> } ></Route>
          <Route path='/edit'   element = { <Edit/> } ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
