import React from "react";
import Spinner from "./Components/Spinner";
import { makeStyles } from "@material-ui/core/styles";
const Container = React.lazy(() => import("./Containers/Container"));
const useStyles = makeStyles({
  root: {
    width: "100%",
    textAlign: "center",
  },
});
function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <React.Suspense fallback={<Spinner size={40} />}>
        <Container />
      </React.Suspense>
    </div>
  );
}

export default App;
