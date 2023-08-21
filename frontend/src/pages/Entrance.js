import { Link } from "react-router-dom"
import { useAuthContext } from "../hooks/useAuthContext"


const Entrance = () => {
    const {user} = useAuthContext()

    return (
        <div>
            <div className="entrance">
                <h1>This is the home page! Welcome, {user.username}</h1>
            </div>
            <Link to="/room-creation">
                <h3>Create a room</h3>
            </Link>
        </div>
    )
}

export default Entrance