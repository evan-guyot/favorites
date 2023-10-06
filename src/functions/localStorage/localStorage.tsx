import { Book, Media, Movie, Serie } from "@/models/medias";

function getMediasFromStorage() {
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
              item.state,
              item.rating
            );
          case "Movie":
            return new Movie(
              item.type,
              item.id,
              item.title,
              item.url,
              item.state,
              item.rating
            );
          case "Book":
            return new Book(
              item.type,
              item.id,
              item.title,
              item.url,
              item.state,
              item.rating
            );
          default:
            return item;
        }
      });
    }
    return [];
  }
  return [];
}

function setMediasInStorage(newMedias: Array<Media>) {
  if (typeof window !== "undefined") {
    localStorage.setItem("medias", JSON.stringify(newMedias));
  }
}

function addMediaToLocalStorage(newMedia: Media) {
  const mediasFromStorage = getMediasFromStorage();
  var newMedias: Array<Media> = mediasFromStorage ? mediasFromStorage : [];

  newMedia.id =
    newMedias.length > 0 ? newMedias[newMedias.length - 1].id + 1 : 0;

  newMedias.push(newMedia);

  setMediasInStorage(newMedias);
}

function removeMediaFromLocalStorage(mediaId: number) {
  const mediasFromStorage = getMediasFromStorage();

  const mediaIndex = mediasFromStorage.findIndex(
    (media) => media.id === mediaId
  );

  mediasFromStorage.splice(mediaIndex, 1);

  setMediasInStorage(mediasFromStorage);
}

export {
  getMediasFromStorage,
  setMediasInStorage,
  addMediaToLocalStorage,
  removeMediaFromLocalStorage,
};
