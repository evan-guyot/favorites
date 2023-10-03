import { Grid, Link } from "@mui/material";

export default function Header() {
  return (
    <header>
      <Grid
        container
        sx={{ display: "flex", flexDirection: "row" }}
        spacing={1}>
        <Grid item xs={8}>
          <h1> Favorites 🔅</h1>
        </Grid>
        <Grid item xs={4} display="flex" flexDirection="row">
          <Grid item xs={6}>
            <Link href="about">About</Link>
          </Grid>
          <Grid item xs={6}>
            <Link href="about">Settings</Link>
          </Grid>
        </Grid>
      </Grid>
    </header>
  );
}
