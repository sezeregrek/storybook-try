import { create } from "@storybook/theming";
import { addons } from "@storybook/addons";

addons.setConfig({
  theme: create({
    base: "light",
    brandTitle: "Picus Security",
    brandUrl: "https://picussecurity.com",
    image: "https://www.picussecurity.com/assets/picuslogo.svg",
    colorPrimary: "#00395C",
    colorSecondary: "#D60059"
  }),
  name: "Picus Security",
  enableShortcuts: false,
  panelPosition: "bottom"
});
