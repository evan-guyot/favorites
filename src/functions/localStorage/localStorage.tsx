import { Book, Media, Movie, Serie } from "@/models/medias";

export function getMediasFromStorage() {
  if (typeof window !== "undefined") {
    const medias = localStorage.getItem("medias");

    if (medias !== null) {
      const parsedMedias = JSON.parse(medias) as Array<Media>;

      return parsedMedias.map((item) => {
        switch (item.type) {
          case "Serie":
            return new Serie(
              item.type,
              item.id,
              item.title,
              item.url,
              item.state
            );
          case "Movie":
            return new Movie(
              item.type,
              item.id,
              item.title,
              item.url,
              item.state
            );
          case "Book":
            return new Book(
              item.type,
              item.id,
              item.title,
              item.url,
              item.state
            );
          default:
            return item;
        }
      });
    }
  }
}

export function setMediasInStorage(newMedias: Array<Media>) {
  if (typeof window !== "undefined") {
    localStorage.setItem("medias", JSON.stringify(newMedias));
  }
}
