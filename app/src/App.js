import logo from './logo.svg';
import './App.css';
import Main from './components/Main';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import SideBar from './components/SideBar';
import Rag from './components/Rag';
import Category from './components/Category';
import Chat from './components/Chat';
function App() {
  return (
   <>
   <BrowserRouter>
   <SideBar>
   <Routes>
    <Route path="/" element={<Main/>}>
    
    </Route>
    <Route path="/rag" element={<Rag/>}></Route>
    <Route path="/category" element={<Category/>}></Route>
    <Route path="/chat" element={<Chat/>}></Route>
   </Routes>
   </SideBar>
   </BrowserRouter>
   </>
  );
}

export default App;
