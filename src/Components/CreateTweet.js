import { useState } from "react";

const CreateTweet = () => {
  const [inputText, setInputText] = useState("");
  const [submitText, setSubmitText] = useState([]);

  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const submitTextHandler = (e) => {
    e.preventDefault();
    setSubmitText([...submitText, inputText]);
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
