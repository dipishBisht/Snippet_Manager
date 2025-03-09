import { Outlet } from "react-router-dom"
import Footer from "./components/footer"

function App() {

  return (
    <>
      <main className=" ">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default App
