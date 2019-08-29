SELECT *
	FROM dbo.mu AS m
	WHERE m.ev
	IN (SELECT m.ev
		FROM dbo.mu AS m
		WHERE m.ev BETWEEN 1919 AND 1938)
	ORDER BY m.ev asc, m.cim asc