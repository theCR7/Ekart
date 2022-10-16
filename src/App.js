import "./App.css";
import React, { useState } from "react";
import Navbar from "./component/Navbar";
import ProductList from "./component/ProductList";
import Footer from "./component/Footer.js";
import AddItem from "./component/AddItem.js";


function App() {
  const products = [
    {
      name: "Iphone 12",
      price: 99999,
      quantity: 0,
    },
    {
      name: "Redmi Note 12",
      price: 9999,
      quantity: 0,
    },
  ];
  let [productList, setProductList] = useState(products);
  let [totalAmount, setTotalAmount] = useState(0);

  const incrementQuantity = (index) => {
    let newProductList = [...productList];
    let newTotalAmount= totalAmount;
    
    newProductList[index].quantity++;
    newTotalAmount += newProductList[index].price;
    setProductList(newProductList);
    setTotalAmount(newTotalAmount);
  };
  const decrementQuantity = (index) => {
    let newProductList = [...productList];
    let newTotalAmount= totalAmount;
    if(newProductList[index].quantity > 0) {
     newProductList[index].quantity-- ;
     newTotalAmount -= newProductList[index].price; 
    }  
    setProductList(newProductList);
    setTotalAmount(newTotalAmount);
  };

  const resetQuantity = () => {
    let newProductList =[...productList];
    newProductList.map((products)=>{
      products.quantity =0;
    })
    setProductList(newProductList);
    setTotalAmount(0);
  }

  const removeItem = (index) =>  {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    newTotalAmount -= newProductList[index].price * newProductList[index].quantity;
    newProductList.splice(index,1);
    setProductList(newProductList);
    setTotalAmount(newTotalAmount);
  }

  const addItem = (name, price) => {
    let newProductList = [...productList];
    newProductList.push({
      name: name,
      price: price,
      quantity: 0
    });
    setProductList(newProductList);
  }
  
  return (
    <>
      <Navbar />
      <main className="container mt-5">
        <AddItem addItem={addItem}/>
        <ProductList
          productList={productList}
          incrementQuantity={incrementQuantity}
          decrementQuantity={decrementQuantity}
          removeItem = {removeItem}
        />
      </main>
      <Footer totalAmount={totalAmount} resetQuantity ={resetQuantity}/>
    </>
  );
}

export default App;
