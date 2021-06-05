import { BrowserRouter } from "react-router-dom";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/styles";
import Routes from "./Routes";

const useStyles = makeStyles({
  container: {
    marginTop: "32px",
    marginBottom: "16px",
  },
});

const App = () => {
  const styles = useStyles();

  return (
    <Container maxWidth="md" className={styles.container}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes />
      </BrowserRouter>
    </Container>
  );
};

export default App;
