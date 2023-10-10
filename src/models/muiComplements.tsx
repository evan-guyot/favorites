type MuiColorChip =
  | "default"
  | "primary"
  | "secondary"
  | "error"
  | "info"
  | "success"
  | "warning";

interface MuiChartsBarData {
  data: number[];
  stack?: string;
  label: string;
}

export type { MuiColorChip, MuiChartsBarData };
