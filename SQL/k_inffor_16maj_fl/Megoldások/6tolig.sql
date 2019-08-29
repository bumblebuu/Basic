SELECT s.nev, year(s.valasztas), year(s.elhunyt)
	FROM dbo.szinesz AS s
	ORDER BY s.valasztas