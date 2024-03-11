import React, { useState, useContext, useEffect } from "react";
import CartContext from "./cart-context";
import AuthContext from "./auth-context";

const baseCartUrl =
  "https://e-commerce-app-dd87e-default-rtdb.firebaseio.com/cart";

const fetchCartData = async (modifiedUserEmail) => {
  const response = await fetch(`${baseCartUrl}${modifiedUserEmail}.json`);
  if (!response.ok) {
    throw new Error("Something went wrong");
  }
  const responseData = await response.json();
  return responseData;
};

const CartContextProvider = (props) => {
  const authCtx = useContext(AuthContext);

  const [items, setItems] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        if (!authCtx.email) {
          return setItems([]);
        }
        const modifiedEmail = authCtx.email.replace("@", "").replace(".", "");
        const userCartData = await fetchCartData(modifiedEmail);
        let cartItems = Object.values(userCartData);
        setItems(cartItems);
      } catch (error) {
        alert(error.message);
      }
    })();
  }, [authCtx.email]);

  const updateCartItems = (userCartData, item) => {
    let cartItems = Object.values(userCartData);
    const existingItemIndex = cartItems.findIndex((i) => i.id === item.id);
    if (existingItemIndex !== -1) {
      const existingItem = cartItems[existingItemIndex];
      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity + item.quantity,
      };
      cartItems[existingItemIndex] = updatedItem;
    } else {
      cartItems.push(item);
    }
    setItems(cartItems);
  };

  const addItemToCart = async (item) => {
    try {
      const modifiedUserEmail = authCtx.email.replace("@", "").replace(".", "");
      const userCartData = await fetchCartData(modifiedUserEmail);

      let reqConfig = { payload: item, method: "POST", keyPath: "" };
      for (let key in userCartData) {
        if (userCartData[key].id === item.id) {
          reqConfig.payload = {
            ...userCartData[key],
            quantity: userCartData[key].quantity + item.quantity,
          };
          reqConfig.method = "PUT";
          reqConfig.keyPath = `/${key}`;
        }
      }

      const response = await fetch(
        `${baseCartUrl}${modifiedUserEmail}${reqConfig.keyPath}.json`,
        {
          method: reqConfig.method,
          body: JSON.stringify(reqConfig.payload),
          headers: { "Content-Type": "application/json" },
        }
      );
      if (!response.ok) {
        throw new Error("Something went wrong");
      }

      updateCartItems(userCartData, item);
    } catch (error) {
      alert(error.message);
    }
  };

  const removeItemFromCart = async (id) => {
    try {
      const modifiedUserEmail = authCtx.email.replace("@", "").replace(".", "");
      const userCartData = await fetchCartData(modifiedUserEmail);

      let keyPath;
      for (let key in userCartData) {
        if (userCartData[key].id === id) {
          keyPath = `/${key}`;
        }
      }

      const response = await fetch(
        `${baseCartUrl}${modifiedUserEmail}${keyPath}.json`,
        {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
        }
      );
      if (!response.ok) {
        throw new Error("Something went wrong");
      }

      setItems((prevItems) =>
        prevItems.filter((prevItem) => prevItem.id !== id)
      );
    } catch (error) {
      alert(error.message);
    }
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
