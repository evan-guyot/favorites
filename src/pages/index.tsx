import type { NextPage } from "next";
import { Typography, Link, Container, Divider, Chip } from "@mui/material";
import Layout from "@/components/global/layout";
import TvIcon from "@mui/icons-material/Tv";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
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
        <Divider sx={{ marginTop: "2.5em" }}>
          <Chip
            icon={<MenuBookIcon fontSize="small" />}
            sx={{ paddingLeft: ".5em" }}
            label="INTRODUCTION"
          />
        </Divider>
        <Typography variant="body1">
          This web application has been made by{" "}
          <Link href="https://github.com/evan-guyot">Evan Guyot</Link>
        </Typography>
        <Typography variant="body1">
          Everything&#39;s saved on your device, in the local storage.
          You&#39;re the master of your data !
        </Typography>
        <Divider sx={{ marginTop: "2.5em" }}>
          <Chip
            icon={<TvIcon fontSize="small" />}
            sx={{ paddingLeft: ".5em" }}
            label="MEDIAS"
          />
        </Divider>
        <Typography variant="body1">
          Save your favorite Series, Movies, Book with a status and a rate.
        </Typography>
        <Divider sx={{ marginTop: "2.5em" }}>
          <Chip
            icon={<LeaderboardIcon fontSize="small" />}
            sx={{ paddingLeft: ".5em" }}
            label="STATISTICS"
          />
        </Divider>
        <Typography variant="body1">
          Check the statistics of your data
        </Typography>
      </Container>
    </Layout>
  );
};

export default Home;
