
import { RouterProvider } from "react-router-dom";
import navigationRouter from "./Navigation/Navigation";

function App() {
  return (
    <>
      {/* <ThemeProvider theme={theme}> */}
        <RouterProvider router={navigationRouter} />
      {/* </ThemeProvider> */}
    </>
  );
}

export default App;
