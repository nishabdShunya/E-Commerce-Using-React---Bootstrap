import React, { useRef, useState, useContext } from "react";
import { useNavigate } from "react-router";
import { Button, Form } from "react-bootstrap";
import AuthContext from "../store/auth-context";

function AuthForm() {
  const authCtx = useContext(AuthContext);

  const navigate = useNavigate();

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const [isLogin, setIsLogin] = useState(true);

  const changeAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const loginHandler = async (event) => {
    event.preventDefault();

    let url;
    if (isLogin) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBpKGbcXRhUz7tVp_2ApTJ8kGraDg_omE4";
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBpKGbcXRhUz7tVp_2ApTJ8kGraDg_omE4";
    }

    try {
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify({
          email: emailInputRef.current.value,
          password: passwordInputRef.current.value,
          returnSecureToken: true,
        }),
        headers: { "Content-Type": "application/json" },
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error.message);
      }
      const data = await response.json();
      console.log(data);
      authCtx.login(data.idToken, data.email);
      navigate("/products");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="w-50 my-5 py-2 mx-auto">
      <h1>{isLogin ? "Login" : "Signup"}</h1>
      <Form onSubmit={loginHandler}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            ref={emailInputRef}
            type="email"
            placeholder="Enter email"
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            ref={passwordInputRef}
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <div className="d-flex flex-column">
          <Button
            variant="warning"
            type="submit"
            className="align-self-center mb-3"
          >
            {isLogin ? "Login" : "Signup"}
          </Button>
          <Button
            variant="outline-dark"
            type="button"
            onClick={changeAuthModeHandler}
          >
            {isLogin
              ? "Create a new account"
              : "Login with an existing account"}
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default AuthForm;
