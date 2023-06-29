import { Link } from 'react-router-dom';


const Navigation = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Navbar</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav me-auto">
            <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/list-students">Attendance List</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/inquiry">Inquiry</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/admin">Admission Counselors</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};


export default Navigation;