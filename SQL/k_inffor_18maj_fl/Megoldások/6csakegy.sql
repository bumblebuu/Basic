SELECT k.csapatnev, p.nev
	FROM dbo.klub AS k
	INNER JOIN dbo.labdarugo AS l
		ON l.klubid=k.id
	INNER JOIN dbo.poszt AS p
		ON l.posztid=p.id
	WHERE l.posztid=k.id
	AND l.klubid=k.id
	GROUP BY k.csapatnev, p.nev
	HAVING count(l.id)=1