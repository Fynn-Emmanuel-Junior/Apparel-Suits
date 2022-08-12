import HomePage from './Components/Home/HomePage';
import Header from './Components/Home/Header';
import Signin from './Components/Siginin/Signin';
import Signup from './Components/Signup/Signup';
import { Routes, Route } from 'react-router-dom';
function App() {
  return(
      <div>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />}/>
          <Route path='/signin' element={<Signin />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>
      </div>
  )
}

export default App;