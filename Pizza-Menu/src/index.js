import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import "./index.css";

const pizzaData = [
  {
    name: "Sag Pizza",
    ingredients: "Tomato, mozarella, spinach, and yak cheese",
    photoName: "pizzas/spinaci.jpg",
    price: "Rs.400",
    soldOut: false,
  },
  {
    name: "Mix Veg Pizza",
    ingredients: "Tomato, mozarella, onion, and yak cheese",
    photoName: "pizzas/funghi.jpg",
    price: "Rs.450",
    soldOut: false,
  },

  {
    name: "Cheesy Chicken Pizza",
    ingredients: "Chicken, mozarella, herbs, and yak cheese",
    photoName: "pizzas/salamino.jpg",
    price: "Rs.650",
    soldOut: false,
  },
  {
    name: "Garlic Pizza Bread",
    ingredients: "Garlic, butter,thyme and coarse salt",
    photoName: "pizzas/focaccia.jpg",
    price: "Rs.550",
    soldOut: true,
  },
  {
    name: "Pudina Pizza",
    ingredients: "Tomato, mozarella, ham, Pudina Pat, and burrata cheese",
    price: "Rs.300",
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}
function Header() {
  const style = {
    // color: "orange",
    // fontFamily: "Roberto",
    // textTransform: "uppercase",
  };

  return (
    <header className="header">
      <h1 style={style}>Nepali IT Pizza House</h1>
    </header>
  );
}

function Menu() {
  const pizzas = { pizzaData };
  const numpizza = pizzaData.length;
  console.log(numpizza);

  return (
    <main className="menu">
      <h2>Our Menu Items:</h2>
      {numpizza > 0 ? (
        <>
          <p>Have some Cheezy Good </p>
          {pizzas && (
            <ul className="pizzas">
              {pizzaData.map((pizza) => (
                <Pizza pizzaobj={pizza} key={pizza.name} />
              ))}
            </ul>
          )}
        </>
      ) : (
        <p>Test</p>
      )}
    </main>
  );
}
function Pizza({ pizzaobj }) {
  // if (pizzaobj.soldOut)
  //   return <p className="pizzas">{pizzaobj.name} Currently Unavailable</p>;
  return (
    <li className={`pizza ${pizzaobj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaobj.photoName} alt={pizzaobj.name} />
      <div>
        <h3>{pizzaobj.name}</h3>
        <p>{pizzaobj.ingredients}</p>
        <span>{pizzaobj.soldOut ? "SOLD OUT" : pizzaobj.price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openhour = 10;
  const closehour = 19;
  const isopen = hour >= openhour && hour <= closehour;

  return (
    <footer className="footer">
      <div className="order">{new Date().toLocaleDateString()}</div>
      {isopen ? (
        <Order />
      ) : (
        <p>
          Come Back Between {openhour}:00 and {closehour}:00
        </p>
      )}
    </footer>
  );
  function Order({ closehour }) {
    return (
      <div className="order">
        <p>We are open for serving until {closehour}:00.Visit or Order now.</p>
        <button className="btn">Order</button>
      </div>
    );
  }
  //if (hour >= openhour && hour <= closehour) alert("We are serving pizzas !!");
  //else alert("We are closed at the time");
  //}
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
