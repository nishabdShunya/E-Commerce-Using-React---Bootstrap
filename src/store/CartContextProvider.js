import React, { useState, useContext } from "react";
import CartContext from "./cart-context";
import AuthContext from "./auth-context";

const CartContextProvider = (props) => {
  const authCtx = useContext(AuthContext);
  console.log(authCtx);

  const [items, setItems] = useState([]);

  const addItemToCart = async (item) => {
    const modifiedUserEmail = authCtx.email.replace("@", "").replace(".", "");

    try {
      const getResponse = await fetch(
        `https://e-commerce-auth-c71be-default-rtdb.firebaseio.com/cart${modifiedUserEmail}.json`
      );
      if (!getResponse.ok) {
        throw new Error("Something went wrong");
      }
      const getResponseData = await getResponse.json();

      let reqConfig = { payload: item, method: "POST", keyPath: "" };
      for (let key in getResponseData) {
        if (getResponseData[key].id === item.id) {
          reqConfig.payload = {
            ...getResponseData[key],
            quantity: getResponseData[key].quantity + item.quantity,
          };
          reqConfig.method = "PUT";
          reqConfig.keyPath = `/${key}`;
        }
      }

      const response = await fetch(
        `https://e-commerce-auth-c71be-default-rtdb.firebaseio.com/cart${modifiedUserEmail}${reqConfig.keyPath}.json`,
        {
          method: reqConfig.method,
          body: JSON.stringify(reqConfig.payload),
          headers: { "Content-Type": "application/json" },
        }
      );
      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      const responseData = await response.json();
      console.log(responseData);
    } catch (error) {
      alert(error.message);
    }
  };

  const removeItemFromCart = (id) => {
    setItems((prevItems) => prevItems.filter((prevItem) => prevItem.id !== id));
  };

  const cartContextObject = {
    items: items,
    addItem: addItemToCart,
    removeItem: removeItemFromCart,
  };

  return (
    <CartContext.Provider value={cartContextObject}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
