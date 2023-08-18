import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogin'

const Navbar = () => {
  
  const {logout} = useLogout()

  const handleClick = () => {
    logout()
  }

  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1>Workout Buddy</h1>
        </Link>
        <nav>
          <button onClick={handleClick}>Log out</button>
          <div>
            <Link to="/login">Log in</Link>
            <Link to="/register">Register</Link>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Navbar