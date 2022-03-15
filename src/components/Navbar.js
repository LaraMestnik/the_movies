import { Link } from 'react-router-dom';

// custom hooks
import { useAuthContext } from '../custom hooks/useAuthContext';
import { useLogout } from '../custom hooks/useLogout';

//components
import SearchBar from './SearchBar.js';
import Logo from '../components/Logo';
import Button from './Button';

export default function Navbar() {
    const { user } = useAuthContext();
    const { logout } = useLogout();

    return (
        <nav id="nav">
            <Logo className="logo--white" />
            <SearchBar />
            <div className="btn-container">
                {!user && <Link to="/login"><Button className="btn-secondary btn-small">Log In</Button></Link>}
                {user && (
                    <div className="logout">
                        <p>Hello, {user.displayName}</p>
                        <Button handleClick={logout} className="btn-secondary btn-small">Logout</Button>
                    </div>
                )
                }
            </div>
        </nav>
    )
}
