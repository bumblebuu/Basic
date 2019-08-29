SELECT ablak, erkezett, nev
  FROM dbo.szolgaltatas AS s
  INNER JOIN dbo.ugyfel AS u
	ON s.id=u.szolgaltatasid
  WHERE sorrakerult>'2019-06-12 12:00:00'