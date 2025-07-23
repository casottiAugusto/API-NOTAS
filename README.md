# API-NOTAS

API simples para gerenciamento de notas utilizando Node.js, Express e SQLite.

## Funcionalidades

- Criar notas
- Listar notas (implementar)
- Atualizar notas (implementar)
- Deletar notas (implementar)

## Instalação

```bash
git clone https://github.com/casottiAugusto/API-NOTAS.git
cd API-NOTAS
npm install
```

## Uso

1. Crie um arquivo `.env` na raiz do projeto e defina a porta (opcional):
    ```
    PORT=3000
    ```
2. Inicie o servidor em modo desenvolvimento:
    ```bash
    npm run dev
    ```
3. Acesse [http://localhost:3000](http://localhost:3000) para verificar se a API está rodando.

## Endpoints

- `POST /api/notes`  
  Cria uma nova nota.  
  **Body:**  
  ```json
  {
    "title": "Título da nota",
    "content": "Conteúdo da nota"
  }
  ```

## Estrutura do Projeto

```
src/
  server.ts
  controllers/
    notesController.ts
  db/
    database.ts
  models/
    note.ts
  routes/
    noteRoutes.ts
```

## Licença

Este projeto está sob a licença