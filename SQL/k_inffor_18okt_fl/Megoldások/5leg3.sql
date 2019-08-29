SELECT TOP 3 a.nev, count(k.alkotoid) AS 'm�vek sz�ma'
	FROM dbo.alkoto AS a
	INNER JOIN dbo.kapcsolat AS k
		ON k.alkotoid=a.id
	WHERE k.tipus='zene'
	GROUP BY a.nev
	ORDER BY 'm�vek sz�ma' desc