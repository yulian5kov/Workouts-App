import { useNavigate } from "react-router-dom"

const Entrance = () => {
    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate('/login');
    };

    const handleRegisterClick = () => {
        navigate('/register');
    };
    return (
        <div className="entrance">
            <h1>Welcome</h1>
            <button onClick={handleLoginClick}>Login</button>
            <button onClick={handleRegisterClick}>Register</button>
        </div>
    )
}

export default Entrance