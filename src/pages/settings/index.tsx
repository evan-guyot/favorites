import type { NextPage } from "next";
import { Typography } from "@mui/material";
import Layout from "@/pages/_layout";

const Settings: NextPage = () => {
  return (
    <Layout title={"Favorites"}>
      <Typography variant="h2" textAlign="center">
        Settings
      </Typography>
    </Layout>
  );
};

export default Settings;
