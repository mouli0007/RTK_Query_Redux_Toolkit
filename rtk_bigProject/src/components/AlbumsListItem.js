import React from "react";
import { GoTrashcan } from "react-icons/go";
import Button from "./Button";
import ExpandablePannel from "./Expandable-Pannel";
import { useRemoveAlbumMutation } from "../store/indexStore";
import PhotosList from "./PhotosList";

const AlbumsListItem = ({ album, user }) => {

  // 
  const [removeAlbum, results] = useRemoveAlbumMutation();

  const handleRemoveAlbum = () => {
    removeAlbum(album);
  };

  const header = (
    <div className="flex flex-row">
      <Button
        onClick={handleRemoveAlbum}
        className="mr-2"
        loading={results.isLoading}
      >
        <GoTrashcan className="text-black font-bold" />
      </Button>
      {album.title}
    </div>
  );
  return (
    <ExpandablePannel key={album.id} header={header}>
      <PhotosList album={album} />
    </ExpandablePannel>
  );
};

export default AlbumsListItem;
