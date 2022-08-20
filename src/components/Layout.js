import React from 'react';
import { Outlet } from 'react-router-dom';
import CustomLink from './CustomLink';

const Layout = () => {
    return (
        <>
            <header style={{display: 'flex', justifyContent: 'space-between', height: '30px', backgroundColor: 'gray'}}>
            <CustomLink  to={'/'}>Главная</CustomLink>
            <CustomLink  to={'/aboutme'}>Про меня</CustomLink>
            <CustomLink  to={'/portfolio'}>Портфолио</CustomLink>
            <CustomLink  to={'/contacts'}>Контакты</CustomLink>
            <CustomLink  to={'/chats'}>Чат</CustomLink>
            <CustomLink  to={'/profile'}>Профиль</CustomLink>
            </header>
            <main>
             <Outlet />
            </main>
            <footer style={{display: 'flex', justifyContent: 'center', height: '60px', backgroundColor: 'gray'}}>
                <h3>© Все права защищены</h3>
            </footer>
        </>

    );
}

export default Layout;