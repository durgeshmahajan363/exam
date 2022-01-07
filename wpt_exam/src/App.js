import axios from "axios";
import { useEffect, useState } from "react";

export default function App() {
  return (
    <div>
      <h2 className="bg-dark text-light p-1 mb-0">My ChatApp</h2>
      <h6 className="bg-dark text-light p-2 mb-3">
        By Durgesh Mahajan, id:210940520025
      </h6>
      <div className="row">
        <div className="col-10">
          <input
            className="form-control form-control-lg m-2"
            type="text"
            name=""
            id=""
            value={msg}
            onChange={handleMsgChange}
            placeholder="chat here..."
          />
        </div>
        <div className="col-2">
          <input
            className="btn btn-primary w-75 p-2 m-2"
            type="button"
            name=""
            id=""
            value="send"
            onClick={addUser}
          />
        </div>
        const url = `http://localhost:4000/add-user`;
        const data ={
          msg:msg,
        };
        await axios.post(url,data);
        const newList = [data, ...list];
        setList(newList);
        setMsg("");
      </div>
    </div>
  );
}
