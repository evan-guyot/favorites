import type { NextPage } from "next";
import { Typography } from "@mui/material";
import Layout from "@/components/global/layout";

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
