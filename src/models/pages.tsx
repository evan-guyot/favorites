import { FC } from "react";
import HomeIcon from "@mui/icons-material/Home";
import TvIcon from "@mui/icons-material/Tv";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";

interface Page {
  title: string;
  ref: string;
  icon: FC;
}

const userPages: Array<Page> = [
  { title: "Home", ref: "/", icon: HomeIcon },
  { title: "Medias", ref: "/media", icon: TvIcon },
];

const appPages: Array<Page> = [
  { title: "Settings", ref: "/settings", icon: SettingsApplicationsIcon },
];

export { userPages, appPages };
export type { Page };
