SELECT DISTINCT t.verzio
	FROM dbo.telepites AS t
	INNER JOIN dbo.szoftver AS s
		ON s.id=t.szoftverid
	WHERE s.nev='LibreOffice'