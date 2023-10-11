-- Inserir informações do usuário
INSERT INTO Usuario (id, nome, cpf, cep, rua, numero, complemento, estado, cidade, bairro, telefone, email, senha)
VALUES
  (1, 'Marcelo Ortega', '78915335635', '13917-490','Rua Macieira', '225', 'bloco03', 'SP', 'Campinas', 'roseira de cima', '19992683698', 'marcelinho@email.com', '1234');

-- Inserir informações do pet
INSERT INTO Pet (nome, especie, raca, idade, usuarioId)
VALUES ('Rex', 'Cão', 'Golden Retriever', 24, 1);

-- Inserir informações de outros pets


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
VALUES (1, '2 a 4 semanas após a 1ª dose', 1);

-- Giárdia
INSERT INTO Vacina (nome, descricao, idadeRecomendada, petId)
VALUES ('Giárdia', 'Vacina contra doença Y. Esta vacina protege contra a giárdia, um parasita intestinal que pode causar diarreia em cães. É especialmente importante para cães que vivem em áreas onde a giárdia é prevalente ou que têm maior risco de exposição.', 8, 1);

-- Doses da Vacina Giárdia
INSERT INTO DoseVacina (numeroDose, intervalo, vacinaId)
VALUES (1, '2 a 4 semanas após a 1ª dose', 1);

-- Antirrábica
INSERT INTO Vacina (nome, descricao, idadeRecomendada, petId)
VALUES ('Antirrábica', 'Vacina contra doença Z. A vacina antirrábica protege contra a raiva, uma doença viral fatal que pode ser transmitida a outros animais e humanos. É uma vacina essencial para a saúde pública e é geralmente exigida por lei em muitas áreas.', 12, 1);

-- Doses da Vacina Antirrábica
INSERT INTO DoseVacina (numeroDose, intervalo, vacinaId)
VALUES (1, '1 ano após a última dose', 1);

-- Leishmaniose
INSERT INTO Vacina (nome, descricao, idadeRecomendada, petId)
VALUES ('Leishmaniose', 'Vacina contra doença W. Esta vacina protege contra a leishmaniose, uma doença transmitida por mosquitos que pode afetar cães e seres humanos. É especialmente importante em áreas endêmicas.', 16, 1);

-- Doses da Vacina Leishmaniose
INSERT INTO DoseVacina (numeroDose, intervalo, vacinaId)
VALUES (1, '21 dias após a 1ª dose', 1);

INSERT INTO DoseVacina (numeroDose, intervalo, vacinaId)
VALUES (2, '21 dias após a 2ª dose', 1);

INSERT INTO DoseVacina (numeroDose, intervalo, vacinaId)
VALUES (3, '1 ano após a última dose', 1);
