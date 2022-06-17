import './App.css';
import Navigation from './Component/Navigation/Navigation';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './Component/Home/Home';
import About from './Component/About/About';
import Contact from './Component/Contact/Contact';
import Login from './Component/Login/Login';
import Typography from './Component/Typography/Typography';
import ReadMore from './Component/ReadMore/ReadMore';
// import { createContext } from 'react';

// export const UserContext = createContext();
function App() {
  return (
    // <UserContext>
    <BrowserRouter>
      <Navigation/>
      
      <Routes>

        <Route path='/' element={<Home></Home>}> </Route>
        <Route path='/about' element={<About></About>}> </Route>
        <Route path='/contact' element={<Contact></Contact>}> </Route>
        <Route path='/logIn-logOut' element={<Login></Login>}></Route>
        <Route path='/typography' element={<Typography></Typography>}></Route>
        <Route path='/read-more' element={<ReadMore></ReadMore>}></Route>
      </Routes>
    </BrowserRouter>
    // </UserContext>
  );
}

export default App;
