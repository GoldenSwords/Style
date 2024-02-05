import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { MantineThemeProvider, createTheme } from "@mantine/core";
import "./index.css";

const theme = createTheme({
  other: {
    switch: {
      "--m3-switch-size": "20px",
      "--m3-switch-padding": "2px",
      "--m3-switch-bg": "#eee",
      "--m3-switch-thumb-active": "blue",
      "--m3-switch-thumb-bg": "#ddd",
      "--m3-switch-outline": "2px solid blue",
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MantineThemeProvider theme={theme}>
      <App />
    </MantineThemeProvider>
  </React.StrictMode>
);
