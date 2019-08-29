SELECT s.nev, k.ev, e.megnevezes
	FROM dbo.elismeres AS e
	INNER JOIN dbo.kapott AS k
		ON k.elismeresid=e.id
	INNER JOIN dbo.szinesz AS s
		ON s.id=k.szineszid
	GROUP BY s.nev, k.ev, e.megnevezes