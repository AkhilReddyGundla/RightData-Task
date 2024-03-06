import Header from "./components/Header"
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'
import configureStore from "./redux/configureStore"
import { Provider } from 'react-redux';
import { Suspense, lazy } from "react"
import LoadingComponent from "./components/LoadingComponent";


//lazy loading

const Register = lazy(()=>import ('./components/Register'))
const Login = lazy(()=>import ('./components/Login'))
const Dashboard = lazy(()=>import ('./components/Dashboard'))

function App() {
  const { store, persistor } = configureStore();
  return (
    <>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Header/>
          <Routes>
            <Route path = '/' element = {<Suspense fallback={<LoadingComponent color="inherit"/>}><Register/></Suspense>} />
            <Route path = '/login' element = {<Suspense fallback={<LoadingComponent color="inherit"/>}><Login/></Suspense>} />
            <Route path = '/Dashboard' element = {<Suspense fallback={<LoadingComponent color="inherit"/>}><Dashboard/></Suspense>}/>
          </Routes>
        </BrowserRouter>
      </PersistGate>
    </Provider>
    </>
  )
}

export default App
