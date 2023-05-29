
import './App.css';

import { Counter } from './Components/Counter'
import { Button } from './Components/Button';
import { Card } from './Components/Card';
import styled from 'styled-components'

import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Layout from "./Components/pages/Layout";
import Home from "./Components/pages/Home";
import Market from "./Components/pages/Market";
import Blogs from "./Components/pages/Blogs";

import Products from "./Components/pages/Products";
import Navbar from 'Components/Navbar/Navbar';
import Search from 'Components/Search/Search';
import Container from 'Components/Container/Container';
function App() {
  return (
    
      <BrowserRouter>
        <Navbar />
        <Routes>
          
          
          <Route path='/' Component={Home} />
          <Route path='/market' Component={Market} />
          <Route path='/products' Component={Products} />
          
          
        </Routes>
    </BrowserRouter>
        
        /* <Card title={"Revenue"} amount={5} percent={12.3} />
        <Card title={"Spending"} amount={2} percent={8} />
        <Card title={"ROI"} content={"+14.02%"} percent={5}/>
        <Card title={"Estimated"} amount={7} percent={3} /> */
      
  );
}

export default App;
