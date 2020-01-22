import React from "react";
import { addDecorator } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
//import { MUIThemeProvider } from "@picus/storybook"
//import "./static/index.css"
//import "@picus/ui/styles/fonts.css"
//import { brandTheme } from "../brands/picus/"

//addDecorator(storyFn => <MUIThemeProvider brandTheme={brandTheme}>{storyFn()}</MUIThemeProvider>)
addDecorator(withKnobs);
