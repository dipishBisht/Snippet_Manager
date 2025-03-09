import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import SignupPage from './pages/signup/page.tsx'
import LoginPage from './pages/login/page.tsx'
import DashboardPage from './pages/dashboard/page.tsx'
import HomePage from './pages/home/page.tsx'
import { ThemeProvider } from './context/theme/theme-provider.tsx'
import { ToastContainer } from 'react-toastify';
import FeaturesPage from './pages/features/page.tsx'
import PricingPage from './pages/pricing/page.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />
      },
      {
        path: "/signup",
        element: <SignupPage />
      },
      {
        path: "/login",
        element: <LoginPage />
      },
      {
        path: "/features",
        element: <FeaturesPage />
      },
      {
        path: "/pricing",
        element: <PricingPage />
      },
      {
        path: "/dashboard",
        element: <DashboardPage />
      }
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <ThemeProvider defaultTheme="light" storageKey="snippet-manager-theme">
        <RouterProvider router={router} />
        <ToastContainer />
      </ThemeProvider>
  </StrictMode>,
)
