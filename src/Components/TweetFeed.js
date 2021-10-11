import Tweet from "./Tweet";

const TweetFeed = ({ tweets, setTweets }) => {
  return (
    <div>
      {tweets.map((tweet) => (
        <Tweet
          tweets={tweets}
          setTweets={setTweets}
          tweet={tweet}
          key={tweet.id}
          id={tweet.id}
        />
      ))}
    </div>
  );
};

export default TweetFeed;
