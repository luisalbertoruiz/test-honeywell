import React from "react";
import { Link } from "react-router-dom";

const Nav = () => (
  <div className="navigation">
    <Link className="navigation-link" to="/">
      Honeywell test
    </Link>
    <Link className="navigation-link" to="/new">
      Add Student
    </Link>
  </div>
);

export { Nav };
