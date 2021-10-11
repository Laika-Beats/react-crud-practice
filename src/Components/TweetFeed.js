import Tweet from "./Tweet";

const TweetFeed = ({ tweets }) => {
  return (
    <div>
      {tweets.map((tweet) => (
        <Tweet tweet={tweet} />
      ))}
    </div>
  );
};

export default TweetFeed;
