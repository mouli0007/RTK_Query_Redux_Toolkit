import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { fetchUsers, addUser } from "../store/indexStore";
import Skeleton from "./Skeleton";
import Button from "./Button";
import { useThunk } from "../hooks/use-thunk";
import UsersListItem from "./UsersListItem";

const UsersList = () => {
  //
  const [doFetchUsers, isLoadingUsers, loadingUsersError] =
    useThunk(fetchUsers);

  const [doCreateUser, isCreatingUser, creatingError] = useThunk(addUser);

  const { data } = useSelector((store) => store.users);

  //
  useEffect(() => {
    doFetchUsers();
  }, [doFetchUsers]);

  // Handling add User
  const handleUserAdd = () => {
    doCreateUser();
  };

  let content;

  if (isLoadingUsers) {
    content = <Skeleton times={6} className="h-10 w-full" />;
  } else if (loadingUsersError) {
    content = <div>Error Fetching Data...</div>;
  }

  content = data.map((user) => {
    return <UsersListItem key={user.id} user={user} />;
  });

  return (
    <div>
      <div className="flex flex-row justify-between m-3 items-center ">
        <h1 className="m-2 text-xl">Users</h1>

        <Button loading={isCreatingUser} onClick={handleUserAdd}>
          +AddUser
        </Button>
        {creatingError && "Error Creating User"}
      </div>
      {content}
    </div>
  );
};

export default UsersList;
