import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Parent from './Parent'
import Test from './Test'
import Test2 from './Test2'
import Toggling from './Toggling'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Lorem from './Lorem'
import Frame from './Frame'
import Pagination from './Pagination'
import Tail from './Tail'
import Globalstate from './Globalstate'
import Child_two from './Child_two'
import { useState } from 'react'
import { createContext } from 'react'
import Grandparent from './usecontext/Grandparent'
import Reduxview from './redux/view';
import UseReducer from './hooks/usereducer/UseReducer'
const TestContext = createContext();
function App() {
  const [user, setUser] = useState("Jenish")
  return (
    <>
      <Reduxview />
    </>
  )
}

export default App
export { TestContext }