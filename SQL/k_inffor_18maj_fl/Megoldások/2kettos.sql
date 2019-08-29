SELECT l.vezeteknev, l.utonev
	FROM dbo.labdarugo AS l
	WHERE l.magyar=-1
	AND l.kulfoldi=-1