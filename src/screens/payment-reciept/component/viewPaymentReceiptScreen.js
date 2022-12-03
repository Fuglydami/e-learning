import React from "react";
import DataTable from "react-data-table-component";
import { MdDownload } from "react-icons/md";
import { RiPrinterLine } from "react-icons/ri";
import { Title } from "../../../misc/component-wrapper";
import { customStyles } from "../../../misc/data";
import CustomButton from "../../../shared/custom-button";

const ViewPaymentReceiptScreen = () => {
  const data = [
    {
      id: 1,
      level: "100",
      academicSession: "2019/2020",
      paymentDescription: "Faculty Charges",
    },
    {
      id: 2,
      level: "100",
      academicSession: "2019/2020",
      paymentDescription: "Social Charges",
    },
    {
      id: 3,
      level: "200",
      academicSession: "2020/2021",
      paymentDescription: "Faculty Charges",
    },
    {
      id: 4,
      level: "200",
      academicSession: "2020/2021",
      paymentDescription: "Social Charges",
    },
  ];
  const columns = [
    {
      name: "S/N",
      selector: (row) => row.id,
      sortable: true,
      exports: true,
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
      name: "Payment Description",
      selector: (row) => row.paymentDescription,
      sortable: true,
      grow: 2,
      exports: true,
    },

    {
      name: "Action",
      cell: (row) => (
        <div className="flex  md:gap-3 gap-6">
          <div className="text-base_range items-center cursor-pointer flex gap-1">
            <RiPrinterLine />
            <p className="hidden md:flex">Print</p>
          </div>
          <div className="text-base_range items-center cursor-pointer flex gap-1">
            <MdDownload />
            <p className="hidden md:flex">Download</p>
          </div>
        </div>
      ),
      center: true,
    },
  ];
  return (
    <>
      <Title show={false} title={"Payment Receipts"}>
        <CustomButton
          title={"Create Payment Dispute"}
          buttonStyle={" font-[500] text-[14px] bg-base_range white"}
        />
      </Title>

      <div className="font-[700] px-7 mt-6 py-5 bg-base_range white">
        List of Payment Receipts
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
          subHeader
          subHeaderAlign="left"
        />
      </div>
    </>
  );
};

export default ViewPaymentReceiptScreen;
