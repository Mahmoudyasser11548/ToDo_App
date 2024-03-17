import { IColor, IIcon } from "types";

export const palette = {
  // Reds
  red500: "#ef4444",
  red700: "#b91c1c",

  // oranges
  orange300: "#fdba74",
  orange600: "#ea580c",

  // green
  green500: "#22c55e",
  green600: "#16a34a",

  sky500: "#0ea5e9",

  blue600: "#2563eb",

  purple600: "#9333ea",

  fuchsia700: "#a21caf",
};
export const getColors = () => {
  const colors: string[] = Object.keys(palette).map((item) => {
    return palette[item as keyof typeof palette];
  });
  return colors;
};

const ICON_SET = {
  seed: "🌱",
  fries: "🍟",
  pizza: "🍕",
  rocket: "🚀",
  grinning: "😀",
  partying_face: "🥳",
  beach_umbrella: "🏖️",
};

export const getIcons = () => {
  const icons: string[] = Object.keys(ICON_SET).map(
    (icon) => ICON_SET[icon as keyof typeof ICON_SET]
  );
  console.log(icons);
  return icons;
};
