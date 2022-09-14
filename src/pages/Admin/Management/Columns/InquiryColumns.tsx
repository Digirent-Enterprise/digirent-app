import { Column } from "react-table";

import {
  ResponseToInquiryAction,
  ViewDetailModalAction,
} from "../HandleActionClick";

export const InquiryColumns: Array<Column> = [
  {
    Header: "Created Date",
    accessor: "createdDate",
  },
  {
    Header: "Inquiry Type",
    accessor: "inquiryType",
  },
  {
    Header: "Inquiry ID",
    accessor: "_id",
  },
  {
    Header: "User Email",
    accessor: "email",
  },
  {
    Header: "Attached Image",
    accessor: "image",
    Cell: ({ row }: any) =>
      row.original?.image && (
        <img src={row.original?.image} width="80vw" alt="inquiry" />
      ),
  },
  {
    Header: "Description",
    accessor: "inquiryDescription",
  },

  {
    Header: "Action",
    Cell: ({ row }: any) => (
      <div className="flex flex-row">
        <ResponseToInquiryAction rowData={row} />
        <ViewDetailModalAction pageType="inquiry" rowData={row} />
      </div>
    ),
  },
];
