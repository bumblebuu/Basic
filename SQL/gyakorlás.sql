SELECT ID, vezeteknev+' '+keresztnev AS 'teljesn�v'
  FROM Hallgatok
  WHERE VezetekNev LIKE 'T�th%'
  ORDER BY [teljesn�v] DESC;

SELECT DISTINCT vezeteknev
  FROM Hallgatok;

--egysoros megjegyz�s

/*
t�bbsoros megjegyz�s
*/