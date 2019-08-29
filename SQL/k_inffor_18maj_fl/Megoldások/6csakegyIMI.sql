SELECT klubid, posztid, count(id)
FROM labdarugo
GROUP BY klubid, posztid
HAVING count(id)<2

SELECT k.csapatnev, p.nev, count(l.id)
FROM labdarugo as l
INNER JOIN klub as k
ON k.id = l.klubid
INNER JOIN poszt as p
ON p.id = l.posztid
GROUP BY k.csapatnev, p.nev
HAVING count(l.id)<2