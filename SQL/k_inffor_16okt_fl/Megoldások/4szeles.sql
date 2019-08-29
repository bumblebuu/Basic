SELECT top 3 f.kod, count(f.fnev)
	FROM dbo.funkcio AS f
	GROUP BY f.kod
	ORDER BY count(f.fnev) desc