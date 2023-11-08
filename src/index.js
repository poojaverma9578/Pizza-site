import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import './index.css';

const pizzaData = [
    {
      name: "Focaccia",
      ingredients: "Bread with italian olive oil and rosemary",
      price: 6,
      photoName: "pizzas/focaccia.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Margherita",
      ingredients: "Tomato and mozarella",
      price: 10,
      photoName: "pizzas/margherita.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Spinaci",
      ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
      price: 12,
      photoName: "pizzas/spinaci.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Funghi",
      ingredients: "Tomato, mozarella, mushrooms, and onion",
      price: 12,
      photoName: "pizzas/funghi.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Salamino",
      ingredients: "Tomato, mozarella, and pepperoni",
      price: 15,
      photoName: "pizzas/salamino.jpg",
      soldOut: true,
    },
    {
      name: "Pizza Prosciutto",
      ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
      price: 18,
      photoName: "pizzas/prosciutto.jpg",
      soldOut: false,
    },
  ];

function App() {
  return <div className="container">
      <Header />
      <Menu />
      <Footer />
  </div>
}

function Header() {
  return <header className="header">
    <h1>Welcome to Pizza Co.</h1>
  </header>
}

function Menu() {
  return <main className="menu">
      <h2>Our Menu</h2>

      {/* Rendering the pizza list dynamically thus seperating data from code*/}

      <ul className="pizzas">
        {pizzaData.map((pizza)=>(
          <Pizza pizzaObj={pizza} key={pizza.name}/>
        ))}
      </ul>

      {/* <Pizza name='Focaccia' desc='Bread with italian olive oil and rosemary' img='./pizzas/focaccia.jpg' price={100}/>
      <Pizza name= "Pizza Margherita" desc= "Tomato and mozarella" img= "./pizzas/margherita.jpg" price={100}/>
      <Pizza name= "Pizza Spinaci"
      price={100}
      desc= "Tomato, mozarella, spinach, and ricotta cheese"
      img= "./pizzas/spinaci.jpg"/>
      <Pizza name= "Pizza Funghi"
      price={100}
      desc= "Tomato, mozarella, mushrooms, and onion"
      img= "./pizzas/funghi.jpg"/>
      <Pizza name="Pizza Salamino"
      price={100}
      desc= "Tomato, mozarella, and pepperoni"
      img="./pizzas/salamino.jpg"/>
      <Pizza name= "Pizza Prosciutto"
      price={100}
      desc= "Tomato, mozarella, ham, aragula, and burrata cheese"
      img= "./pizzas/prosciutto.jpg"/> */}
  </main>
}

function Footer() {
  const hour=new Date().getHours();
  if(hour>=9 && hour<=21)
  // {new Date().toLocaleTimeString()}
  return <footer className="footer">All Rights Reserved</footer>
  else
  {
    alert("We are currently closed!!!")
  }
}

//linking components together
function Pizza(props){
    return <li className="pizza">
        <img src={props.pizzaObj.photoName} alt={props.pizzaObj.name}/>
        <div>
          <h3>{props.pizzaObj.name}</h3>
          <p>{props.pizzaObj.ingredients}</p>
          <span>{props.pizzaObj.price} </span>
          <button id="payButton">Pay Now</button>
        </div>
    </li>
}

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>); 