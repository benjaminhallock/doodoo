import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Users() {
  return (
    <div className="container">
      <h2 className="my-4">Users</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>User 1</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>User 2</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>User 3</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Users;
