import { Column } from "react-table";

import { ResponseToInquiryAction } from "../HandleActionClick";

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
  },
  {
    Header: "Description",
    accessor: "inquiryDescription",
  },

  {
    Header: "Action",
    Cell: ({ row }: any) => (
      <div>
        <ResponseToInquiryAction rowData={row} />
      </div>
    ),
  },
];
