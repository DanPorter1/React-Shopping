import './App.css'
import ShoppingPanel from "./components/shopping/ShoppingPanel.jsx";

function App() {

  return (
    <>
      <h1>The Shopping Simulator</h1>
        <ShoppingPanel url={"https://product-list.danporter-36a.workers.dev/api/testdata"} />
    </>
  )
}

export default App;
