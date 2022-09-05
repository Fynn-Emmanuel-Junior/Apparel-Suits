import HomePage from './Pages/Home/HomePage';
import Signin from './Pages/Siginin/Signin';
import Signup from './Pages/Signup/Signup';
import SuitPage from './Pages/Suits/SuitPage';
import SuitItem from './Pages/Suits/SuitItem';
import Products from './Constants/SuitImages';
import { Routes, Route } from 'react-router-dom';
import { useState} from 'react'

function App() {

  const [productid,setProductid] = useState()

  

  return(
      <div>
        <Routes>
          <Route path='/' element={<HomePage  />}/>
          <Route path='/signin' element={<Signin />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/suits' element={<SuitPage  setProductid={setProductid}/>} />
          <Route path='/suitItem' element={<SuitItem productid={productid}/>}/>
        </Routes>
      </div>
  )
}

export default App;