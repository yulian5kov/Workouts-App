import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate('/');
    };
    return (
        <div className="login">
            <h1>Login</h1>
            <button onClick={handleBackClick}>home</button>
        </div>
    )
}

export default Login