SELECT e.cim, t.nev, t.terulet
	FROM dbo.eloadas AS e
	INNER JOIN dbo.kapcsolo AS k
		ON e.id=k.eloadasid
	INNER JOIN dbo.tudos AS t
		ON t.id=k.tudosid
	WHERE month(e.ido)=
	(SELECT month(e.ido)
	FROM dbo.eloadas AS e
	WHERE e.cim='MIT tud az emberi agy?')