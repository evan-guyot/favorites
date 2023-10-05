import type { NextPage } from "next";
import { Typography } from "@mui/material";
import Layout from "@/components/global/layout";
import MediaListDisplayer from "@/components/medias/listDisplayer";
import { useEffect, useState } from "react";

const Media: NextPage = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <Layout title={"Favorites"}>
      <Typography variant="h2" textAlign="center">
        Medias
      </Typography>
      {isClient && <MediaListDisplayer />}
    </Layout>
  );
};

export default Media;
