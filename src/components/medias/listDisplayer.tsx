import { Book, Media, Movie, Serie, mockedData } from "@/models/medias";
import {
  Button,
  Chip,
  IconButton,
  Link,
  Paper,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tabs,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import {
  getMediasFromStorage,
  setMediasInStorage,
} from "@/functions/localStorage/localStorage";

const MediaListDisplayer = () => {
  const originalList: Media[] = getMediasFromStorage()
    ? getMediasFromStorage()
    : [];
  const [mediaList, setMediaList] = useState<Array<Media>>(originalList);
  const [filter, setFilter] = useState("all");

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

  const dataSaver = () => {
    setMediasInStorage(mockedData);
  };

  return (
    <>
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
                <IconButton color="primary">
                  <AddIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {mediaList.map((media) => (
              <TableRow
                key={media.id}
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
                  <IconButton aria-label="delete" color="error">
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Button onClick={() => dataSaver()}>Generate fake data</Button>
    </>
  );
};

export default MediaListDisplayer;
