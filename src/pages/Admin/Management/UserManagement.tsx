import React, { useMemo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useTranslation } from "react-i18next";
import { getAllUsersSelector } from "../../../store/selectors/user.selector";
import { getUsers } from "../../../store/actions/user.action";

import DefaultManagement from "./DefaultManagement";

import { UserColumns } from "./Columns";

const UserManagement = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const userFetchData = useSelector(getAllUsersSelector);

  useEffect(() => {
    dispatch(getUsers());
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
      title={t("UserManagement")}
      filename="Users.csv"
      headers={headers}
      columnProps={userColumns}
      dataProps={userData}
    />
  );
};

export default UserManagement;
