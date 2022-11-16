import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function HomeScreen() {
  const [user, setUser] = useState(0);

  const handleUser = () => {
    if (user === 1) {
      setUser(0);
    } else {
      setUser(1);
    }
  };
  return (
    <div>
      <button onClick={handleUser}>User Logged In status Switch</button>
      {user === 1 ? (
        <h1>User</h1>
      ) : (
        <Row className="py-3">
          <Col>
            <h2>Login To Continue</h2>
            <Link to={"/login"}>Login</Link>
          </Col>
        </Row>
      )}
    </div>
  );
}

export default HomeScreen;
