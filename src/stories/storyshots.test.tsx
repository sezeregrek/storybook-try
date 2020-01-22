import initStoryshots from "@storybook/addon-storyshots";
import { imageSnapshot } from "@storybook/addon-storyshots-puppeteer";
const getScreenshotOptions = () => {
  return {
    //encoding: "base64", // encoding: 'base64' is a property required by puppeteer
    fullPage: false // Do not take the full page screenshot. Default is 'true' in Storyshots.,
  };
};

initStoryshots({
  test: imageSnapshot({
    storybookUrl: "http://localhost:9009/",
    getScreenshotOptions
  })
});
