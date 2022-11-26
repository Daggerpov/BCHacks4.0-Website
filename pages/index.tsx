//@ts-nocheck

import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import { Button } from "@material-tailwind/react";
import Switch from "@mui/material/Switch";
import IconButton from "@material-ui/core/IconButton";
import { createTheme, ThemeProvider, useTheme } from "@material-ui/core/styles";


import CssBaseline from "@mui/material/CssBaseline";

import LightModeIcon from "@mui/icons-material/LightMode";
import NightlightIcon from "@mui/icons-material/Nightlight";
import Box from "@mui/material/Box";

import * as React from "react";

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

function Dashboard() {
    const theme = useTheme();
    const colorMode = React.useContext(ColorModeContext);
    return (
        <Box
            className={styles.container}
            sx={{
                display: "flex",
                width: "100%",
                alignItems: "center",
                justifyContent: "center",
                bgcolor: "background.default",
                color: "text.primary",
                borderRadius: 1,
                p: 3,
            }}
        >
            <div className={styles.container}>
                <Head>
                    <title>Cram Tracker</title>
                    <meta
                        name="Cram Tracker - A tool for scheduling and tracking your cramming sessions"
                        content="Providing crammers with tools and adaptive metrics to help them schedule and get through their assignments with ease."
                    />
                </Head>
                <main className={styles.main}>
                    <h1 className={styles.title}>Cram Tracker</h1>
                    <div className="flex w-max gap-4">
                        <Button color="blue">color blue</Button>
                    </div>
                    {theme.palette.mode} mode
                    <IconButton
                        sx={{ ml: 1 }}
                        onClick={colorMode.toggleColorMode}
                        color="inherit"
                    >
                        {theme.palette.mode === "dark" ? (
                            <Brightness7Icon />
                        ) : (
                            <Brightness4Icon />
                        )}
                    </IconButton>
                </main>
            </div>
        </Box>

    );
                        
}
export default function ToggleColorMode() {
    const [mode, setMode] = React.useState<"light" | "dark">("light");
    const colorMode = React.useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode) =>
                    prevMode === "light" ? "dark" : "light"
                );
            },
        }),
        []
    );

    const theme = React.useMemo(
        () =>
            createTheme({
                palette: {
                    mode,
                },
            }),
        [mode]
    );

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <Dashboard />
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}
