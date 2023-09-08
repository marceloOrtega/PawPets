-- Banco de dados populado, inserir informações pra kct

-- Inserir dados de usuários
INSERT INTO Usuario (nome, email, senha)
VALUES ('João', 'joao@email.com', 'senha123');

-- Inserir dados de pets
INSERT INTO Pet (nome, especie, raca, idade, usuarioId)
VALUES ('Rex', 'Cão', 'Golden Retriever', 24, 1);

-- Inserir dados de vacinas
INSERT INTO Vacina (nome, descricao, idadeRecomendada, petId)
VALUES ('Vacina1', 'Vacina contra doença X', 12, 1);

INSERT INTO Vacina (nome, descricao, idadeRecomendada, petId)
VALUES ('Vacina2', 'Vacina contra doença Y', 24, 1);
