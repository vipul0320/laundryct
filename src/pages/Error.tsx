import { Box, Container, Typography } from "@mui/material";
import { useRouteError } from "react-router-dom";

export default function Error() {
  const error: any = useRouteError();
  console.error(error, "--------------------Error.tsx");
  return (
    <Container
      disableGutters
      maxWidth={false}
      sx={{
        display: "flex",
        backgroundColor: "primary.light",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box>
        <Typography variant="h1">Oops!</Typography>
        <Typography variant="h3">
          Sorry, an unexpected error has occurred.
        </Typography>
        <Typography variant="body1">
          {error.statusText || error.message}
        </Typography>
      </Box>
    </Container>
  );
}
