SELECT ID, vezeteknev+' '+keresztnev AS 'teljesnév'
  FROM Hallgatok
  WHERE VezetekNev LIKE 'Tóth%'
  ORDER BY [teljesnév] DESC;

SELECT DISTINCT vezeteknev
  FROM Hallgatok;

--egysoros megjegyzés

/*
többsoros megjegyzés
*/