DROP TABLE IF EXISTS characters; DROP TABLE IF EXISTS house; DROP TABLE IF EXISTS blood;

CREATE TABLE blood ( id SERIAL PRIMARY KEY, blood_type VARCHAR(30) NOT NULL);

CREATE TABLE house ( id SERIAL PRIMARY KEY, house_name VARCHAR (10) NOT NULL, house_founder VARCHAR (30) NOT NULL, primary_color VARCHAR (10) NOT NULL);

CREATE TABLE characters ( id SERIAL PRIMARY KEY, character_name VARCHAR(100) NOT NULL, age INTEGER, blood_id INTEGER REFERENCES blood(id), house_id INTEGER REFERENCES house(id));

INSERT INTO blood (id, blood_type) VALUES (1, 'Mudblood'), (2, 'Half_blood'), (3, 'Pure_blood');

INSERT INTO house (id, house_name, house_founder, primary_color) VALUES (1, 'Gryffindor', 'Godric Gryffindor', 'Red'), (2, 'Slytherin', 'Salazar Slytherin', 'Green'), (3, 'Ravenclaw', 'Rowena Ravenclaw', 'Blue'), (4, 'Hufflepuff', 'Helga Hufflepuff', 'Yellow');

INSERT INTO characters (id, character_name, age, blood_id, house_id) VALUES (1, 'Harry Potter', 12, 2, 1), (2, 'Draco Malfoy', 12, 3, 2), (3, 'Hermione Granger', 12, 1, 1), (4, 'Salazar Slytherin', 99, 3, 2), (5, 'Rowena Ravenclaw', 99, 3, 3);