import express from "express";
import {getIndex, getHome, postLogin, postCadastro, postEditar, postDelete} from "../controller/contolador.js";

export const router = express.Router();

router.get("/", getIndex);
router.get("/home", getHome);

router.post('/login', postLogin);
router.post('/cadastro', postCadastro);
router.post('/editar', postEditar);
router.post('/delete', postDelete);