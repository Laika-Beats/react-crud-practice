import { useState } from "react";
import CreateTweet from "./Components/CreateTweet";
import TweetFeed from "./Components/TweetFeed";

function App() {
  const [inputText, setInputText] = useState("");
  const [tweets, setTweets] = useState([]);

  return (
    <div className="App">
      <h1>APP COMPONENT</h1>
      <CreateTweet
        inputText={inputText}
        setInputText={setInputText}
        tweets={tweets}
        setTweets={setTweets}
      />
      <TweetFeed tweets={tweets} />
    </div>
  );
}

export default App;
