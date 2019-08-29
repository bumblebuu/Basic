SELECT g.hely, g.ipcim, s.nev
	FROM dbo.gep AS g
	INNER JOIN dbo.telepites AS t
		ON t.gepid=g.id
	INNER JOIN dbo.szoftver AS s
		ON s.id=t.szoftverid
	WHERE t.datum between '2016-01-01 00:00:00.000' and '2017-01-01 00:00:00.000'
	GROUP BY g.hely, g.ipcim, s.nev
	HAVING count(t.verzio)>=2