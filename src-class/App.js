import Header from "./components/Header"
import Thumbnail from "./components/Thumbnail"
import Bio from "./components/Bio"
import Comments from "./components/Comments"

import { StoreProvider } from "./utils/GlobalStore"

function App() {
  return (
    <StoreProvider>
    <div class="container App">
      <Header />
      <div class="card">
        <Thumbnail />
        <Bio />
      </div>
      <hr />
      <Comments />
    </div>
    </StoreProvider>
  )
}

export default App;