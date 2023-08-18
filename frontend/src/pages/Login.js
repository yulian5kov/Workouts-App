import { useState } from "react";
import { useLogin } from "../hooks/useLogin";
// import { useNavigate } from "react-router-dom";

const Login = () => {

    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')
    const {login, error, isLoading} = useLogin()

    // const navigate = useNavigate();
    // const handleBackClick = () => {navigate('/');};

    const handleSubmit = async (e) => {
        e.preventDefault()

        await login(email, password)
        // console.log(email,password);
    };

    return (
        <form action="login" onSubmit={handleSubmit}>
            <h3>Log in</h3>

            <label>Email:</label>
            <input 
                type="email"
                onChange={(e)=>setEmail(e.target.value)}
                value={email}
            />

            <label>Password:</label>
            <input 
                type="password"
                onChange={(e)=>setPassword(e.target.value)}
                value={password}
            />

            <button disabled={isLoading}>Login</button>
            {error && <div className="error">{error}</div>}
        </form>
    )
}

export default Login