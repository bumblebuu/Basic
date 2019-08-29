SELECT t.nev
	FROM dbo.tudos AS t
	INNER JOIN dbo.kapcsolo AS k
		ON t.id=k.tudosid
	WHERE 