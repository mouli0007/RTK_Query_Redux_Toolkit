import React from "react";
import { GoTrashcan } from "react-icons/go";
import Button from "./Button";
import { removeUser } from "../store/indexStore";
import { useThunk } from "../hooks/use-thunk";
import ExpandablePannel from "./Expandable-Pannel";
import AlbumsList from "./AlbumsList";

const UsersListItem = ({ user }) => {
  const [doRemoveUser, isLoading, error] = useThunk(removeUser);

  const handleClick = () => {
    doRemoveUser(user);
  };

  const header = (
    <>
      <Button className="mr-3" loading={isLoading} onClick={handleClick}>
        <GoTrashcan />
      </Button>
      {error && <div>Error on Deleteing the User</div>}
      {user.name}
    </>
  );

  return (
    <ExpandablePannel header={header}>
      <AlbumsList user={user} />
    </ExpandablePannel>
  );
};

export default UsersListItem;
