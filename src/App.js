import HomePage from './Pages/Home/HomePage';
import Signin from './Pages/Siginin/Signin';
import Signup from './Pages/Signup/Signup';
import SuitPage from './Pages/Suits/SuitPage';
import SuitItem from './Pages/Suits/SuitItem';
import Checkout from './Pages/CheckoutPage/Checkout';
import { Routes, Route } from 'react-router-dom';
import { useState} from 'react'

const  App = () => {

  const [productid,setProductid] = useState();
  const [product,setProduct] = useState();
  const [size,setSize] = useState('');
  const [quantity,setQuantity] = useState('')

  // const [productsum,setProductsum] = useState([]);

  return(
      <div>
        <Routes>
          <Route path='/' element={<HomePage  />}/>
          <Route path='/signin' element={<Signin />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/suits' element={<SuitPage  setProductid={setProductid} setProduct={setProduct} />} />
          <Route path='/suits/:id' element={<SuitItem productid={productid}  setSize={setSize} setQuantity={setQuantity} product={product}/>} />
          <Route path='/checkout' element={<Checkout productid={productid} size={size} quantity={quantity}/>}/>
        </Routes>
      </div>
  )
}

export default App;