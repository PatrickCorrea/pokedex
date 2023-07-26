import React, { useEffect } from "react";
import NavBar from "../components/NavBar";
import { Box, Chip, Container, Divider, Paper, Typography } from "@mui/material";
import PokemonTable from "../components/PokemonTable";
import { useNavigate } from "react-router-dom";


function Profile({ pokemonData }) {
    const { name, sprites, moves } = pokemonData || {};
    const navigate = useNavigate();

    useEffect(() => {
        if (!pokemonData) {
            navigate("/");
        }
    }, []);

    if (!pokemonData) {
        return null;
    };

    return (
        <>
            <NavBar hideSearch />
            <Container maxWidth="md">
                <Paper elevation="2" >
                    <Box display="flex" flexDirection="column" alignItems="center" p={5} >
                        <Typography variant="h4">{name}</Typography>
                        <Box display="flex" alignItems="center" width="80%" margin={2} sx={{flexDirection:{
                            xs:"column", md:"row"
                        }}}>
                            <Box component="img" src={sprites.front_default} width="50%" height="100%" />
                            <PokemonTable pokemonData={pokemonData} />
                        </Box>
                    </Box>
                    <Box width="100%" flexDirection="column" >
                        <Divider>Variações</Divider>
                        <Box display="flex" alignItems="center" justifyContent="space-evenly">
                            <Box component="img" src={sprites.front_female} width="20%" height="20%" />
                            <Box component="img" src={sprites.front_shiny} width="20%" height="20%" />
                            <Box component="img" src={sprites.front_shiny_female} width="20%" height="20%" />
                        </Box>
                        <Divider>Ataques</Divider>
                        <Box textAlign="center" marginTop="10px">
                            {moves.map((moveData, key) => <Chip key={key} sx={{ m: "8px" }} label={moveData.move.name} />)}
                        </Box>
                    </Box>
                </Paper>
            </Container>
        </>
    )
};

export default Profile;