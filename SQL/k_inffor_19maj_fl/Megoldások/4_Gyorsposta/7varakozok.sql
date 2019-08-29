SELECT count(id) AS 'várakozók adott idõ tartományban'
	FROM dbo.ugyfel
	WHERE erkezett <=(SELECT min(tavozott) FROM dbo.ugyfel)
	AND (SELECT min(tavozott) FROM dbo.ugyfel) <= sorrakerult

	-- BETWEEN erkezett AND sorrakerult