import { AppBar, Box, Container, Grid, Link, Paper, Toolbar, Typography } from '@mui/material';
import axios from 'axios';
import { useState } from 'react';


export function SelectionPage({ setSelectedFilm }) {
  const [films, setFilms] = useState([]);

  axios.get("http://localhost:3000/films").then(response => setFilms(response.data));

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            Cinema Fácil
          </Typography>
        </Toolbar>
      </AppBar>

      <Container maxWidth="100vw">
        <Typography variant='h2' sx={{ margin: "4rem 0" }}>Qual filme deseja assistir?</Typography>
        <Grid container spacing={2} rowGap={2}>
          <Grid item xs={12}>
            <Box display="flex" sx={{ columnGap: "1.5em", padding: "1rem", overflowX: 'auto', whiteSpace: 'nowrap', '&::-webkit-scrollbar': { height: '12px', backgroundColor: "#252525" }, '&::-webkit-scrollbar-thumb': { backgroundColor: 'primary.main', borderRadius: "6px" } }}>
              {films.map(film =>
                <Link key={film.id} href="#" underline='none' onClick={() => setSelectedFilm(film)} data-testid="film-display">
                  <Paper elevation={4} sx={{ padding: "0.5rem", borderRadius: "0.5rem", '&:hover': { border: "1px solid", borderColor: "primary.dark" } }}>
                    <Typography variant='subtitle1'>{film.name}</Typography>
                    <img src={film.url} style={{ height: '350px', borderRadius: "10px", marginTop: "0.5rem" }} />
                  </Paper>
                </Link>
              )}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}