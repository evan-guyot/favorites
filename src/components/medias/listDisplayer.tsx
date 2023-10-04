import { Book, Media, Movie, Serie, mockedData } from "@/models/medias";
import {
  Chip,
  Link,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useState } from "react";

const MediaListDisplayer = () => {
  const [mediaList, setMediaList] = useState<Array<Media>>(mockedData);

  console.log(mediaList);

  console.log(mediaList[0] instanceof Serie);
  console.log(mediaList[0] instanceof Book);

  const getClassName = (media: Media) => {
    if (media instanceof Serie) return "Serie";

    if (media instanceof Movie) return "Movie";

    if (media instanceof Book) return "Book";

    return "Unknown";
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Titre</TableCell>
            <TableCell>Url</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>State</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {mediaList.map((media) => (
            <TableRow
              key={media.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
              <TableCell component="th" scope="row">
                {media.title}
              </TableCell>
              <TableCell>
                <Link href={media.url}>{media.url}</Link>
              </TableCell>
              <TableCell>{getClassName(media)}</TableCell>
              <TableCell>
                <Chip label={media.state.name} color={media.state.color} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default MediaListDisplayer;
