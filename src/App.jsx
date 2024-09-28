import React from 'react';
import news_feed from './sample_news_stories.json';
import Story from './components/Story'; // Ensure you import the Story component
import "./App.css";

function App() {
  const stories = news_feed.results;
  const storyList = stories.map((news, index) => (
    <Story key={index} news={news} />
  ));

  return (
    <div className="App">
      <h1>Random News Feed</h1>
      <div className="storylist">
        {storyList}
      </div>
    </div>
  );
}

export default App;

