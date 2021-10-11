const Tweet = ({ tweet }) => {
  return (
    <div>
      <h2>User Name</h2>
      <h3>10/11/2021</h3>
      <h4>{tweet}</h4>
      <button>Like</button>
      <button>Delete</button>
    </div>
  );
};

export default Tweet;
