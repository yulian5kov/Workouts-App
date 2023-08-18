import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import { useRegister } from "../hooks/useRegister";

const Register = () => {
    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')
    const {register, error, isLoading} = useRegister()

    // const navigate = useNavigate();
    // const handleBackClick = () => {navigate('/');};

    const handleSubmit = async (e) => {
        e.preventDefault()
        // console.log(email,password);
        await register(email, password)
    };

    return (
        <form action="register" onSubmit={handleSubmit}>
            <h3>Register</h3>

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

            <button disabled={isLoading}>Register</button>
            {error && <div className="error">{error}</div>}
        </form>
    )
}

export default Register