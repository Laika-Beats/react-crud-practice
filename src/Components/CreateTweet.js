import { v4 as uuidv4 } from "uuid";

const CreateTweet = ({ inputText, setInputText, tweets, setTweets }) => {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const submitTextHandler = (e) => {
    e.preventDefault();
    setTweets([...tweets, { text: inputText, id: uuidv4() }]);
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
