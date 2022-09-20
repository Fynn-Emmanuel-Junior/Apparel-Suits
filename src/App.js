import HomePage from './Pages/Home/HomePage';
import Signin from './Pages/Siginin/Signin';
import Signup from './Pages/Signup/Signup';
import SuitPage from './Pages/Suits/SuitPage';
import SuitItem from './Pages/Suits/SuitItem';
import Checkout from './Pages/CheckoutPage/Checkout';
import Products from './Constants/SuitImages';
import { Routes, Route } from 'react-router-dom';
import { useState} from 'react'

function App() {

  const [productid,setProductid] = useState()
  const [product,setProduct] = useState({})

  
  const [size,setSize] = useState('');
  const [quantity,setQuantity] = useState('')

  const [productsum,setProductsum] = useState([]);

  

  return(
      <div>
        <Routes>
          <Route path='/' element={<HomePage  />}/>
          <Route path='/signin' element={<Signin />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/suits' element={<SuitPage  setProductid={setProductid} />} />
          <Route path='/suitItem' element={<SuitItem productid={productid} setProduct={setProduct} setSize={setSize} setQuantity={setQuantity} />}/>
          <Route path='/checkout' element={<Checkout product={product}  size={size} quantity={quantity}/>}/>
        </Routes>
      </div>
  )
}

export default App;