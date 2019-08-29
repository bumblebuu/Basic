SELECT DISTINCT a.nev
	FROM dbo.alkoto AS a
	INNER JOIN dbo.kapcsolat AS k
		ON k.alkotoid=a.id
	WHERE k.tipus='zene'
	AND k.muid IN
	(SELECT k.muid
		FROM dbo.kapcsolat AS k
		INNER JOIN dbo.alkoto AS a
			ON a.id=k.alkotoid
		WHERE a.nev='Harmath Imre')