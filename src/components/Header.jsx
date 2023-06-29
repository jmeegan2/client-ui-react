import { Link } from 'react-router-dom';
function Header() {
    return (
        <header>
            <h1>Class Attendance</h1>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/list-students">Attendance List</Link></li>
                        <li><Link to="/inquiry">Inquery</Link></li>
                        <li><Link to="/admin">Admission Counselors</Link></li>
                    </ul>
                </nav>
           
        </header>
    );
}

export default Header;