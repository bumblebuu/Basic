SELECT l.vezeteknev, p.nev, l.szulido
	FROM dbo.labdarugo AS l
	INNER JOIN dbo.poszt AS p
		ON p.id=l.posztid
	WHERE (p.nev LIKE 'bal%' or p.nev='kapus')
	AND (l.szulido>='1998-01-01 00:00:00.0000000')