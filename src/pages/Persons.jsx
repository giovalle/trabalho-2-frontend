import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import CircularProgress from "@material-ui/core/CircularProgress";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import { makeStyles } from "@material-ui/core/styles";
import { getPersons, deletePersonById } from "./api";

const useStyles = makeStyles({
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

const Persons = () => {
  const [state, setState] = useState({
    persons: [],
    error: false,
    loading: false,
  });

  const styles = useStyles();

  const fetchPersons = useCallback(async () => {
    setState((currentState) => ({ ...currentState, loading: true }));

    try {
      const persons = await getPersons();
      setState((currentState) => ({
        ...currentState,
        persons,
        loading: false,
      }));
    } catch (e) {
      setState((currentState) => ({
        ...currentState,
        error: true,
        loading: false,
      }));
    }
  }, []);

  useEffect(() => {
    fetchPersons();
  }, [fetchPersons]);

  const handleDeletePerson = useCallback(
    (id) => async () => {
      await deletePersonById(id);
      fetchPersons();
    },
    [fetchPersons]
  );

  const { error, loading, persons } = state;

  return (
    <>
      <div className={styles.header}>
        <Typography variant="h3">Pessoas</Typography>
        <Button
          variant="contained"
          component={Link}
          to="/pessoas/novo"
          color="primary"
          startIcon={<AddIcon />}
        >
          Incluir
        </Button>
      </div>
      {!error && !loading && (
        <TableContainer component={Paper}>
          <Table aria-label="persons">
            <TableHead>
              <TableRow>
                <TableCell>Nome</TableCell>
                <TableCell align="right">Idade</TableCell>
                <TableCell>Gênero</TableCell>
                <TableCell align="right">Altura (cm)</TableCell>
                <TableCell align="right">Peso (kg)</TableCell>
                <TableCell align="right"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {persons.map((p) => (
                <TableRow key={p._id}>
                  <TableCell>{p.name}</TableCell>
                  <TableCell align="right">{p.age}</TableCell>
                  <TableCell>{p.gender}</TableCell>
                  <TableCell align="right">{p.height}</TableCell>
                  <TableCell align="right">{p.weight}</TableCell>
                  <TableCell align="right">
                    <IconButton
                      aria-label="edit"
                      color="secondary"
                      component={Link}
                      to={`/pessoas/${p._id}`}
                    >
                      <EditIcon />
                    </IconButton>
                    <IconButton
                      aria-label="delete"
                      color="secondary"
                      onClick={handleDeletePerson(p._id)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
      {error && !loading && <h1>Erro, amigão.</h1>}
      {loading && <CircularProgress />}
    </>
  );
};

export default Persons;
