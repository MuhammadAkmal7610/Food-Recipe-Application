
import './App.css';
import Meal from "./Components/Meal"
import { Route,Routes } from 'react-router-dom';
import { Recipeinfo } from './Components/Recipeinfo';
function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/' element={<Meal/>} />
      <Route path='/:Mealid' element={<Recipeinfo/>} />
      </Routes>
    </div>
  );
}

export default App;
