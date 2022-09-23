import React from "react";
import blogData from "../data/blog";
import About from "./About";
import ArticleList from "./ArticleList";
import Header from "./Header"

console.log(blogData);

function App(props) {
  props= blogData;
  return (
    <div className="App">
     <Header name = "Overreacted"/>
     <About img = {props.image} about ={props.about}/>
     <ArticleList posts ={props.posts}/>
     
    </div>
  );
}

export default App;
