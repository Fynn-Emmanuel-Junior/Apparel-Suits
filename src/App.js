import HomePage from './Pages/Home/HomePage';
import Header from './Pages/Home/Header';
import Signin from './Pages/Siginin/Signin';
import Signup from './Pages/Signup/Signup';
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