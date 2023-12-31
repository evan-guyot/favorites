import type { NextPage } from "next";
import { Box, Divider, Grid, Typography } from "@mui/material";
import Layout from "@/components/global/layout";
import { Pie } from "@/components/global/pie";
import { getMediasFromStorage } from "@/functions/localStorage/localStorage";
import { useEffect, useState } from "react";
import Bar from "@/components/global/bar";

interface PieData {
  value: number;
  label: string;
}

const Statistics: NextPage = () => {
  const [isClient, setIsClient] = useState(false);

  const dataByType: PieData[] = [];
  const medias = getMediasFromStorage();

  useEffect(() => {
    setIsClient(true);
  }, []);

  var types: string[] = [];

  medias.forEach((media) => {
    !types.includes(media.type) && types.push(media.type);
  });

  types.forEach((type) => {
    dataByType.push({
      label: type,
      value: medias.filter((media) => media.type == type).length,
    });
  });

  var types: string[] = [];

  medias.forEach((media) => {
    !types.includes(media.type) && types.push(media.type);
  });

  const typeData = types.map((type) => ({
    /*
     * makes the same as the following code but in a shorter way, where x is [0-4]
     * data:
     * medias.filter((media) => media.rating == x + 1 && media.type == type).length,
     */
    data: Array.from(
      { length: 5 },
      (_, i) =>
        medias.filter((media) => media.rating == i + 1 && media.type == type)
          .length
    ),
    label: type,
  }));

  return (
    <Layout title={"Favorites"}>
      <Typography variant="h2" textAlign="center">
        Statistics
      </Typography>

      <Divider sx={{ margin: "3em" }} />

      {isClient && (
        <Grid container>
          <Box sx={{ margin: "auto", width: "fit-content" }}>
            <Typography variant="h4">Number of Medias by Type</Typography>
            <Pie data={dataByType} showLegend={true} />
          </Box>
          <Box sx={{ margin: "auto", width: "fit-content" }}>
            <Typography variant="h4">
              Number of Media&#39;s Type by Rate
            </Typography>
            <Bar
              series={typeData}
              labels={["⭐", "⭐⭐", "⭐⭐⭐", "⭐⭐⭐⭐", "⭐⭐⭐⭐⭐"]}
            />
          </Box>
        </Grid>
      )}
    </Layout>
  );
};

export default Statistics;
