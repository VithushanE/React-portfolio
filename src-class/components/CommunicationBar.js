import { useStoreContext } from "../utils/GlobalStore"

function CommunicationBar(){
    const [ { userid,username } ]= useStoreContext()
    
    function chatUser(){
      alert( `Chatting with ${userid}` )
    }
    function blockUser(){
      alert( `Blocking ${userid}` )
    }

    return (
        <div class="card-footer">
          <button onClick={chatUser} class='btn btn-primary mx-2'>Chat with {username}</button>
          <button onClick={blockUser} class='btn btn-sm btn-outline-danger mx-2'>Block {username}</button>
        </div>        
    )
}

export default CommunicationBar