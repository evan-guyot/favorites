import { MuiColorChip } from "./muiComplements";

class Media {
  type: string;
  id: number;
  title: string;
  url: string;
  state: MediaState;
  rating: number;

  constructor(
    type: string,
    id: number,
    title: string,
    url: string,
    state: MediaState,
    rating: number | undefined
  ) {
    this.type = type;
    this.id = id;
    this.title = title;
    this.url = url;
    this.state = state;
    this.rating = state.name !== "Not Started" ? rating : undefined;
  }
}
class Serie extends Media {
  constructor(
    type: string,
    id: number,
    title: string,
    url: string,
    state: MediaState,
    rating: number | undefined
  ) {
    super(type, id, title, url, state, rating);
  }
}

class Movie extends Media {
  constructor(
    type: string,
    id: number,
    title: string,
    url: string,
    state: MediaState,
    rating: number | undefined
  ) {
    super(type, id, title, url, state, rating);
  }
}

class Book extends Media {
  constructor(
    type: string,
    id: number,
    title: string,
    url: string,
    state: MediaState,
    rating: number | undefined
  ) {
    super(type, id, title, url, state, rating);
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

const mediaTypes = ["Serie", "Movie", "Book"];

const mediaStates = [
  new MediaState("Not Started", "default"),
  new MediaState("In Progress", "info"),
  new MediaState("Finished", "success"),
];

const emptyMedia = new Media(mediaTypes[0], -1, "", "", mediaStates[0], 2);

const getMediaStateByName = (name: string) => {
  return mediaStates.find((state) => state.name === name);
};

export { mediaStates, mediaTypes, emptyMedia, getMediaStateByName };
export { Media, Serie, Movie, Book, MediaState };
