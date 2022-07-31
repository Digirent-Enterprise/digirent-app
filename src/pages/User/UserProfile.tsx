import React from "react";
import { Transition } from "../../components/elements";
import { UserTab } from "../../components";
import DefaultLayout from "../DefaultLayout";

const UserProfile = () => {
  return (
    <Transition>
      <DefaultLayout>
        <UserTab />
      </DefaultLayout>
    </Transition>
  );
};

export default UserProfile;
