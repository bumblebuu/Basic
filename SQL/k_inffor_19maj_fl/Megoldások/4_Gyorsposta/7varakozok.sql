SELECT count(id) AS 'v�rakoz�k adott id� tartom�nyban'
	FROM dbo.ugyfel
	WHERE erkezett <=(SELECT min(tavozott) FROM dbo.ugyfel)
	AND (SELECT min(tavozott) FROM dbo.ugyfel) <= sorrakerult

	-- BETWEEN erkezett AND sorrakerult