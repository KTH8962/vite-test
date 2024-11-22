import './App.css'
import ReduxPage from './page/ReduxPage'
import { Provider } from 'react-redux'
import store from './redux/store'
import ReduxTest from './page/ReduxTest'

function App() {

  return (    
    <Provider store={store}>
      <ReduxTest/>
    </Provider>
  )
}

export default App
