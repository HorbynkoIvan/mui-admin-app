const FONT_PRIMARY = "Mulish, sans-serif";

export const typography = {
  fontFamily: FONT_PRIMARY,
  fontWeightRegular: 400,
  fontWeightSemiBold: 600,
  fontWeightBold: 700,
  fontWeightExtraBold: 800,
  h1: {
    fontWeight: 800,
    lineHeight: 64 / 48,
    fontSize: 48,
  },
  h2: {
    fontWeight: 700,
    lineHeight: 44 / 36,
    fontSize: 36,
  },
  h3: {},
  h4: {},
  h5: {},
  h6: {
    fontWeight: 600,
    lineHeight: 30 / 24,
    fontSize: 30,
  },
  subtitle1: {},
  subtitle2: {},
  body1: {},
  body2: {},
  caption: {},
  overline: {},
  button: { fontWeight: 600, lineHeight: 16 / 14, fontSize: 14 },
  test: {
    color: "red",
    fontWeight: 700,
    lineHeight: 24 / 14,
    fontSize: 14,
  },
};

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    test: true;
  }
}
