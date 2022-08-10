// import logo from '../src/images/icons/Logo.svg'
import './App.css'

import AppBar from './components/AppBar/AppBar'
import Background from './components/Background/Background'
import Container from './components/Container/Container'

function App() {
  return (
    <div>
      <Container>
        <AppBar />
        <Background />
      </Container>
    </div>
    // <div className="App">
    //   <AppBar />
    //   <Container />
    //   {/* <header className="App-header">
    //     <div className="mendee-digital-logo">
    //       <img src={logo} className="App-logo" alt="logo" />
    //     </div>

    //   </header> */}
    // </div>
  )
}

export default App
