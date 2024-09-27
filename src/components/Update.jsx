import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../store/UsersSlice";

export default function Update() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // console.log(id);
  const users = useSelector((state) => state.users);
  // console.log(users);
  const exitUser = users.filter((f) => f.id == id);
  const { name, email } = exitUser[0];
  // console.log(name);
  const [uname, setName] = useState(name);
  const [uemail, setEmail] = useState(email);

  const handleUpdate = (event) => {
    event.preventDefault();
    dispatch(
      updateUser({
        id: id,
        name: uname,
        email: uemail,
      })
    );
    navigate("/");
  };

  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
      <div className="w-50 border bg-secondary text-white p-5">
        <h3>Update User</h3>
        <form onSubmit={handleUpdate}>
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Enter Name"
              value={uname}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              className="form-control"
              placeholder="Enter Email"
              value={uemail}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button className="btn btn-info mt-3">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
}
