import React from "react";



import { useSelector, useDispatch } from "react-redux";
import { updateName,updateAge,updateStatus } from "../reducers/userReducer";

const Data = () => {
  const { name, age, status } = useSelector((state) => {
    return state;
  });

  const dispatch = useDispatch();
  const changeAge = (age) => {
    dispatch(updateAge(age));
  };
  const changeName = (name) => {


    dispatch(updateName(name))

  };
  const changeStatus = (status) => {
    dispatch( updateStatus(status));
  };

  return (
    <div>
      <h1>i am {name} </h1>
      <h2>my age is {age}</h2>
      <h3> i m a {status}</h3>

      <div>
        <button onClick={() => changeAge("40")}>update age </button>
        <button onClick={() => changeName("ghanta")}>update name </button>
        <button onClick={() => changeStatus("chutiya")}>update status </button>
      </div>
    </div>
  );
};

export default Data;
