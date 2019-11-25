import React from "react";
import "./App.css";
import Posts from "./components/Posts";
import PostForm from "./components/PostForm";
import { Router } from "@reach/router";
import { Provider } from "react-redux";
import store from "./store";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Navbar />
        <Router>
          <PostForm path="/addPost" />
          <Posts path="/" />
        </Router>
      </div>
    </Provider>
  );
};

export default App;
