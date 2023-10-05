import { MuiColorChip } from "./muiComplements";

class Media {
  type: string;
  id: number;
  title: string;
  url: string;
  state: MediaState;

  constructor(
    type: string,
    id: number,
    title: string,
    url: string,
    state: MediaState
  ) {
    this.type = type;
    this.id = id;
    this.title = title;
    this.url = url;
    this.state = state;
  }
}

class Serie extends Media {
  constructor(
    type: string,
    id: number,
    title: string,
    url: string,
    state: MediaState
  ) {
    super(type, id, title, url, state);
  }
}

class Movie extends Media {
  constructor(
    type: string,
    id: number,
    title: string,
    url: string,
    state: MediaState
  ) {
    super(type, id, title, url, state);
  }
}

class Book extends Media {
  constructor(
    type: string,
    id: number,
    title: string,
    url: string,
    state: MediaState
  ) {
    super(type, id, title, url, state);
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
  new Serie("Serie", 0, "Dark", "https://netflix.com", mediaStates[0]),
  new Book(
    "Book",
    1,
    "The Boxer",
    "https://webtoons.com/the-boxer",
    mediaStates[1]
  ),
  new Book(
    "Book",
    2,
    "Le lecteur omniscient",
    "https://webtoons.com/omniscient-reader",
    mediaStates[2]
  ),
];

export { Media, Serie, Movie, Book, MediaState };
