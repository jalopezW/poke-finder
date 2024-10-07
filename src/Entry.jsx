import { useState } from "react";

export default function Entry({ action }) {
  const [content, setContent] = useState("");

  function submit(e) {
    e.preventDefault(); // default is to reload page
    // alert(content); //puts a little notification at top of browser
    // good for debugging
    action(content);
    setContent(""); // resets input to blank
  }
  return (
    <form onSubmit={submit}>
      <input value={content} onChange={(e) => setContent(e.target.value)} />
    </form>
  );
}
