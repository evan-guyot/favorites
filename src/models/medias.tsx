import { ChipPropsColorOverrides } from "@mui/material";
import { MuiColorChip } from "./muiComplements";

class Media {
  id: number;
  title: string;
  url: string;
  state: MediaState;

  constructor(id: number, title: string, url: string, state: MediaState) {
    this.id = id;
    this.title = title;
    this.url = url;
    this.state = state;
  }
}

class Serie extends Media {
  constructor(id: number, title: string, url: string, state: MediaState) {
    super(id, title, url, state);
  }
}

class Movie extends Media {
  constructor(id: number, title: string, url: string, state: MediaState) {
    super(id, title, url, state);
  }
}

class Book extends Media {
  constructor(id: number, title: string, url: string, state: MediaState) {
    super(id, title, url, state);
  }
}

class MediaState {
  name: string;
  color: MuiColorChip;

  constructor(name: string, color: MuiColorChip) {
    this.name = name;
    this.color = color;
  }
}

export const mediaStates = [
  new MediaState("Started", "default"),
  new MediaState("In Progress", "info"),
  new MediaState("Finished", "success"),
];

export const mockedData = [
  new Serie(0, "Dark", "https://netflix.com", mediaStates[0]),
  new Book(1, "The Boxer", "https://webtoons.com/the-boxer", mediaStates[1]),
  new Book(
    2,
    "Le lecteur omniscient",
    "https://webtoons.com/omniscient-reader",
    mediaStates[2]
  ),
];

export { Media, Serie, Movie, Book, MediaState };
