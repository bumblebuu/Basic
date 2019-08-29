SELECT t.terulet, count(t.terulet)
	FROM dbo.tudos AS t
	GROUP BY t.terulet
	ORDER BY count(t.terulet) desc