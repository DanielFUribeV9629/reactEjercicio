import React from "react";
import axios from "axios";

const clientRegistryServ = () => {
  const baseUrl = `${process.env.BASE_URL}`;

  const postClientRegistry = () => {
    axios
      .get(baseUrl + "users/1")
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return <div></div>;
};

export default clientRegistryServ;
