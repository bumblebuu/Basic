SELECT DISTINCT f.fnev
	FROM dbo.adalek AS a
	INNER JOIN dbo.funkcio AS f
		ON f.kod=a.kod
	WHERE a.nev LIKE '%karamell%'