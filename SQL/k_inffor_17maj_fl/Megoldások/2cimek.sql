SELECT e.cim, e.ido
	FROM dbo.eloadas AS e
	WHERE e.ido between '2006-01-01 00:00:00.0000000' and '2007-01-01 00:00:00.0000000'
	ORDER BY e.cim asc