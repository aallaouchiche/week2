import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import YourArticles from './yourArticles';
import Missed_Articles from './Missed_Articles';
import your_articles from './your-articles.json';
import missedArticles from './missed-articles.json';
class App extends Component {
get_article_data() {
const articles = your_articles.map((article,index)=>article);
return (
articles
);
}
render() {
return (
<html lang="en">
   <head>
      <meta charSet="utf-8"/>
      <title>AJAX JQuery</title>
      <link rel="stylesheet" href="css/main.css"/>
   </head>
   <body id="page1">
      <nav id="nav_bar">
         <ul>
            <li><a href="#nothinghere" id="load" data-page="home"> Home</a></li>
            <li><a href="#nothinghere" id="load" data-page="home"> Trust</a></li>
            <li><a href="#nothinghere" id="load" data-page="downloads"> Culture</a></li>
            <li><a href="#nothinghere" id="load" data-page="tutorials"> Tech</a></li>
            <li><a href="#nothinghere" id="load" data-page="home"> Entrepreneurship</a></li>
            <li><a href="#nothinghere" id="load" data-page="downloads"> Self</a></li>
            <li><a href="#nothinghere" id="load" data-page="tutorials"> Politics</a></li>
            <li><a href="#nothinghere" id="load" data-page="home"> Media</a></li>
            <li><a href="#nothinghere" id="load" data-page="downloads"> Design</a></li>
            <li><a href="#nothinghere" id="load" data-page="tutorials"> Science</a></li>
            <li><a href="#nothinghere" id="load" data-page="tutorials"> Popular</a></li>
            <li><a href="#nothinghere" id="load" data-page="tutorials"> More</a></li>
         </ul>
      </nav>
      <div>
         <h1 id ="title" className="ui-h1 u-fontSize32 u-xs-fontSize24 u-fontWeightBold u-textColorDarkest u-letterSpacing003 u-paddingBottom5 js-topicName">Creativity</h1>
         <h2 id="title1">Of muses and mistakes.</h2>
      </div>
      <div id="heading-title">
         <header className="u-flex"><span className="heading-title">For you</span></header>
      </div>
      <div id="articles">
         <div className="artic">
            {your_articles.map((article, key) =>
            <YourArticles article={article} />
            )}
         </div>
      </div>
      <div id="heading-title2">
         <header className="u-flex"><span className="heading-title">In case you missed it</span></header>
      </div>
      <div id="heading-title" className="App-container">
         {missedArticles.map((article, key) =>
         <Missed_Articles article={article} />
         )}
      </div>
   </body>
</html>
);
}
}
export default App;
