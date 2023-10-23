Se você conhece o docker e tem o docker instalado em sua máquina e deseja apenas executar o projeto sem problemas, faça:

compilação docker-compose
docker-compose up
Ele executará o mongodb na porta 27017 (apenas para fins de teste).
Ele executará o servidor na porta 3600.


## comandos

- POST no endpoint /users(crie um novo usuário)
- GETno endpoint /users(liste todos os usuários)
- GETno endpoint /users/:userId(obtenha um usuário específico)
- PATCH no endpoint /users/:userId(atualizar os dados de um usuário específico)
- DELETE no endpoint /users/:userId(remover um usuário específico)

## Diretorios

- `/common` - (Lidar com todos os serviços compartilhados e informações compartilhadas
entre módulos de usuários.)
- `/users` - (Tudo sobre usuários)
- `/auth` - (lidando com geração de JWT e o fluxo de logi
)

