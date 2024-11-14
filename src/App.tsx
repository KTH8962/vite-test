import './App.css'
import ReduxPage from './page/ReduxPage'
import { Provider } from 'react-redux'
import store from './redux/store'

function App() {

  return (    
    <Provider store={store}>
      <ReduxPage/>
    </Provider>
  )
}

export default App
