import type { NextPage } from "next";
import { Typography } from "@mui/material";
import Layout from "@/pages/_layout";

const Media: NextPage = () => {
  return (
    <Layout title={"Favorites"}>
      <Typography variant="h2" textAlign="center">
        Medias
      </Typography>
    </Layout>
  );
};

export default Media;
