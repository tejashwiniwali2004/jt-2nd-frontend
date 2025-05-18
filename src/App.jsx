
import React from 'react';
import Counter from './Components/Counter.jsx';
import Todo from './Components/Todo.jsx';
import Products from './Components/Products.jsx';
import { ThemeProvider } from './context/ThemeContext.jsx'
import { BrowserRouter , Route, Routes } from 'react-router-dom'
import ProductDetailsPage from './page/ProductDetailsPage.jsx'
import  './App.css';
import Login from './Components/Login.jsx'


const App = () => {
  return (
    <>
    {/* <div>App</div>
    <div>User</div>
    <User name="john Deo" course="BCA"  email="john12@gmail.com"/>
    <User name="tejashwini"  course="BCA" email="walitejashwini@gmail.com"/>
    <User>
      <h1>Child</h1>
      <p>child</p>
    </User>
    <Counter />
    <Todo /> */}

  
      <ThemeProvider>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetailsPage />} />
        <Route path="/login" element={<Login />} /> 
      </Routes>
      </BrowserRouter>
    </ThemeProvider>
    
    
    </>
  );
};

export default App