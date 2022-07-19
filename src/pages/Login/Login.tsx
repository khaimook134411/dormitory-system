import React, { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    // Preventing the page from reloading
    event.preventDefault();

    // Do something
    console.log(`hello ${username} `);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          username:
          <input
            type="text"
            placeholder="xxx@gmail.com"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          password:
          <input type="password" placeholder="password" />
        </div>
        <button type="submit">
          <Link to="/status_rooms">login</Link>
        </button>
      </form>
    </div>
  );
}

export default Login;
