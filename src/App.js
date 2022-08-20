import './App.css';
import {Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import Aboutme from './pages/Aboutme';
import Portfolio from './pages/Portfolio';
import Contacts from './pages/Contacts';
import Layout from './components/Layout';
import ChatsPage from './pages/ChatsPage';
import ProfilePage from './pages/ProfilePage';





function App() {
  return (
    <Routes>
        <Route path='/' element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path='/aboutme' element={<Aboutme />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/contacts' element={<Contacts />} />
        <Route path='/chats' element={<ChatsPage />} />
        <Route path='/profile' element={<ProfilePage />} />
        </Route>

    </Routes>
    
    
  );
}

export default App;
