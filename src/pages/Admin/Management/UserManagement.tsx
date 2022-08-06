import React, { useMemo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  getAllUsers,
  getCurrentUser,
} from "../../../store/selectors/user.selector";
import { getUsers, getUserDetail } from "../../../store/actions/user.action";

import DefaultManagement from "./DefaultManagement";

import { UserColumns } from "./Columns";

const UserManagement = () => {
  const dispatch = useDispatch();

  const userFetchData = useSelector(getAllUsers);
  const currentUser = useSelector(getCurrentUser);

  useEffect(() => {
    dispatch(getUserDetail());
    dispatch(getUsers());
    console.log("currentUser", currentUser);
  }, []);

  const userColumns = useMemo(() => UserColumns, []);
  const userData = useMemo(() => userFetchData, [userFetchData]);
  return (
    <DefaultManagement
      title="User Management"
      filename="Users.csv"
      columnProps={userColumns}
      dataProps={userData}
    />
  );
};

export default UserManagement;
