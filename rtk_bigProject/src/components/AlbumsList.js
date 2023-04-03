import React from "react";
import { useFetchAlbumsQuery, useAddAlbumMutation } from "../store/indexStore";
import Skeleton from "./Skeleton";
import Button from "./Button";
import AlbumsListItem from "./AlbumsListItem";

const AlbumsList = ({ user }) => {
  // We dont want to put this hook on useEffect or onClick
  const { data, error, isFetching } = useFetchAlbumsQuery(user);
  const [addAlbum, results] = useAddAlbumMutation();

  console.log(user.id);
  let content;

  if (isFetching) {
    content = <Skeleton className="h-10 w-full" times={3} />;
  } else if (error) {
    content = <div>Error Loading Albums</div>;
  } else {
    content = data.map((album) => {
      return <AlbumsListItem key={album.id} album={album} user={user} />;
    });
  }
  const handleAddAlbum = () => {
    addAlbum(user);
  };
  return (
    <>
      <div className="m-2 flex flex-row items-center justify-between">
        <h3 className="text-lg font-bold">Albums of {user.name}</h3>
        <Button
          loading={results.isLoading}
          onClick={handleAddAlbum}
          className=" mb-2 bg-green-500 text-black rounded "
        >
          +Add Album
        </Button>
      </div>
      <div>{content}</div>
    </>
  );
};

export default AlbumsList;
