SELECT s.nev, s.valasztas, s.elhunyt
	FROM dbo.szinesz AS s
	WHERE s.valasztas<'2012-01-02'
	AND (s.elhunyt>'2012-01-01' OR s.elhunyt is NULL)