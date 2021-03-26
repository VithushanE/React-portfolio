import CommunicationBar from "./CommunicationBar"
import { useStoreContext } from "../utils/GlobalStore"

function Bio(){
    const [ { info, comments } ]= useStoreContext()

    return (
        <>
            <div class="card-body">
            <h5 class="card-title">Bio</h5>
            <p class="card-text">{info}</p>
            <p class='text-muted'>Comments received: {comments.length}</p>
            </div>     
            <CommunicationBar />  
        </>
    )
}

export default Bio