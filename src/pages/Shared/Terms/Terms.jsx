import React from "react";
import { Link } from "react-router-dom";

const Terms = () => {
  return (
    <div>
      <h2>Terms and Conditions</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo praesentium
        facilis commodi, eos necessitatibus fugit hic sequi quam cupiditate
        corporis error alias veniam expedita repellendus excepturi vel unde
        voluptate totam
      </p>
      <p>Go back to <Link to="/register">Register</Link></p>
    </div>
  );
};

export default Terms;
