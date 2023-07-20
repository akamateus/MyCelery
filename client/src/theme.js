// color design tokens
export const colorHex = {
  mono: {
    0: "#FFFFFF",
    1: "#F6F6F6",
    2: "#F0F0F0",
    3: "#E0E0E0",
    4: "#C2C2C2",
    5: "#A3A3A3",
    6: "#858585",
    7: "#666666",
    8: "#4D4D4D",
    9: "#333333",
    10: "#1A1A1A",
    11: "#0A0A0A",
    12: "#000000",
  },
  primary: {
    0: "#FFECC",
    1: "#FFD999",
    2: "#FFBC4C",
    3: "#FFB332",
    4: "#33DDFB",
    5: "#FFA919",
    6: "#FFA000",
    7: "#CC8000",
    8: "#4C3000",
    9: "#191000",
  },
};

// ⬇️mui settings⬇️

export const themeSettings = (mode) => {
  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            // ⬇️Palette for dark mode⬇️
            primary: {
              dark: colorHex.primary[2],
              main: colorHex.primary[5],
              light: colorHex.primary[8],
            },
            neutral: {
              dark: colorHex.mono[3],
              main: colorHex.mono[4],
              mediumMain: colorHex.mono[5],
              medium: colorHex.mono[6],
              light: colorHex.mono[9],
            },
            background: {
              default: colorHex.mono[11],
              alt: colorHex.mono[10],
            },
          }
        : {
            // ⬇️Palette for light mode⬇️
            primary: {
              dark: colorHex.primary[7],
              main: colorHex.primary[5],
              light: colorHex.primary[0],
            },
            neutral: {
              dark: colorHex.mono[9],
              main: colorHex.mono[7],
              mediumMain: colorHex.mono[6],
              medium: colorHex.mono[5],
              light: colorHex.mono[2],
            },
            background: {
              default: colorHex.mono[1],
              alt: colorHex.mono[0],
            },
          }),
    },
    typography: {
      fontFamily: ["Montserrat", "sans-serif"].join(","),
      fontSize: 10,
      h1: {
        fontFamily: ["Montserrat", "sans-serif"].join(","),
        fontSize: 38,
      },
      h2: {
        fontFamily: ["Montserrat", "sans-serif"].join(","),
        fontSize: 30,
      },
      h3: {
        fontFamily: ["Montserrat", "sans-serif"].join(","),
        fontSize: 22,
      },
      h4: {
        fontFamily: ["Montserrat", "sans-serif"].join(","),
        fontSize: 18,
      },
      h5: {
        fontFamily: ["Montserrat", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Montserrat", "sans-serif"].join(","),
        fontSize: 14,
      },
    },
  };
};
