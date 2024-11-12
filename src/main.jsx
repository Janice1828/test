import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { createContext, useState } from 'react'
const useContextData = createContext()
const RootComponent = () => {
  const [useContextValue, setUseContextValue] = useState("Hello From App");
  return (
    <useContextData.Provider value={{ useContextValue, setUseContextValue }}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </useContextData.Provider>
  )
}
createRoot(document.getElementById('root')).render(
  <RootComponent />
)
export { useContextData }