import React from "react";
import ThemeOn from "../../assets/images/olho.svg";
import ThemeOff from "../../assets/images/olho.svg";
import { Icone } from "../UI";

const claro = <Icone src={ThemeOn} alt="Tema Claro" />;
const escuro = <Icone src={ThemeOff} alt="Tema Escruro" />;

export default ({ tema }) => (tema ? escuro : claro);
