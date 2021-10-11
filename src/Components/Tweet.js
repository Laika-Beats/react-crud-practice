const Tweet = ({ tweet, tweets, setTweets, id }) => {
  const deleteTweetHandler = (e) => {
    e.preventDefault();
    setTweets(tweets.filter((tweet) => tweet.id !== id));

    console.log(tweet.id);
  };

  return (
    <div>
      <h2>User Name</h2>
      <h3>10/11/2021</h3>
      <h4>{tweet.text}</h4>
      <button>Like</button>
      <button onClick={deleteTweetHandler}>Delete</button>
    </div>
  );
};

export default Tweet;
