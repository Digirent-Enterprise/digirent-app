import React, { useMemo } from "react";

import DefaultManagementLayout from "../DefaultManagementLayout";

function UserManagement() {
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
        header: "Role",
      },
      {
        id: 4,
        header: "Location",
      },
      {
        id: 5,
        header: "Created Time",
      },
      {
        id: 6,
        header: "Status",
      },
      {
        id: 7,
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
}

export default UserManagement;
