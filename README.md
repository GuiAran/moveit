<h1 align="center" style="padding: 50px; background: #fff;">
    <img alt="moveit" title="moveit" src="https://raw.githubusercontent.com/guiaran/moveit/master/public/logo-full.svg" />
</h1>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/GuiAran/moveit?color=%2304D361&style=for-the-badge">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/guiaran/moveit?style=for-the-badge">

  <a href="https://github.com/guiaran/moveit/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/guiaran/moveit?style=for-the-badge">
  </a>

   <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen?style=for-the-badge">
   <a href="https://github.com/guiaran/moveit/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/guiaran/moveit?style=for-the-badge">
  </a>

  <a href="#">
    <img alt="Feito por Guilherme Arantes" src="https://img.shields.io/badge/Feito%20por-Guilherme%20Arantes-%231b9?style=for-the-badge">
  </a>

</p>

<p align="center">
 <a href="#--sobre-o-projeto">Sobre</a> •
 <a href="#-%EF%B8%8F-funcionalidades">Funcionalidades</a> •
 <a href="#--como-executar">Como executar</a> •
 <a href="#--tecnologias">Tecnologias</a> •
 <a href="#--autor">Autor</a> •
 <a href="#--licença">Licença</a>
</p>

![](https://raw.githubusercontent.com/guiaran/moveit/master/public/screenshot.png)
Veja a [demonstração](https://moveit-guiaran.vercel.app/index).

---

## [](https://github.com/guiaran/moveit#--sobre-o-projeto) Sobre o projeto 💻 

Move.it é uma ferramenta desenvolvida durante a **NLW#04 - trilha de React** da [**Rocketseat**](https://rocketseat.com.br/), consiste em um timer que utiliza a [**técnica de pomodoro**](https://g.co/kgs/nRFQEo) que basicamente é uma metodologia de gerenciamento de tempo.

## [](https://github.com/guiaran/moveit#-%EF%B8%8F-funcionalidades) Funcionalidades  ⚙️ 

De início a aplicação solicita permissão ao usuário para enviar notificações que informarão o fim de cada ciclo.

Clicando no botão de **iniciar um ciclo** o contador começa a decair e ao chegar no valor de zero a notificação é exibida (caso o usuário tenha dado permissão para a aplicação) e um alerta sonóro.

Quando finalizado um ciclo a aplicação da ao usuário uma pequena atividade, cada atividade tem um valor de experiencia que é dada ao usuário caso ele complete esse desafio. O usuário pode informar a falha ou sucesso do mesmo e iniciar um novo ciclo. 

Ao completar uma tarefa a quantidade de experiencia é atribuida ao total influenciando no valor da barra de experiencia localizada no topo da pagina e caso o usuário atinja a quantidade necessária de experiencia para subir de level o sistema exibe um modal parabenizando o usuário pelo feito.

As informações de level, experiencia total e desafios concluídos são armazenados via Cookie.

---

## [](https://github.com/guiaran/moveit#--como-executar) Como executar 🚀 

### Pré-requisitos

Você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/).
Um editor ótimo para "codar" é o [VSCode](https://code.visualstudio.com/).

---
#### Rodando a aplicação 🕹️

```bash

# Clone este repositório
$ git clone git@github.com:BrunoSaibert/move.it.git

# Acesse a pasta do projeto no seu terminal/cmd
$ cd move.it

# Instale as dependências
$ npm install
# ou
$ yarn

# Execute a aplicação em modo de desenvolvimento
$ npm run dev
# ou
$ yarn dev

# A aplicação será aberta na porta:3000 - acesse http://localhost:3000

```
---

## [](https://github.com/guiaran/moveit#--tecnologias) 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

#### **Aplicação** (**[React](https://reactjs.org/)** + **[Next.js](https://nextjs.org/)** + **[TypeScript](https://www.typescriptlang.org/)**)

- **[js-cookie](https://github.com/js-cookie/js-cookie#readme)**

> Veja o arquivo [package.json](https://github.com/BrunoSaibert/move.it/blob/main/package.json)
#### **Hospedagem** (**[Vercel](https://vercel.com/)**)

---

## [](https://github.com/guiaran/moveit#--autor) Autor 🧑‍💻

<a href="#">
 <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/14330234?s=60&v=4" width="100px;" alt="Guilherme Arantes"/>
 <br />
 <sub><b>Guilherme Arantes</b></sub></a>
 <br />
[![Linkedin Badge](https://img.shields.io/badge/-LinkedIn-blue?style=for-the-badge&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/guiaran/)](https://www.linkedin.com/in/guiaran/)
[![Gmail Badge](https://img.shields.io/badge/-Gmail-c14438?style=for-the-badge&logo=Gmail&logoColor=white&link=mailto:guilhermearantes.dev@gmail.com)](mailto:guilhermearantes.dev@gmail.com)



## [](https://github.com/guiaran/moveit#--licença) Licença 📝

Este projeto esta sobe a licença MIT.

