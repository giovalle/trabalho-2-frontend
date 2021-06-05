import React, { useCallback } from "react";
import { useFormik } from "formik";
import { useHistory } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/styles";

const genders = [
  {
    value: "-",
    label: "Prefiro não dizer",
  },
  {
    value: "M",
    label: "Masculino",
  },
  {
    value: "F",
    label: "Feminino",
  },
  {
    value: "N",
    label: "Não binário",
  },
];

const useStyles = makeStyles({
  input: {
    marginTop: 24,
  },
});

// usei a biblioteca formik do react
const PersonForm = ({ data, creating, onSubmit }) => {
  const styles = useStyles();
  const history = useHistory();
  const formik = useFormik({
    initialValues: data || {
      name: "",
      age: "",
      gender: "-",
      height: "",
      weight: "",
    },
    enableReinitialize: true,
    onSubmit,
  });

  const handleBackClick = useCallback(() => {
    history.goBack();
  }, [history]);

  return (
    <>
      <Typography variant="h3">
        {creating ? "Criando pessoa" : "Editando pessoa"}
      </Typography>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id="name"
          name="name"
          label="Nome"
          placeholder="Nome"
          className={styles.input}
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          fullWidth
          id="age"
          name="age"
          label="Idade"
          type="number"
          placeholder="Idade"
          className={styles.input}
          value={formik.values.age}
          onChange={formik.handleChange}
          error={formik.touched.age && Boolean(formik.errors.age)}
          helperText={formik.touched.age && formik.errors.age}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          fullWidth
          id="gender"
          select
          label="Gênero"
          SelectProps={{
            native: true,
          }}
          className={styles.input}
          value={formik.values.gender}
          onChange={formik.handleChange}
        >
          {genders.map((g) => (
            <option key={g.value} value={g.value}>
              {g.label}
            </option>
          ))}
        </TextField>
        <TextField
          fullWidth
          id="height"
          name="height"
          label="Altura"
          type="number"
          placeholder="Altura"
          className={styles.input}
          value={formik.values.height}
          onChange={formik.handleChange}
          error={formik.touched.height && Boolean(formik.errors.height)}
          helperText={formik.touched.height && formik.errors.height}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          fullWidth
          id="weight"
          name="weight"
          label="Peso"
          type="number"
          placeholder="Peso"
          className={styles.input}
          value={formik.values.weight}
          onChange={formik.handleChange}
          error={formik.touched.weight && Boolean(formik.errors.weight)}
          helperText={formik.touched.weight && formik.errors.weight}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <Button
          color="primary"
          variant="contained"
          fullWidth
          type="submit"
          className={styles.input}
        >
          Submeter
        </Button>
        <Button variant="contained" fullWidth onClick={handleBackClick}>
          Voltar
        </Button>
      </form>
    </>
  );
};

export default PersonForm;
