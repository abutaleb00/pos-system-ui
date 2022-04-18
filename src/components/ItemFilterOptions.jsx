import React from "react";
import {
    FaPlusCircle,
    FaRegEye,
    FaPen,
  } from "react-icons/fa";

export const ItemFilterOptions = () => {
  return (
    <>
      <div className="input-group">
        <select
          className="custom-select"
          style={{ width: "69%" }}
          onChange={(e) => console.log(e)}
          defaultValue={1}
        >
          <option value="1" selected>
            Walk-to Customer
          </option>
        </select>
        <div className="input-group-append">
          <button className="btn btn-outline-secondary" type="button">
            <FaPen color="#016fb3" />
          </button>
          <button className="btn btn-outline-secondary" type="button">
            <FaRegEye color="#016fb3" />
          </button>
          <button className="btn btn-outline-secondary" type="button">
            <FaPlusCircle color="#016fb3" />
          </button>
        </div>
      </div>
      <div className="form-group mt-2">
        <select
          className="form-select"
          onChange={(e) => console.log(e)}
          defaultValue={1}
        >
          <option value="1" selected>
            Warehouse 1
          </option>
        </select>
      </div>
      <div className="input-group mb-3 mt-2">
        <input
          type="text"
          className="form-control"
          style={{backgroundColor:"rgb(249 248 248)"}}
          placeholder="Scan/Search product by name/code"
          aria-label="scan"
          aria-describedby="basic-addon2"
        />
        <div className="input-group-append">
          <span className="input-group-text h-100" id="basic-addon2">
            <FaPlusCircle color="#016fb3" />
          </span>
        </div>
      </div>
    </>
  );
};
