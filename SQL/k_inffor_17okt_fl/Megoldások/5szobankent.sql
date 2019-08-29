SELECT g.hely, count(g.id)
	FROM dbo.gep AS g
	GROUP BY g.hely