import HomePage from './Pages/Home/HomePage';
import Signin from './Pages/Siginin/Signin';
import Signup from './Pages/Signup/Signup';
import SuitPage from './Pages/Suits/SuitPage';
import { Routes, Route } from 'react-router-dom';

function App() {
  return(
      <div>
        <Routes>
          <Route path='/' element={<HomePage />}/>
          <Route path='/signin' element={<Signin />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/suits' element={<SuitPage />} />
        </Routes>
      </div>
  )
}

export default App;