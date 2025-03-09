import { Outlet } from "react-router-dom"
import Footer from "./components/footer"
import { Navbar } from "./components/navbar"
import Guard from "./utils/guard"
import { UserProvider } from "./context/user/user-provider"

function App() {

  return (
    <UserProvider>
      <Guard>
        <Navbar />
        <main>
          <Outlet />
        </main>
        <Footer />
      </Guard>
    </UserProvider>
  )
}

export default App
