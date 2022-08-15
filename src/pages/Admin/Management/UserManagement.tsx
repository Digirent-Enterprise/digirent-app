import React, { useMemo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  getAllUsersSelector,
  getCurrentUserSelector,
} from "../../../store/selectors/user.selector";
import { getUsers, getUserDetail } from "../../../store/actions/user.action";

import DefaultManagement from "./DefaultManagement";

import { UserColumns } from "./Columns";

const UserManagement = () => {
  const dispatch = useDispatch();

  const userFetchData = useSelector(getAllUsersSelector);
  const currentUser = useSelector(getCurrentUserSelector);

  useEffect(() => {
    dispatch(getUserDetail());
    dispatch(getUsers());
    console.log("currentUser", currentUser);
  }, []);

  const userColumns = useMemo(() => UserColumns, []);
  const userData = useMemo(() => userFetchData, [userFetchData]);

  const headers = [
    { label: "User", key: "name" },
    { label: "Email", key: "email" },
    { label: "Phone", key: "phone" },
    { label: "Role", key: "role" },
    { label: "Location", key: "location" },
    { label: "Created Date", key: "createdDate" },
    { label: "Status", key: "status" },
  ];

  return (
    <DefaultManagement
      title="User Management"
      filename="Users.csv"
      headers={headers}
      columnProps={userColumns}
      dataProps={userData}
    />
  );
};

export default UserManagement;
