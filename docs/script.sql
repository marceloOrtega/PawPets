-- Inserir informações do usuário
INSERT INTO Usuario (id, nome, cpf, email, senha, nascto, cep, numero, complemento, telefones)
VALUES (1, "Marcelo Ortega", "789.153.356-35", "marcelinho@email.com", "${senhaMarcelo}", "2006-05-16", "13917-490", "225", "BL03 AP1004", "19-99268-3698, 19-99163-8541"),
       (2, "Naldo Benny", "849.6259.3596-69", "emailespecial@email.com", "&{senhaNaldo}", "1979-04-19", "45851-754", "789", "BL15 AP12", "19-99582-1478"),
       (3, "Charles do Bronxs", "123.689.254-63", "sebatervaiapagar@email.com", "${senhaCharles}", "1989-10-17", "79654-360", "914", "casa 4", "19-99531-4852"),
       (4, "Mariana Silva", "123.456.789-00", "mariana@email.com", "${senhaMariana}", "1990-03-25", "12345-678", "101", "Apto 3", "11-98765-4321, 11-99876-5432"),
       (5, "André Santos", "987.654.321-00", "andre@email.com", "${senhaAndre}", "1985-08-12", "54321-987", "202", "Casa 5", "11-87654-3210, 11-88998-7654"),
       (6, "Camila Rodrigues", "456.123.789-00", "camila@email.com", "${senhaCamila}", "1995-11-30", "98765-432", "303", "BL1 AP22", "11-76543-2109, 11-77777-7777");

-- Inserir informações do pet
INSERT INTO Pet (nome, especie, raca, idade, usuarioId)
VALUES ('Rex', 'Cão', 'Golden Retriever', 24, 1);

-- Inserir informações de outros pets
INSERT INTO Pet (nome, especie, raca, idade, usuarioId)
VALUES ('Mickey', 'Rato', 'Desconhecida', 2, 2);

INSERT INTO Pet (nome, especie, raca, idade, usuarioId)
VALUES ('Bugs', 'Coelho', 'Pernalonga', 3, 3);

INSERT INTO Pet (nome, especie, raca, idade, usuarioId)
VALUES ('Nemo', 'Peixe', 'Palhaço', 1, 4);

INSERT INTO Pet (nome, especie, raca, idade, usuarioId)
VALUES ('Tweety', 'Pássaro', 'Canário', 5, 5);

INSERT INTO Pet (nome, especie, raca, idade, usuarioId)
VALUES ('Tom', 'Gato', 'Vira-lata', 4, 6);

-- Inserir informações das vacinas
-- Vacina V8 ou V10 (Octupla ou Decúpla)
INSERT INTO Vacina (nome, descricao, idadeRecomendada, petId)
VALUES ('Vacina V8 ou V10 (Octupla ou Decúpla)', 'Essas vacinas combinadas geralmente protegem contra várias doenças, incluindo cinomose, hepatite infecciosa canina, adenovírus canino tipo 2, parainfluenza canina, parvovirose canina, coronavírus canino e leptospirose. As vacinas V8 e V10 diferem na quantidade de cepas de leptospirose que cobrem, sendo a V10 mais abrangente', 6, 1);

-- Doses da Vacina V8 ou V10
INSERT INTO DoseVacina (numeroDose, intervalo, vacinaId)
VALUES (1, '4 semanas após a 1ª dose', 1);

INSERT INTO DoseVacina (numeroDose, intervalo, vacinaId)
VALUES (2, '4 semanas após a 2ª dose', 1);

INSERT INTO DoseVacina (numeroDose, intervalo, vacinaId)
VALUES (3, '1 ano após a última dose', 1);

-- Gripe canina
INSERT INTO Vacina (nome, descricao, idadeRecomendada, petId)
VALUES ('Gripe canina', 'Vacina contra doença X. Esta vacina protege contra a gripe canina, que pode causar sintomas semelhantes aos da gripe humana, incluindo tosse, espirros e febre. É especialmente importante para cães que frequentam creches ou exposições caninas.', 8, 1);

-- Doses da Vacina Gripe canina
INSERT INTO DoseVacina (numeroDose, intervalo, vacinaId)
VALUES (1, '2 a 4 semanas após a 1ª dose', 2);

-- Giárdia
INSERT INTO Vacina (nome, descricao, idadeRecomendada, petId)
VALUES ('Giárdia', 'Vacina contra doença Y. Esta vacina protege contra a giárdia, um parasita intestinal que pode causar diarreia em cães. É especialmente importante para cães que vivem em áreas onde a giárdia é prevalente ou que têm maior risco de exposição.', 8, 1);

-- Doses da Vacina Giárdia
INSERT INTO DoseVacina (numeroDose, intervalo, vacinaId)
VALUES (1, '2 a 4 semanas após a 1ª dose', 3);

-- Antirrábica
INSERT INTO Vacina (nome, descricao, idadeRecomendada, petId)
VALUES ('Antirrábica', 'Vacina contra doença Z. A vacina antirrábica protege contra a raiva, uma doença viral fatal que pode ser transmitida a outros animais e humanos. É uma vacina essencial para a saúde pública e é geralmente exigida por lei em muitas áreas.', 12, 1);

-- Doses da Vacina Antirrábica
INSERT INTO DoseVacina (numeroDose, intervalo, vacinaId)
VALUES (1, '1 ano após a última dose', 4);

-- Leishmaniose
INSERT INTO Vacina (nome, descricao, idadeRecomendada, petId)
VALUES ('Leishmaniose', 'Vacina contra doença W. Esta vacina protege contra a leishmaniose, uma doença transmitida por mosquitos que pode afetar cães e seres humanos. É especialmente importante em áreas endêmicas.', 16, 1);

-- Doses da Vacina Leishmaniose
INSERT INTO DoseVacina (numeroDose, intervalo, vacinaId)
VALUES (1, '21 dias após a 1ª dose', 5);

INSERT INTO DoseVacina (numeroDose, intervalo, vacinaId)
VALUES (2, '21 dias após a 2ª dose', 5);

INSERT INTO DoseVacina (numeroDose, intervalo, vacinaId)
VALUES (3, '1 ano após a última dose', 5);