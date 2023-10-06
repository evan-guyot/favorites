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

const mediaTypes = ["Serie", "Movie", "Book"];

const mediaStates = [
  new MediaState("Not Started", "default"),
  new MediaState("In Progress", "info"),
  new MediaState("Finished", "success"),
];

const getMediaStateByName = (name: string) => {
  return mediaStates.find((state) => state.name === name);
};

export { mediaStates, mediaTypes, getMediaStateByName };
export { Media, Serie, Movie, Book, MediaState };
