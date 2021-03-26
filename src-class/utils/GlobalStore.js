import { createContext, useReducer, useContext } from "react";

const initialData = {
  userid: "234334",
  username: "Bear",
  location: "Toronto",
  info: "Welcome to my page. I am a software developer. I live in Toronto",
  thumbnail: "https://d.newsweek.com/en/full/1519172/brown-bear.jpg",
  thumbnailCaption: "I can be a bear when I need to",
  comments: []
}

/*! IMPORTANT all your reducer functionality goes here */
const dataReducer = (state, action) => {
  switch (action.type) {
  case "POST":
    return { ...state, comments: [ action.value, ...state.comments ] };
  case "DELETE":
    // ADD delete code?
    return { ...state };
  default:
    throw new Error(`Invalid action type: ${action.type}`)
  }
}



const StoreContext = createContext()

const useStoreContext = function(){
  return useContext(StoreContext)
}

const StoreProvider = function(props){
  const [state, dispatch] = useReducer( dataReducer, initialData )
  return <StoreContext.Provider value={[state, dispatch]} {...props} />
}

export { StoreProvider, useStoreContext };