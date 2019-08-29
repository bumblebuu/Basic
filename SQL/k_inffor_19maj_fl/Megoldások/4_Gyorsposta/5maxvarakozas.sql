SELECT erkezett, sorrakerult
	FROM dbo.ugyfel
	WHERE ablak=6
	AND DATEDIFF(s, erkezett, sorrakerult)=
(SELECT max(DATEDIFF(s, erkezett, sorrakerult))
	FROM dbo.ugyfel
	WHERE ablak=6)