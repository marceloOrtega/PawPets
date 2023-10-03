# PawPets
## Como testar localmente
### Necessário ter instalado
- VsCode
- NodeJS 16 LTS
- XAMPP v3.3.0
- InsomniaP
### API
- Clonar este repositório
- Abrir com VsCode
- Navegar até o diretório "backend" e instale as dependências
```bash
cd backend
npm i
```
- Criar o arquivo **.env** contendo
```env
DATABASE_URL="mysql://root@localhost:3306/pawpets?schema=public&timezone=UTC"
```
- Abrir o XAMPP Control Panel e dar start em Apache e MySQL
- Executar o comando para criar a implantação/migração do Banco de Dados
```bash
prisma migrate dev --name "pet"
```
OBS: Antes da migração, deve instalar o ORM prisma Globalmente
```
npm i -g prisma
```
instale o bcrypt
```
npm install bcrypt

Caso precise do prisma client: npm install @prisma/client
```
- Caso queira dados de teste, execute o script ./testes/usuarios.sql no banco de Dados
    - Se estiver utilizando o XAMPP copie os dados e cole no PHPMyAdmin

- Para executar a API prisma
```bash
nodemon
ou
node index.js
```
