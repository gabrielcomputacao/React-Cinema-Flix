import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Box sx={{ display: "flex", gap: "40px" }}>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            Cinema Fácil
          </Typography>
          <Link
            to="/details"
            style={{
              textDecoration: "none",
              color: "#fff",
              borderRadius: "25px",
              backgroundColor: "#252525",
              padding: "0px 15px ",
              cursor: "pointer",
            }}
          >
            <Typography variant="h5">Gestão Flix</Typography>
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
