import React from "react";
import { Input } from "../../components/Forms/Inputs/Input/Input";
import { CiSearch } from "react-icons/ci";

export const Home = () => {
  return (
    <div>
      <Input
        plh="Pesquisar Produto..."
        height="6rem"
        width="55.9rem"
        variant="primary"
      >
        Produto*
      </Input>
    </div>
  );
};
