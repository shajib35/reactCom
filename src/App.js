import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import Card from "./components/Card";
import Data from "./data.json";
import form from "./components/Form/form";
import Header from "./components/Header";
import Form from './components/Form/form';

function App(){
let items=[];
for (let x=0; x<Data.length; x++){
  items.push( <Card titleT="Hi shajib" monopoli="my first react app"  titlett={Data[x].title} desc={Data[x].desc}/> )
}

 return <div>
   <Header />
   <Form />

 {items}
 
  
 </div>
 
}


export default App;
