import type { NextPage } from "next";
import { Typography } from "@mui/material";
import Layout from "@/components/global/layout";
import MediaListDisplayer from "@/components/medias/listDisplayer";

const Media: NextPage = () => {
  return (
    <Layout title={"Favorites"}>
      <Typography variant="h2" textAlign="center">
        Medias
      </Typography>
      <MediaListDisplayer />
    </Layout>
  );
};

export default Media;
