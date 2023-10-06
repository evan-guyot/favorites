import { addMediaToLocalStorage } from "@/functions/localStorage/localStorage";
import {
  Media,
  getMediaStateByName,
  mediaStates,
  mediaTypes,
} from "@/models/medias";
import {
  Box,
  Button,
  MenuItem,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";

const MediaModal = (props: {
  open: boolean;
  setOpen: (status: boolean) => void;
  media: Media | undefined;
  hasBeenSubmitted: () => void;
}) => {
  const { open, setOpen, media, hasBeenSubmitted } = props;
  const [newMedia, setNewMedia] = useState(
    media ? media : new Media(mediaTypes[0], -1, "", "", mediaStates[0])
  );
  const handleClose = () => setOpen(false);

  const submitForm = () => {
    addMediaToLocalStorage(newMedia);
    hasBeenSubmitted();
    handleClose();
  };

  const style = {
    position: "absolute" as "absolute",
    display: "flex",
    flexDirection: "column",
    gap: "1em",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description">
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          {media ? "Modification du média" : "Ajout d'un média"}
        </Typography>
        <TextField
          select
          label="Type"
          defaultValue={newMedia.type}
          helperText="Please select a type"
          variant="standard"
          onChange={(e) => {
            setNewMedia({
              ...newMedia,
              type: e.target.value,
            });
          }}>
          {mediaTypes.map((mType) => (
            <MenuItem key={mType} value={mType}>
              {mType}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          label="Title"
          variant="standard"
          value={newMedia.title}
          onChange={(e) => {
            setNewMedia({
              ...newMedia,
              title: e.target.value,
            });
          }}
        />
        <TextField
          label="Url"
          variant="standard"
          value={newMedia.url}
          onChange={(e) => {
            setNewMedia({
              ...newMedia,
              url: e.target.value,
            });
          }}
        />
        <TextField
          select
          label="Status"
          defaultValue={newMedia.state.name}
          helperText="Please select the status"
          variant="standard"
          onChange={(e) => {
            setNewMedia({
              ...newMedia,
              state: getMediaStateByName(e.target.value),
            });
          }}>
          {mediaStates.map((mState) => (
            <MenuItem key={mState.name} value={mState.name}>
              {mState.name}
            </MenuItem>
          ))}
        </TextField>
        <Button variant="contained" onClick={() => submitForm()}>
          Add
        </Button>
      </Box>
    </Modal>
  );
};

export default MediaModal;
