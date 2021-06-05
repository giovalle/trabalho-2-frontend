const API_ROOT = "https://infinite-fortress-32011.herokuapp.com";

export const getPersons = async () => {
  const result = await fetch(`${API_ROOT}/pessoas`);
  return result.json();
};

export const createPerson = async (body) => {
  return fetch(`${API_ROOT}/pessoas`, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const getPersonById = async (id) => {
  const result = await fetch(`${API_ROOT}/pessoas/${id}`);
  return result.json();
};

export const updatePersonById = async (id, body) => {
  const result = await fetch(`${API_ROOT}/pessoas/${id}`, {
    method: "PUT",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return result.json();
};

export const deletePersonById = async (id) => {
  return fetch(`${API_ROOT}/pessoas/${id}`, { method: "DELETE" });
};
