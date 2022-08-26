import React, { useMemo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getInquiries } from "../../../store/actions/inquiry.action";
import { getAllInquiriesSelector } from "../../../store/selectors/inquiry.selector";
import DefaultManagement from "./DefaultManagement";
import { InquiryColumns } from "./Columns/InquiryColumns";

const InquiryManagement = () => {
  const dispatch = useDispatch();

  const inquiryFetchData = useSelector(getAllInquiriesSelector);

  useEffect(() => {
    dispatch(getInquiries());
  }, []);

  const inquiryColumns = useMemo(() => InquiryColumns, []);
  const inquiryData = useMemo(() => inquiryFetchData, [inquiryFetchData]);
  console.log("userData", inquiryData);

  const headers = [
    { label: "Created Date", key: "createdDate" },
    { label: "Inquiry Type", key: "inquiryType" },
    { label: "Inquiry ID", key: "_id" },
    { label: "User Email", key: "email" },
    { label: "Attached Image", key: "image" },
    { label: "Description", key: "inquiryDescription" },
  ];

  return (
    <DefaultManagement
      title="Customer Inquiry Management"
      filename="Inquiry.csv"
      headers={headers}
      columnProps={inquiryColumns}
      dataProps={inquiryData}
    />
  );
};

export default InquiryManagement;
