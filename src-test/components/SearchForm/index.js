import react from "react"

function SearchForm(props){
    return (
        <form>
        <input
         type = "text"
         value = {props.handleFormSearch}
        />

        <button type ="submit" onclick={props.handleFormSubmit}> Search</button>
        </form>
    );
}

export default SearchForm