const FONT_PRIMARY = "Mulish, sans-serif";
const FONT_WEIGHT_REGULAR = 400;
const FONT_WEIGHT_SEMI_BOLD = 600;
const FONT_WEIGHT_BOLD = 700;
const FONT_WEIGHT_EXTRA_BOLD = 800;

export const typography = {
  fontFamily: FONT_PRIMARY,
  fontWeightRegular: FONT_WEIGHT_REGULAR,
  fontWeightSemiBold: FONT_WEIGHT_SEMI_BOLD,
  fontWeightBold: FONT_WEIGHT_BOLD,
  fontWeightExtraBold: FONT_WEIGHT_EXTRA_BOLD,
  h1: {
    fontWeight: FONT_WEIGHT_REGULAR,
    lineHeight: 64 / 48,
    fontSize: 48,
  },
  h2: {
    fontWeight: FONT_WEIGHT_REGULAR,
    lineHeight: 44 / 36,
    fontSize: 36,
  },
  h3: {
    fontWeight: FONT_WEIGHT_REGULAR,
    lineHeight: 30 / 24,
    fontSize: 24,
  },
  h4: { fontWeight: FONT_WEIGHT_REGULAR, lineHeight: 1.5, fontSize: "1.25rem" },
  h5: {
    fontWeight: FONT_WEIGHT_REGULAR,
    lineHeight: 28 / 16,
    fontSize: 16,
  },
  h6: {
    fontWeight: FONT_WEIGHT_REGULAR,
    lineHeight: 20 / 16,
    fontSize: 16,
  },
  subtitle1: {
    fontWeight: FONT_WEIGHT_REGULAR,
    lineHeight: 1.75,
    fontSize: "1rem",
  },
  subtitle2: {
    fontWeight: FONT_WEIGHT_REGULAR,
    lineHeight: 1.5,
    fontSize: "0.875rem",
  },
  body1: {
    fontWeight: FONT_WEIGHT_REGULAR,
    lineHeight: 1.5,
    fontSize: "1rem",
  },
  body2: {
    fontWeight: FONT_WEIGHT_REGULAR,
    lineHeight: 1.5,
    fontSize: "0.875rem",
  },
  caption: {
    fontWeight: FONT_WEIGHT_REGULAR,
    lineHeight: 1.5,
    fontSize: "0.75rem",
  },
  overline: {
    fontWeight: FONT_WEIGHT_REGULAR,
    lineHeight: 1.5,
    fontSize: "0.625rem",
  },
  button: { fontWeight: FONT_WEIGHT_REGULAR, lineHeight: 16 / 14, fontSize: 14 },
  test: {
    color: "red",
    fontWeight: FONT_WEIGHT_BOLD,
    lineHeight: 24 / 14,
    fontSize: 14,
  },
};

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    test: true;
  }
}
