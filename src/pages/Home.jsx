import { Box, Grid } from "@mui/material";
import { Container } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import PokemonCard from '../components/PokemonCards';
import { useNavigate } from "react-router-dom";

function Home({ setPokemonData }) {
    const [pokemons, setPokemons] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getPokemons()
    }, []);

    const getPokemons = () => {

        const endpoints = [];
        for (var i = 1; i < 151; i++) {
            endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
        }

        axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then((res) => setPokemons(res));
    };

    const pokemonFilter = (name) => {
        const filteredPokemons = [];
        if (name === "") {
            getPokemons();
        }
        for (var i in pokemons) {
            if (pokemons[i].data.name.includes(name)) {
                filteredPokemons.push(pokemons[i]);
            }
        }
        setPokemons(filteredPokemons);
    };

    const pokemonPickHandler = (pokemonData) => {
        setPokemonData(pokemonData);
        navigate("/profile");
    };

    return (
        <div>
            <NavBar pokemonFilter={pokemonFilter} />
            <Container maxWidth="xg">
                <Grid container spacing={2}>
                    {pokemons.map((pokemon, key) =>
                        <Grid item xs={12} sm={6} md={4} lg={2} key={key}>
                            <Box onClick={() => pokemonPickHandler(pokemon.data)}>
                                <PokemonCard name={pokemon.data.name} image={pokemon.data.sprites.front_default} types={pokemon.data.types} />
                            </Box>
                        </Grid>
                    )}
                </Grid>
            </Container>
        </div>
    );

};

export default Home;