SELECT l.vezeteknev, l.mezszam
	FROM dbo.labdarugo AS l
	WHERE l.klubid=ANY
	(SELECT l.klubid
		FROM dbo.labdarugo AS l
		WHERE l.vezeteknev='Lanzafame')