import { Book, Media, Movie, Serie } from "@/models/medias";
import {
  Chip,
  IconButton,
  Link,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import {
  getMediasFromStorage,
  removeMediaFromLocalStorage,
} from "@/functions/localStorage/localStorage";
import MediaModal from "./modal";

const MediaListDisplayer = () => {
  var originalList: Media[] = getMediasFromStorage();
  const [mediaList, setMediaList] = useState<Array<Media>>(originalList);
  const [filter, setFilter] = useState("all");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const getClassName = (media: Media) => {
    if (media instanceof Serie) return "Serie";

    if (media instanceof Movie) return "Movie";

    if (media instanceof Book) return "Book";

    return "Unknown";
  };

  const filterChange = (event: React.SyntheticEvent, newFilter: string) => {
    var newMediaList: Array<Media>;

    switch (newFilter) {
      case "series":
        newMediaList = originalList.filter((media) => media instanceof Serie);
        break;
      case "books":
        newMediaList = originalList.filter((media) => media instanceof Book);
        break;
      case "movies":
        newMediaList = originalList.filter((media) => media instanceof Movie);
        break;
      default:
        newMediaList = originalList;
    }

    setFilter(newFilter);
    setMediaList(newMediaList);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const deleteMedia = (id: number) => {
    removeMediaFromLocalStorage(id);
    reloadList();
  };

  const reloadList = () => {
    originalList = getMediasFromStorage();
    setMediaList(originalList);
  };

  return (
    <>
      <MediaModal
        open={isModalOpen}
        setOpen={setIsModalOpen}
        media={undefined}
        hasBeenSubmitted={reloadList}
      />
      <ToggleButtonGroup
        color="primary"
        value={filter}
        exclusive
        onChange={filterChange}
        aria-label="Platform"
        sx={{ margin: "auto" }}>
        <ToggleButton value="series">Series</ToggleButton>
        <ToggleButton value="books">Books</ToggleButton>
        <ToggleButton value="movies">Movies</ToggleButton>
      </ToggleButtonGroup>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Type</TableCell>
              <TableCell>Titre</TableCell>
              <TableCell>Url</TableCell>
              <TableCell>State</TableCell>
              <TableCell align="center">
                <IconButton color="primary" onClick={() => handleOpenModal()}>
                  <AddIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {mediaList.map((media, index) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                <TableCell>{getClassName(media)}</TableCell>
                <TableCell component="th" scope="row">
                  {media.title}
                </TableCell>
                <TableCell>
                  <Link href={media.url}>{media.url}</Link>
                </TableCell>
                <TableCell>
                  <Chip label={media.state.name} color={media.state.color} />
                </TableCell>
                <TableCell align="center">
                  <IconButton aria-label="edit">
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    aria-label="delete"
                    color="error"
                    onClick={() => deleteMedia(media.id)}>
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default MediaListDisplayer;
