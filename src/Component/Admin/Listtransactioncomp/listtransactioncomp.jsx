import React from "react";
import { Table } from "react-bootstrap";
import icon_search from "../../../Assets/icon-images/search.png";
export default function listtransactioncomp() {
  const data_transaction = [
    {
      id: 1,
      user: "aziz",
      trip: "Pantai",
      bukti_transfer: "Bca.jpg",
      status_payment: "Pending",
      action: icon_search,
    },
    {
      id: 2,
      user: "muhammad",
      trip: "Solo",
      bukti_transfer: "MBca.jpg",
      status_payment: "Success",
      action: icon_search,
    },
    {
      id: 3,
      user: "Jono",
      trip: "Gunung Bromo",
      bukti_transfer: "MBRI.jpg",
      status_payment: "Approve",
      action: icon_search,
    },
    {
      id: 4,
      user: "Roni",
      trip: "Pantai Selatan",
      bukti_transfer: "Bca.jpg",
      status_payment: "Success",
      action: icon_search,
    },
    {
      id: 1,
      user: "Doni",
      trip: "Pantai Balekambang",
      bukti_transfer: "Bca.jpg",
      status_payment: "Pending",
      action: icon_search,
    },
    {
      id: 1,
      user: "Mona",
      trip: "Pantai Sendiki",
      bukti_transfer: "Bca.jpg",
      status_payment: "Success",
      action: icon_search,
    },
  ];
  return (
    <div>
      <div>Incomming Transaction</div>
      <Table responsive>
        <thead>
          <tr>
            <th>No</th>
            <th>User</th>
            <th>Trip</th>
            <th>Bukti Transfer</th>
            <th>Status Payment</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data_transaction.map((data_transactions) => (
            <tr>
              <td>{data_transactions.id}</td>
              <td>{data_transactions.user}</td>
              <td>{data_transactions.trip}</td>
              <td>{data_transactions.bukti_transfer}</td>
              <td>{data_transactions.status_payment}</td>
              <td>
                {" "}
                <img src={data_transactions.action} alt="" />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
