SELECT ablak, nev, count(u.id) AS '�sszesen'
	FROM dbo.ugyfel AS u
	INNER JOIN dbo.szolgaltatas AS s
		ON s.id=u.szolgaltatasid
	GROUP BY ablak, nev
	ORDER BY ablak, nev;
