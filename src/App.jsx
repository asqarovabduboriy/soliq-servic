import React from 'react'

import './App.scss'
import Navbar from './components/Navbar/Navbar'
import Main from './components/Main/Main'
import SectionOne from './components/SectionOne/SectionOne'
import SectionTwo from './components/SectionTwo/SectionTwo'
import SectionThere from './components/SectionThere/SectionThere'
import SectionFour from './components/SectionFour/SectionFour'
import Form from './components/FormSection/Form'
import Footer from './components/Footer/Footer'
function App() {

  return (
    <>
      <Navbar/>
      <Main/>
      <SectionOne/>
      <SectionTwo/>
      <SectionThere/>
      <SectionFour/>
      <Form/>
      <Footer/>
    </>
  )
}

export default App
