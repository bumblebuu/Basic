SELECT k.csapatnev, sum(l.ertek) AS 'összérték'
	FROM dbo.labdarugo AS l
	INNER JOIN dbo.klub AS k
		ON k.id=l.klubid
	GROUP BY k.csapatnev