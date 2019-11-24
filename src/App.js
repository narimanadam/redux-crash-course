import React from "react";
import "./App.css";
import Posts from "./components/Posts";
import PostForm from "./components/PostForm";
import { Router } from "@reach/router";
import { Provider } from "react-redux";
import store from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <PostForm path="/" />
          <Posts path="/posts" />
        </Router>
      </div>
    </Provider>
  );
};

export default App;
