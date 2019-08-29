SELECT a.nev, k.tipus
	FROM dbo.mu AS m
	INNER JOIN dbo.kapcsolat AS k
		ON m.id=k.muid
	INNER JOIN dbo.alkoto AS a
		ON k.alkotoid=a.id
	WHERE m.cim='Bob herceg'