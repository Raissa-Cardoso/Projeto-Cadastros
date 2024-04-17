# Projeto Cadastros

<p>
    <img src="http://img.shields.io/static/v1?label=LICENSE&message=MIT&color=green"/>
    <img src="http://img.shields.io/static/v1?label=VERSION&message=2.0&color=blue"/>
    <img src="http://img.shields.io/static/v1?label=STATUS&message=DEPLOY&color=orange"/>
</p>

O Projeto-Cadastros é uma aplicação para gerenciar cadastros de usuários, categorias e produtos. Desenvolvido utilizando TypeScript e Express para gerenciamento das rotas, TypeORM para manipulação dos dados e JSONWebToken para autenticações.

## :building_construction: Funcionalidades

### Cadastro de Usuários

- **Validações**:
  - Não é permitido cadastrar mais de um usuário com o mesmo e-mail.
  - Não é permitido cadastrar usuário sem e-mail.

### Cadastro de Categorias

- **Validações**:
  - Não é permitido o cadastro de Categoria por usuários que não sejam administrador.
  - Não é permitido cadastrar mais de uma Categoria com o mesmo nome.
  - Não é permitido cadastrar Categoria sem nome.

### Cadastro de Produtos

- **Validações**:
  - Não é permitido cadastrar produtos sem Categoria.
  - Não é permitido cadastrar produtos sem nome.
  - Não é permitido cadastrar produtos com o mesmo nome.
  - O usuário precisa estar autenticado.
  - Não é permitido o cadastro de Produtos por usuários que não sejam administrador.

### Listagens

- Além dos cadastros, é possível listar:
  - Todos os usuários.
  - Todas as categorias.
  - Os produtos de cada categoria.


## :exclamation: Pré-requisitos

- Node.js
- npm (Node Package Manager)

## :hammer: Instalação

1. Clone o repositório: git clone https://github.com/seu-usuario/Projeto-Cadastros.git
2. Navegue até o diretório do projeto: cd Projeto-Cadastros
3. Instale as dependências: npm install

## :star: Tecnologias utilizadas

- **`HTML`**
- **`CSS`**
- **`Javascript`**
- **`Typescript`**
