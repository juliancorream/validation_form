import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Switch from "@mui/material/Switch";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

function FormSignUp({ handleSubmit }) {
  const [name, setName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [promociones, setPromociones] = useState(true);
  const [novedades, setNovedades] = useState(false);

  const [errors, setErrors] = useState({
    name: {
      error: false,
      message: "Deben ser almenos 3 Caracteres",
    },
  });

  function validarNombre(nombre) {
    if (nombre.length >= 3) {
      return { name: { error: false, message: "" } };
    } else {
      return {
        name: { error: true, message: "Deben ser almenos 3 Caracteres" },
      };
    }
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit({ name, lastname, email, promociones, novedades });
      }}
    >
      <TextField
        id="name"
        label="Nombres"
        variant="outlined"
        fullWidth
        margin="normal"
        value={name}
        onChange={(e) => setName(e.target.value)}
        error={errors.name.error}
        helperText={errors.name.error ? errors.name.message : ""}
        onBlur={(e) => {
          setErrors(validarNombre(e.target.value));
        }}
      />
      <TextField
        id="lastname"
        label="Apellidos"
        variant="outlined"
        fullWidth
        margin="normal"
        value={lastname}
        onChange={(e) => setLastName(e.target.value)}
      />
      <TextField
        id="email"
        label="Email"
        variant="outlined"
        fullWidth
        margin="normal"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <FormGroup>
        <FormControlLabel
          control={
            <Switch
              checked={promociones}
              onChange={(e) => setPromociones(e.target.checked)}
            />
          }
          label="Promociones"
        />
        <FormControlLabel
          control={
            <Switch
              checked={novedades}
              onChange={(e) => setNovedades(e.target.checked)}
            />
          }
          label="Novedades"
        />
      </FormGroup>

      <Button variant="contained" type="submit">
        Registrarse
      </Button>
    </form>
  );
}

export default FormSignUp;
