SELECT f.fnev, count(f.kod)
	FROM dbo.funkcio AS f
	GROUP BY f.fnev
	ORDER BY count(f.kod) desc