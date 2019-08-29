SELECT g.ipcim, s.nev, t.verzio
	FROM dbo.szoftver AS s
	INNER JOIN dbo.telepites AS t
		ON t.szoftverid=s.id
	INNER JOIN dbo.gep AS g
		ON g.id=t.gepid
	WHERE g.hely='T208'
	ORDER BY g.ipcim, s.nev