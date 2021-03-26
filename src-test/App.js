// function helloWorld(){
//   return (
//     <div class= "card">
//       <div class = "card-body">
//         My name is vithu
//       </div>
//     </div>
//     );
// }

// function App(){
//   return (
//     <div class= "container">
//       Hello World!
//       <helloWorld/>
//     </div>
//   )
// }

// export default App; 

import { useState, useEffect } from "react"
// import NameTag from "./components/NameTag"
function App() {
  // javascript code
  const [ dogImage, setDogImage ]= useState("")
  async function init(){
    // load the dog image
    const url = 'https://dog.ceo/api/breeds/image/random'
    const result = await fetch( url ).then( r=>r.json() )
    console.log( `[init] dog url fetch: `, result )
    if( result.status==="success" ){
      setDogImage( result.message )
    }
  }
  useEffect( function(){
    init()
  }, [])
  // html
  return (
    <div class="container">
      <div class="alert alert-danger">
        Hello World
      </div>
      {/* <NameTag username="Team Camp" memberSince="2020" /> */}
      <hr />
      <img src={dogImage} width="100%" alt="Dog breed" />
    </div>
  );
}
export default App;