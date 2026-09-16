# SELECT
FROM characters WHERE blood_id > 1

 id | character_name | age | blood_id | house_id 
----+----------------+-----+----------+----------
  1 | Harry Potter   |  12 |        2 |        1
  2 | Draco Malfoy   |  12 |        3 |        2
(2 rows)

# UPDATE
UPDATE blood SET blood_type = 'Mud_blood' WHERE blood_type = 'Mudblood';

< UPDATE 1

# INSERT y DELETE
INSERT INTO blood (id, blood_type) VALUES (4, 'Squib');
< INSERT 0 1

DELETE FROM blood WHERE id = 4;
< DELETE 1

# JOIN
Aca elegi seleccionar parte de la informacion de la tabla de personajes de los fundadores de las casas (house_fonder).

SELECT (character_name, blood_id, house_id) 
FROM characters 
INNER JOIN house 
ON characters.character_name = house.house_founder;

            row            
---------------------------
 ("Salazar Slytherin",3,2)
 ("Rowena Ravenclaw",3,3)
(2 rows)



SELECT (character_name, blood_id, house_id) 
FROM characters 
RIGHT JOIN house 
ON characters.character_name = house.house_founder;

"row"
"[null,null,null]"
"["Salazar Slytherin","3","2"]"
"["Rowena Ravenclaw","3","3"]"
"[null,null,null]"