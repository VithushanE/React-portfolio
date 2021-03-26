import { useStoreContext } from "../utils/GlobalStore"

function ThumbnailImage(){
    const [ { thumbnail } ]= useStoreContext()

    return (
        <img src={thumbnail} class="w-100" alt="thumbnail" />
    )
}

export default ThumbnailImage