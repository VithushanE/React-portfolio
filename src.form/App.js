import { useState } from "react"

function App() { 
  const [ myForm, setMyForm ]= useState( { email: "test@test.com", hobbies: "none" })

  function handleFormChange( event ){
    const formField = event.target.name
    console.log( `[handleFormChange] formField(${formField}) event`, event.target.value )
    if( formField==='email' ){
      setMyForm( { ...myForm, email: event.target.value })
    } else if( formField==='hobbies' ){
      setMyForm( { ...myForm, hobbies: event.target.value })
    }
  }
  
  // html
  return (
    <div class="container">
      <h1>Form</h1>
      <div class="mb-3">
        <label for="email" class="form-label">Email address</label>
        <input value={myForm.email} onChange={handleFormChange} type="email" class="form-control" name="email" id="email" placeholder="name@trilogy.com" />
      </div>
      <div class="mb-3">
        <label for="hobbies" class="form-label">Hobbies</label>
        <textarea value={myForm.hobbies} onChange={handleFormChange} class="form-control" name="hobbies" id="hobbies" rows="3"></textarea>
      </div>
    </div>
  );
}

export default App;




