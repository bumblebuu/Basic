SELECT top 1 l.vezeteknev, l.utonev, l.szulido
	FROM dbo.labdarugo AS l
	INNER JOIN dbo.poszt AS p
		ON p.id=l.posztid
	WHERE NOT p.nev='kapus'
	ORDER BY l.szulido asc