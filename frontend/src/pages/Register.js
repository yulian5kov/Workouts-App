import { useNavigate } from "react-router-dom";

const Register = () => {
    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate('/');
    };
    return (
        <div className="register">
            <h1>Register</h1>
            <button onClick={handleBackClick}>home</button>
        </div>
    )
}

export default Register