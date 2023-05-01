import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [groceries, setGroceries] = useState(['apple', 'banana', 'orange', 'pear']);
  const [cartList, setCartList] = useState(['apple', 'orange']);
  const [itemsLeft,SetItemsLeft] = useState([]);
  

  const handleCartItems = () => {
    const itemsLeft = groceries.filter((grocery,index) => {
       if(cartList.includes(grocery)){
          return grocery;
       };
    });
    SetItemsLeft(itemsLeft);
    return itemsLeft;
  }

  useEffect(() => {
    handleCartItems();
    console.log(handleCartItems());
  },[]);
  return (
    <div className="App">
        items left to buy:
        {
          itemsLeft.map((data,index) => {
            <div key={index}>
              {data}
            </div>
          })
        }
    </div>
  );
}

export default App;
