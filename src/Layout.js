import Menu from './Components/Menu';
import './App.css';

const Layout = ({children}) => {
    return (
        <>
            <Menu />
            <main className='myStyle'>{children}</main>
        </>
    );
};

export default Layout;