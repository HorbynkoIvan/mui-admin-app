import { Box, BoxProps } from "@mui/material";

type Props = BoxProps & {
  src: string;
};

export const Logo = (props: Props): JSX.Element => (
  <Box component="img" alt="school logo" sx={{ maxWidth: 100 }} {...props} />
);
