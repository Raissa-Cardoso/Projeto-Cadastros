# Projeto-Cadastros
 Cadastros para usuários, categorias e produtos
***

 Este projeto foi criado utilizando *Typescript* e *Express* para gerenciamento das rotas, *TypeORM* para manipulação dos dados e *JSONWebToken* para autenticações.

Foram respeitadas as seguintes **regras**:

1. **Cadastro de Usuários**

    * Não é permitido cadastrar mais de um usuário com o mesmo e-mail
    * Não é permitido cadastrar usuário sem email

2. **Cadastro de Categorias**

    * Não é permitido o cadastro de Categoria por usuários que não sejam administrador
    * Não é permitido cadastrar mais de uma Categoria com o mesmo nome
    * Não é permitido cadastrar Categoria sem nome

3. **Cadastro de Produtos**

    * Não é permitido cadastrar produtos sem Categoria
    * Não é permitido cadastrar produtos sem nome
    * Não é permitido cadastrar produtos com o mesmo nome
    * O usuário precisa estar autenticado
    * Não é permitido o cadastro de Produtos por usuários que não sejam administrador

Além dos cadastros de *usuários*, *categorias de produtos* e *produtos* , também é possível *listar todos os usuários*, *todas as categorias* e os *produtos de cada categoria*.
