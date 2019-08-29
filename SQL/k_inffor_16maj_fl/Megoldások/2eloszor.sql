SELECT s.nev
	FROM dbo.szinesz AS s
	WHERE s.valasztas LIKE '2000-08-22%'
	ORDER BY s.nev