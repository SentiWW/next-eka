import type { NextPage } from 'next'
import { BrowserRouter, Route } from 'react-router-dom';
import About from '../components/About/About';
import Contact from '../components/Contact/Contact';
import Members from '../components/Members/Members';
import Nav from '../components/Nav';
import Welcome from '../components/Welcome/Welcome';
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <>
      <Nav/>
      <Welcome/>
      <About/>
      <Members/>
      <Contact/>
    </>
  )
}

export default Home;
