import { useStoreContext } from "../utils/GlobalStore"

function Header(){
    const [ { username } ]= useStoreContext()
    return (
    <h1>
        Welcome to {username}'s Profile
    </h1>
    )
}

export default Header