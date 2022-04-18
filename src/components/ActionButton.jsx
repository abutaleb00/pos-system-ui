import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

export const ActionButton = ({ billData, submit, confirmOrder }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const orderPreview = () => {
    setShow(true);
  };
  let total = 0;
  billData !== undefined &&
    billData.forEach((p) => {
      total = parseFloat(total) + parseFloat(p.price) * parseFloat(p.qty);
    });
  return (
    <div className="row" style={{ paddingRight: "12px", marginTop: "-16px" }}>
      <div className="col-8" style={{ paddingRight: "0px" }}>
        <div className="col-6 d-inline-block suspend action-button">
          Suspend
        </div>
        <div className="col-6 d-inline-block order action-button">Order</div>
        <div className="col-6 d-inline-block cancel action-button">Cancel</div>
        <div
          className="col-6 d-inline-block bill action-button"
          onClick={() => orderPreview(billData)}
        >
          Preview
        </div>
      </div>
      <div className="col-4 payment action-button" onClick={submit}>
        Payment
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Order Preview</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <table className="table table-bordered table-striped">
            <thead className="thead-dark">
              <tr className="item-table-head">
                <th>Product</th>
                <th>Price</th>
                <th>Qty</th>
                <th>Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {billData?.length >= 1
                ? billData.map((p, i) => (
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
                      <td className="text-end">
                        {(p.price * p.qty).toFixed(2)}
                      </td>
                    </tr>
                  ))
                : ""}
              <tr className="total">
                <th colSpan={2}>Total Payable</th>
                <td className="text-end fw-bold" colSpan={2}>
                  {total.toFixed(2)}
                </td>
              </tr>
            </tbody>
          </table>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={confirmOrder}>
            Confirm Order
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
