import React, { useMemo } from "react";

import DefaultManagementLayout from "../DefaultManagementLayout";

const UserManagement = () => {
  const columnsHeader = useMemo(
    () => [
      {
        id: 1,
        header: "User",
      },
      {
        id: 2,
        header: "Email",
      },
      {
        id: 3,
        header: "Phone",
      },
      {
        id: 4,
        header: "Role",
      },
      {
        id: 5,
        header: "Location",
      },
      {
        id: 6,
        header: "Created Time",
      },
      {
        id: 7,
        header: "Status",
      },
      {
        id: 8,
        header: "Action",
      },
    ],
    [],
  );
  return (
    <DefaultManagementLayout
      title="User Management"
      columnsHeader={columnsHeader}
      pageType="user"
    />
  );
};

export default UserManagement;
