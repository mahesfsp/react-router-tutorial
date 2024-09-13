import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Link,Route,Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import User from './components/User';
import OldBooks from './components/OldBooks';
import NewBooks from './components/NewBooks';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <ul>
      <li><Link to=''>Home</Link></li>
      <li><Link to='/contact'>Contact</Link></li>
      <li><Link to='/user/1'>User1</Link></li>
      <li><Link to='/books/old_books'>Old Books</Link></li>
      <li><Link to='/books/new_books'>New Books</Link></li>
      <li><Link to='/login'>Login</Link></li>
      <li><Link to='/dashboard'>Dashboard</Link></li>
     </ul>
     <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='/user/:id' element={<User/>}></Route>
      <Route path='login' element={<Login/>}></Route>
      <Route path='dashboard' element={<Dashboard/>}></Route>
      <Route path='/books'>
      <Route path='old_books' element={<OldBooks/>}></Route>
      <Route path='new_books' element={<NewBooks/>}></Route>
   
      </Route>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
