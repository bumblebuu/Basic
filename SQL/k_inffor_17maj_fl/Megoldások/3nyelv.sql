SELECT t.nev, e.cim
	FROM dbo.eloadas AS e
	INNER JOIN dbo.kapcsolo AS k
		ON k.eloadasid=e.id
	INNER JOIN dbo.tudos AS t
		ON t.id=k.tudosid
	WHERE e.cim LIKE '%nyelv%'