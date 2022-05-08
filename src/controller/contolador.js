import {connection} from '../database/connection.js'
import {users} from '../model/users.js'

async function getUsers() {
    let u = await users.findAll();
    u = u.map((filter) => {
        return filter.dataValues
    });

    return u
}

export const getIndex = (req, res) => {
    res.render('index.ejs');
};

export const getHome = async (req, res) => {
    const usuarios = await getUsers();

    res.render('home.ejs', {usuarios})
}

export const postLogin = async (req, res) => {
    const {usuario, senha} = req.body;
    let dados
    let logado = false;

    const usuarios = await getUsers()

    for(let user of usuarios) {
        if((user.usuario === usuario) && (user.senha === senha)){
            logado = true;
            dados = user;
            break;
        }
    }

    dados = JSON.stringify(dados);

    if(logado === false) {
        res.redirect('/');
    }else {
        res.render('enter.ejs', {dados});
    }
};

export const postCadastro = async (req, res) => {
    const {nome_cad, usuario_cad, email_cad, senha_cad} = req.body;
    let dados = {
        nome: nome_cad,
        email: email_cad,
        usuario: usuario_cad,
        senha: senha_cad
    }

    const usuarios = await getUsers();
    let existe = false;

    for(let usuario of usuarios) {
        if(usuario.usuario === dados.usuario || usuario.email === dados.email) {
            existe = true;
            res.redirect('/');
            break;
        }
    }

    if(existe === false) {
        await users.create(dados);
        dados = JSON.stringify(dados);
        res.render('enter.ejs', {dados})
    }
};

export const postEditar = async (req, res) => {
    const {usuario_e, nome_e, email_e, senha_e} = req.body;
    let dados = {
        nome: nome_e,
        email: email_e,
        usuario: usuario_e,
        senha: senha_e
    }

    const usuarios = await getUsers();
    let existe = false;

    for(let usuario of usuarios) {
        if((usuario.email === dados.email) && (usuario.usuario !== dados.usuario)){
            existe = true;
            res.redirect('/home');
            break;
        }
    }

    if(existe === false) {
        await users.update(
            {
                nome: dados.nome,
                email: dados.email,
                senha: dados.senha
            },
            {
                where: { usuario: dados.usuario}
            }
        );
        dados = JSON.stringify(dados);
        res.render('enter.ejs', {dados})
    }

    console.log(dados)
};

export const postDelete = async (req, res) => {
    const {usuario_d} = req.body;

    await users.destroy({where: {usuario: usuario_d}});
    res.redirect('/');
};