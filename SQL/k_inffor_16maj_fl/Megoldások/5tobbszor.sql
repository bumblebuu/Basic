SELECT s.nev, e.megnevezes
	FROM dbo.szinesz AS s
	INNER JOIN dbo.kapott AS k
		ON k.szineszid=s.id
	INNER JOIN dbo.elismeres AS e
		ON e.id=k.elismeresid
	GROUP BY s.nev, e.megnevezes
	HAVING count(e.megnevezes)>1