-- Inserir dados de usuários
-- Inserir dados de usuários (incluindo os novos campos)
INSERT INTO usuario VALUES
(123, "Marcelo Ortega", "789.153.356-35", "marcelinho@email.com", password("marcelinho123"), "2006-05-16", "13917-490", "225", "BL03 AP1004", "19-99268-3698, 19-99163-8541"),
(333, "Naldo Benny", "849.6259.3596-69", "emailespecial@email.com", password("senhaespecialparapessoasespeciais"), "1979-04-19",  "45851-754", "789", "BL15 AP12", "19-99582-1478"),
(011, "Charles do Bronxs", "123.689.254-63", "sebatervaiapagar@email.com", password("dobronxsoliveira"), "1989-10-17",  "79654-360", "914", "casa 4", "19-99531-4852");



-- Inserir dados de pets (para o usuário João)
INSERT INTO Pet (nome, especie, raca, idade, usuarioId)
VALUES ('Rex', 'Cão', 'Golden Retriever', 24, 1);

-- Inserir dados de vacinas para o pet "Rex"
INSERT INTO Vacina (nome, descricao, idadeRecomendada, petId)
VALUES ('Vacina V8 ou V10 (Octupla ou Decúpla)', 'Essas vacinas combinadas geralmente protegem contra várias doenças, incluindo cinomose, hepatite infecciosa canina, adenovírus canino tipo 2, parainfluenza canina, parvovirose canina, coronavírus canino e leptospirose. As vacinas V8 e V10 diferem na quantidade de cepas de leptospirose que cobrem, sendo a V10 mais abrangente', 6, 1);

INSERT INTO Vacina (nome, descricao, idadeRecomendada, petId)
VALUES ('Gripe canina', 'Vacina contra doença X', 12, 1);

INSERT INTO Vacina (nome, descricao, idadeRecomendada, petId)
VALUES ('Giárdia', 'Vacina contra doença Y', 12, 1);

INSERT INTO Vacina (nome, descricao, idadeRecomendada, petId)
VALUES ('Raiva canina', 'Vacina contra doença Z', 16, 1);

INSERT INTO Vacina (nome, descricao, idadeRecomendada, petId)
VALUES ('Leishmaniose', 'Vacina contra doença W', 16, 1);

-- Inserir dados de doses de vacina
INSERT INTO DoseVacina (numeroDose, intervalo, vacinaId)
VALUES (1, '3 a 4 semanas', 1);

INSERT INTO DoseVacina (numeroDose, intervalo, vacinaId)
VALUES (2, '13 a 4 semanas', 1);

INSERT INTO DoseVacina (numeroDose, intervalo, vacinaId)
VALUES (1, '3 a 4 semanas', 2);

INSERT INTO DoseVacina (numeroDose, intervalo, vacinaId)
VALUES (2, '3 a 4 semanas', 2);

INSERT INTO DoseVacina (numeroDose, intervalo, vacinaId)
VALUES (1, '3 a 4 semanas', 3);

-- Certifique-se de que o petId nas inserções de doses corresponde à vacina associada ao pet "Rex"
