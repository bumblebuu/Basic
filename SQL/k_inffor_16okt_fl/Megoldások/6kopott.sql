SELECT f.kod
	FROM dbo.funkcio AS f
	WHERE f.fnev LIKE '%sav%'
INTERSECT
SELECT f.kod
	FROM dbo.funkcio AS f
	WHERE f.fnev LIKE '%anti%'