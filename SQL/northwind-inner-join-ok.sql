SELECT o.OrderID, c.CompanyName, od.ProductID, p.ProductName, od.Quantity, od.UnitPrice, od.Quantity*od.UnitPrice AS 'ItemPrice'
	FROM Orders AS o
	INNER JOIN Customers AS c
		ON c.CustomerID=o.CustomerID
	INNER JOIN [Order Details] AS od
		ON o.OrderID=od.OrderID
	INNER JOIN Products AS p
		ON od.ProductID=p.ProductID
	WHERE o.orderID=10643

SELECT sum(od.Quantity*od.UnitPrice)
	FROM [Order Details] AS od
	WHERE od.OrderID=10643