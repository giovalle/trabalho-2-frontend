import React, { useCallback, useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { getPersonById, updatePersonById } from "./api";
import PersonForm from "../components/PersonForm";

const EditPerson = () => {
  const { id } = useParams();
  const history = useHistory();
  const [data, setData] = useState(undefined);

  useEffect(() => {
    const fetchPerson = async () => {
      const _data = await getPersonById(id);
      delete _data._id;
      delete _data.__v;
      setData(_data);
    };

    fetchPerson();
  }, [id]);

  const handleSubmit = useCallback(
    async (updatedData) => {
      await updatePersonById(id, updatedData);
      history.push("/");
    },
    [history, id]
  );

  return <PersonForm key={id} data={data} onSubmit={handleSubmit} />;
};

export default EditPerson;
