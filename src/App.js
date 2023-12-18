import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from './Pages/Home';
import MainLayout from './Layout/MainLayout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout></MainLayout>}>
        <Route path='/' element={<HomePage></HomePage> } />

        </Route>
      </Routes>
    </BrowserRouter>
  
  );
}

export default App;
