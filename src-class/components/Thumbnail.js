import ThumbnailImage from './ThumbnailImage'
import { useStoreContext } from "../utils/GlobalStore"

function Thumbnail(){
    const [ { thumbnailCaption } ]= useStoreContext()

    return (
        <div class="img-thumbnail mx-2" style={ {width: '300px'} } >
            <ThumbnailImage />
            
            <div class='text-muted'>{thumbnailCaption}</div>
        </div>
    )
}

export default Thumbnail