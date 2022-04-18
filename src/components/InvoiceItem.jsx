import React from "react";
import { FaTrashAlt, FaTimes } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ActionButton } from "./ActionButton";
import { ItemFilterOptions } from "./ItemFilterOptions";

export const InvoiceItem = ({ products, removeFromCart }) => {
  let total = 0;
  let subTotal = 0;
  let qty = null;
    products?.forEach((p) => {
      total = parseFloat(total) + parseFloat(p.price) * parseFloat(p.qty);
      subTotal = p.price.toFixed(2) * p.qty.toFixed(2);
      qty = p.qty;
    });
  const submitOrder = () =>
    toast("The Order is Saved Successfully", {
      autoClose: 2000,
      hideProgressBar: false,
    });
  const confirmOrder = () =>
    toast("Order Confirmed Successfully", {
      autoClose: 2000,
      hideProgressBar: false,
    });
  return (
    <div className="invoices">
      <ItemFilterOptions />
      <div style={{ minHeight: "250px", height: "270px", overflowY: "auto" }}>
        <table className="table table-bordered table-striped">
          <thead className="thead-dark">
            <tr className="item-table-head">
              <th>Product</th>
              <th>Price</th>
              <th>Qty</th>
              <th>Subtotal</th>
              <th style={{ textAlign: "center" }}>
                <FaTrashAlt />
              </th>
            </tr>
          </thead>
          <tbody>
            {products?.length >= 1
              ? products.map((p, i) => (
                  <tr key={p.id} style={{ fontSize: "14px" }}>
                    <th>{"IT" + (i + 1) + "-" + p.name}</th>
                    <td className="text-end">{p.price.toFixed(2)}</td>
                    <td>
                      <input
                        type="text"
                        value={p.qty}
                        onChange={(e) => console.log(e)}
                        style={{ width: "30px", textAlign: "center" }}
                      />
                    </td>
                    <td className="text-end">{(p.price * p.qty).toFixed(2)}</td>
                    <td className="text-center">
                      <span
                        style={{ cursor: "pointer" }}
                        onClick={() => removeFromCart(p)}
                      >
                        <FaTimes />
                      </span>
                    </td>
                  </tr>
                ))
              : ""}
          </tbody>
        </table>
      </div>
      <table className="table">
        <tbody>
          <tr style={{ borderTop: "1px solid lightgrey" }}>
            <td scope="row">Items</td>
            <td className="text-end fw-bold">{products?.length}</td>
            <td>Total</td>
            <td className="text-end fw-bold">
              <span className="text-end fw-bold">{total.toFixed(2)}</span>
            </td>
          </tr>
          <tr>
            <td scope="row">Order Tax</td>
            <td className="text-end fw-bold">0.00</td>
            <td>Discount</td>
            <td className="text-end fw-bold">(0.00)0.00</td>
          </tr>
          <tr>
            <th
              style={{
                background: "#343434",
                color: "#fff",
                fontWeight: "bold",
              }}
              colSpan="2"
            >
              Total payable
            </th>
            <td
              style={{
                background: "#343434",
                color: "#fff",
                textAlign: "right",
                fontWeight: "bold",
              }}
              colSpan="2"
            >
              {total.toFixed(2)}
            </td>
          </tr>
        </tbody>
      </table>
      {/* <CartButton /> */}
      <ActionButton billData={products} submit={submitOrder} confirmOrder={confirmOrder} />
      <ToastContainer />
    </div>
  );
};
