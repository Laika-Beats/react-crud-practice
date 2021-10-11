const CreateTweet = ({ inputText, setInputText, tweets, setTweets }) => {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const submitTextHandler = (e) => {
    e.preventDefault();
    setTweets([...tweets, inputText]);
    setInputText("");
  };
  return (
    <form onSubmit={submitTextHandler}>
      <input value={inputText} onChange={inputTextHandler}></input>
      <button>Submit</button>
    </form>
  );
};

export default CreateTweet;
