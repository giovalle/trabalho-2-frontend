import React, { useCallback } from "react";
import { useHistory } from "react-router";
import PersonForm from "../components/PersonForm";
import { createPerson } from "./api";

const NewPerson = () => {
  const history = useHistory();

  const handleCreatePerson = useCallback(
    async (data) => {
      const result = await createPerson(data);
      console.log(result);
      history.push("/");
    },
    [history]
  );

  return <PersonForm creating onSubmit={handleCreatePerson} />;
};

export default NewPerson;
