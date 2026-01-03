import react, { useState, useEffect } from "react";
import axios from "axios";

function Fetching() {
  const [content, setContent] = useState([]);
  console.log("hii");
  useEffect(() => {
    const handleFetch = async () => {
      try {
        const res = await axios.get(
          `https://jsonplaceholder.typicode.com/users`
        );
        setContent(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    handleFetch();
  }, []);

  return (
    <div>
      {content.map((item) => (
        <li key={item}>{item.name}</li>
      ))}
    </div>
  );
}
export default Fetching;
