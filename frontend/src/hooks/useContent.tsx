import React from "react";
import axios from "axios";

const useContent = () => {
  const [content, setContent] = React.useState([]);

  function refresh() {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/v1/content`, {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setContent(res.data.content);
      })
      .catch((err) => {
        console.error("Failed to fetch content:", err);
      });
  }

  React.useEffect(() => {
    refresh();
    const interval = setInterval(() => {
      refresh();
    }, 10000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return { content, refresh };
};

export default useContent;
