import { useAuthContext } from "../hooks/useAuthContext"


const UserProfile = () => {
    const {user} = useAuthContext()
    

    return (
        <div>{user._id}</div>
    )
}

export default UserProfile