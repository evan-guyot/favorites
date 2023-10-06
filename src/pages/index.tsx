import type { NextPage } from "next";
import { Typography, Link, Container, Divider, Chip } from "@mui/material";
import Layout from "@/components/global/layout";
import TvIcon from "@mui/icons-material/Tv";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import MenuBookIcon from "@mui/icons-material/MenuBook";

const Home: NextPage = () => {
  const style = {
    display: "flex",
    flexDirection: "column",
    width: "fit-content",
    gap: "1em",
    marginTop: "2em",
  };

  return (
    <Layout title={"Favorites"}>
      <Typography variant="h2" textAlign="center">
        Welcome to <strong>favorites</strong>
      </Typography>
      <Container sx={style} className="home-paragraphs-container">
        <Divider>
          <Chip icon={<MenuBookIcon fontSize="small" />} label="INTRODUCTION" />
        </Divider>
        <Typography variant="body1">
          This web application has been made by{" "}
          <Link href="https://github.com/evan-guyot">Evan Guyot</Link>
        </Typography>
        <Typography variant="body1">
          Everything's saved on your device, in the local storage. You're the
          master of your data !
        </Typography>
        <Divider>
          <Chip icon={<TvIcon fontSize="small" />} label="MEDIAS" />
        </Divider>
        <Typography variant="body1">
          Save your favorite Series, Movies, Book with a status and a rate.
        </Typography>
        <Divider>
          <Chip
            icon={<SettingsApplicationsIcon fontSize="small" />}
            label="SETTINGS"
          />
        </Divider>
        <Typography variant="body1">
          Custom YOUR web app, its default color, the font and others soon !
        </Typography>
      </Container>
    </Layout>
  );
};

export default Home;
