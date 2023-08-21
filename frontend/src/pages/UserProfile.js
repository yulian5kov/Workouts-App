import { Link } from "react-router-dom"
import { useAuthContext } from "../hooks/useAuthContext"


const UserProfile = () => {
    const {user} = useAuthContext()
    

    return (
        <div>
            <h1>This is your profile page</h1>
            <h2>Hi, {user.username}</h2>

            <Link to="/room-creation">
                <h3>Create a room</h3>
            </Link>
        </div>
    )
}

export default UserProfile