import "./App.css";
import Container from "@mui/material/Container";
import FormSignUp from "./components/FormSignUp";
import Typography from "@mui/material/Typography";

function App() {
  const handleSubmit = (valores) => {
    console.log("APP.JS: ", valores);
  };

  return (
    <Container component="section" maxWidth="sm">
      <Typography variant="h4" align="center" component="h1">
        Formulario de Registro
      </Typography>
      <FormSignUp handleSubmit={handleSubmit} />
    </Container>
  );
}

export default App;
