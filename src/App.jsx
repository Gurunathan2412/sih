import {React} from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Typography,AppBar,Toolbar} from '@mui/material'
import Chatbot from './pages/Chatbot/Chatbot';
import Home from './pages/home';
import AdminUpload from './pages/admin upload/ui';
function App() {


  return (
    <>
      <Router>
      {/* <Header /> */}
        <Routes>
          <Route path='/' exact  Component={Home}/>
          <Route path='/home' exact  Component={Home}/>

          <Route path='/chatbot' exact  Component={Chatbot}/>
          <Route path='/Admin' exact  Component={AdminUpload}/>

          {/* <Route path='/dashboard' exact  Component={Dashboard}/>
          <Route path='/login' exact  Component={Login}/> */}
        </Routes>
        {/* <Footer /> */}

      </Router>
      {/* <Typography variant='h1'>Hello</Typography>
      <Typography variant='h1'>Hello</Typography>
      <Typography variant='h1'>Hello</Typography>
      <Typography variant='h1'>Hello</Typography>
      <Typography variant='h1'>Hello</Typography>
      <Typography variant='h1'>Hello</Typography>
      <Typography variant='h1'>Hello</Typography>
      <Typography variant='h1'>Hello</Typography>
      <Typography variant='h1'>Hello</Typography>

      <Footer /> */}
    </>
  )
}

export default App
