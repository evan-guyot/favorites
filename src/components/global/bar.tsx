import { MuiChartsBarData } from "@/models/muiComplements";
import { BarChart } from "@mui/x-charts";

const Bar = (props: { labels: string[]; series?: MuiChartsBarData[] }) => {
  const { labels, series } = props;

  console.log(series);

  return (
    series && (
      <BarChart
        xAxis={[
          {
            scaleType: "band",
            data: labels,
          },
        ]}
        yAxis={[
          {
            tickMinStep: 1,
            tickMaxStep: 5,
          },
        ]}
        series={series}
        width={600}
        height={350}
      />
    )
  );
};

export default Bar;
