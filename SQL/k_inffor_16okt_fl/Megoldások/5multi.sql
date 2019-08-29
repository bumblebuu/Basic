SELECT f.fnev
	FROM dbo.funkcio AS f
	GROUP BY  f.fnev
	HAVING count(f.fnev)>=50