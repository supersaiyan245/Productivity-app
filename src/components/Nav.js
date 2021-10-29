import { Link } from "react-router-dom";

function Nav(props) {
  return (
    <nav>
      <Link to="/" className="headers">Home</Link>
      <Link to="/About Us" className="headers">About Us</Link>
      <Link to='/Recommendations' className="headers">Recommendations</Link> 
      <Link to='/List/Chores/' className="headers">Chores</Link>
     <Link to='/Errands' className="headers">Errands</Link>
    </nav>
  )
}

export default Nav;