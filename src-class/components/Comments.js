import { useState } from "react"
import { useStoreContext } from "../utils/GlobalStore"

function Comments(){
  const [ { comments }, dispatch ]= useStoreContext()
  // const [ newComments, setNewComments ]= useState( comments )
  const [ inputComment, setInputComment ]= useState( "" )

  function handleOnChange(event){
    setInputComment( event.target.value )
  }

  function deleteComment(){
    const data = comments.filter(idx=> comment.id ! = idx)
    dispatch({ type: 'DELETE', value: data})
  }

  function saveComment(){
    // unlike the 'useContext' example, with dispatch, the actual state is revised from 
    // it's previous state, so we do NOT need an intermediate placeholder! :)
    dispatch( { type: "POST", value: inputComment } )

    // clear input comment
    setInputComment( "" )
  }
  
  return (
        <>
        <div class="input-group">
          <div class="input-group">
          <input type="text" onChange={handleOnChange} value={inputComment} />
          <div class="input-group-append"></div>
            <button onClick={saveComment} class='btn btn-primary'>Post</button>
          </div>
        </div>
        <ul class="list-group">
          {comments.map( comment=><li class="list-group-item">{comment}<button onClick={deleteComment(idc)} class= "btn btn danger">x</button></li> )}
        </ul>
        </>
    )
}

export default Comments 