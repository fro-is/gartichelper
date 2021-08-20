import React from "react";
import Select from "react-select";

import Router from "next/router";

const categories = [
  { value: "adjetivos", label: "Adjetivos" },
  { value: "alimentos", label: "Alimentos" },
  { value: "animais", label: "Animais" },
  { value: "desenhos", label: "Desenhos" },
  { value: "geral", label: "Geral" },
  { value: "profissões", label: "Profissões" },
  { value: "objetos", label: "Objetos" },
  { value: "filmes", label: "Filmes" },
  { value: "verbos", label: "Verbos" },
];

const selectStyles = {
  control: (styles: {}) => ({
    ...styles,
    margin: "26px 0px 13px 0px",
    width: 270,
    height: 50,
    fontSize: 24,
    borderRadius: 10,
    border: "none",
    boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.25)",
    transition: "all 0.2s",
    ":hover": {
      background: "#ffbf00",
    },
  }),
  option: (styles: {}) => ({
    ...styles,
    fontSize: 24,
    color: "#007af8",
    transition: "all 0.1s",
    ":hover": {
      background: "#ffbf00",
      color: "#fff",
    },
  }),
  singleValue: (styles: {}) => ({
    ...styles,
    color: "#007af8",
    fontWeight: 700,
    transition: "all 0.2s",
    ":hover": {
      color: "#fff",
    },
  }),
};

// eslint-disable-next-line react/prop-types
const CategorySelect: React.FC<{ category: string }> = ({ category }) => {
  return (
    <Select
      noOptionsMessage={() => "Não temos esse tema ):"}
      options={categories}
      styles={selectStyles}
      defaultValue={{
        label: category.charAt(0).toUpperCase() + category.slice(1),
        value: category,
      }}
      onChange={value => value?.value && Router.push(value.value.toLowerCase())}
    />
  );
};

export default CategorySelect;
