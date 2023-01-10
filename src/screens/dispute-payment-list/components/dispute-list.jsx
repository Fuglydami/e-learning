import React from "react";
import DataTable from "react-data-table-component";
import { BiTimeFive } from "react-icons/bi";
import { customStyles } from "../../../misc/data";

const DisputeList = () => {
  const data = [
    {
      id: 1,
      level: "100",
      academicSession: "2019/2020",
      transactionNumber: "34644589752103",
      paymentDescription: "Faculty Charges",
    },
    {
      id: 2,
      level: "100",
      academicSession: "2019/2020",
      transactionNumber: "253244239752131",
      paymentDescription: "Social Charges",
    },
  ];
  const columns = [
    {
      name: "S/N",
      selector: (row) => row.id,
      sortable: true,
      exports: true,
      grow: -2,
    },
    {
      name: "Level",
      selector: (row) => row.level,
      sortable: true,
      exports: true,
    },
    {
      name: "Academic Session",
      selector: (row) => row.academicSession,
      sortable: true,

      exports: true,
    },
    {
      name: "Transaction Number",
      selector: (row) => row.transactionNumber,
      sortable: true,
      grow: 1,
      exports: true,
    },
    {
      name: "Payment Description",
      selector: (row) => row.paymentDescription,
      sortable: true,
      grow: 1,
      exports: true,
    },

    {
      name: "Action",
      cell: (row) => (
        <div className="text-base_range items-center cursor-pointer flex gap-1">
          <BiTimeFive />
          <p>Requery</p>
        </div>
      ),
      center: true,
    },
  ];
  return (
    <>
      {" "}
      <div className="font-[700] px-7 mt-6 py-5 mb-8 bg-base_range white">
        List of Dispute Receipts
      </div>
      <div className="mb-10">
        <DataTable
          responsive={true}
          columns={columns}
          data={data}
          customStyles={customStyles}
          // pagination
          highlightOnHover
          // progressPending={loading}
        />
      </div>
    </>
  );
};

export default DisputeList;
