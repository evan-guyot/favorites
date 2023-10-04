import type { NextPage } from "next";
import { Typography } from "@mui/material";
import Layout from "@/components/global/layout";

const Home: NextPage = () => {
  return (
    <Layout title={"Favorites"}>
      <Typography variant="h2" textAlign="center">
        Welcome to <strong>favorites</strong>
      </Typography>
    </Layout>
  );
};

export default Home;
