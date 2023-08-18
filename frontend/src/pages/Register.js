import { useState } from "react";
// import { useNavigate } from "react-router-dom";

const Register = () => {
    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')

    // const navigate = useNavigate();
    // const handleBackClick = () => {navigate('/');};

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(email,password);
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

            <button>Register</button>
        </form>
    )
}

export default Register