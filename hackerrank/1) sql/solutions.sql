--? MySQL

--* Revising the Select Query I
select * from CITY where CountryCode="USA" and POPULATION>100000 

--* Revising the Select Query II
select NAME from CITY 
where COUNTRYCODE="USA" and POPULATION>120000

--* Select All
select * from CITY 

--* Select By ID
select * from CITY where (ID="1661")

--* Japanese Cities' Attributes
select * from CITY where COUNTRYCODE="JPN"

--* Japanese Cities' Names
select NAME from CITY
where COUNTRYCODE="JPN"

--* Weather Observation Station 1
select CITY,STATE from STATION;

--* Weather Observation Station 2
select ROUND(SUM(LAT_N),2) as lat, ROUND(SUM(LONG_W),2) as lon from STATION;

--* Weather Observation Station 3
select DISTINCT CITY from STATION
where ID % 2 = 0

--* Weather Observation Station 4 
select COUNT(CITY)-COUNT(DISTINCT CITY) from STATION

--* Weather Observation Station 5
select CITY, LENGTH(CITY) as len from STATION
order by len desc, CITY limit 1;
select CITY, LENGTH(CITY) as len from STATION
order by len, CITY  limit 1;

--* Weather Observation Station 6
select DISTINCT CITY from STATION
where CITY like 'A%' or CITY like 'E%' or CITY like 'I%' or CITY like 'O%' or CITY like 'U%';

--? or
-- select DISTINCT CITY from STATION
-- where CITY REGEXP '^[AEIOU]';

--* Weather Observation Station 7
select DISTINCT CITY from STATION
where CITY like '%a' or CITY like '%e' or CITY like '%i' or CITY like '%o' or CITY like '%u';

--* Weather Observation Station 8
select DISTINCT CITY from STATION 
where (substring(CITY,1,1)in ('A','E','I','O','U'))
and (substring(CITY,-1,1) in ('a','e','i', 'o', 'u'));

--? or
-- select DISTINCT CITY from STATION 
-- where (CITY REGEXP '^[AEIOU].*[aeiou]$');

--* Weather Observation Station 9
select DISTINCT CITY from STATION
where CITY not like 'A%' 
and CITY not like 'E%' and CITY not like 'I%'
and CITY not like 'O%' and CITY not like 'U%'

--* Weather Observation Station 10
select DISTINCT CITY from STATION
where CITY not like '%A'
and CITY not like '%E' and CITY not like '%I'
and CITY not like '%O' and CITY not like '%U'

--* Weather Observation Station 11
select DISTINCT CITY from STATION
where (CITY not like 'A%' 
and CITY not like 'E%' and CITY not like 'O%'
and CITY not like 'I%' and CITY not like 'U%')
or (CITY not like '%A' and CITY not like '%E' 
and CITY not like '%I' and CITY not like '%O'
and CITY not like '%U')

--* Weather Observation Station 12
SELECT DISTINCT CITY FROM STATION 
WHERE CITY NOT LIKE 'A%' AND CITY NOT LIKE 'E%' 
AND CITY NOT LIKE 'I%' AND CITY NOT LIKE 'O%'
AND CITY NOT LIKE 'U%' AND CITY NOT LIKE '%A'
AND CITY NOT LIKE '%E' AND CITY NOT LIKE '%I'
AND CITY NOT LIKE '%O' AND CITY NOT LIKE '%U'

--? or
-- SELECT DISTINCT CITY FROM STATION 
-- WHERE CITY NOT REGEXP '^(A|E|I|O|U)|.*(A|E|I|O|U)$';

--* Weather Observation Station 13
SELECT ROUND(SUM(LAT_N),4) FROM STATION
WHERE LAT_N > 38.7880 AND LAT_N<137.2345;

--* Weather Observation Station 14
SELECT ROUND(MAX(LAT_N),4) FROM STATION
WHERE LAT_N < 137.2345

--* Weather Observation Station 16
SELECT ROUND(MIN(LAT_N),4) FROM STATION
WHERE LAT_N > 38.7780

--* Japan Population
SELECT SUM(POPULATION) FROM CITY
WHERE COUNTRYCODE='JPN' 

--* Employee Names
SELECT name from Employee
order by name

--* Employee Salaries
select name from Employee
where months<10 and salary>2000
order by employee_id asc

--* Revising Aggregations - The Count Function
SELECT COUNT(*) FROM CITY
WHERE POPULATION>100000

--* Revising Aggregations - The Sum Function
SELECT SUM(POPULATION) FROM CITY
WHERE DISTRICT='California'

--* Population Density Difference
SELECT MAX(POPULATION)-MIN(POPULATION) FROM CITY

--* Higher Than 75 Marks
SELECT Name FROM STUDENTS
WHERE Marks>75
ORDER BY RIGHT(Name, 3), ID ASC;

--* Average Population
SELECT ROUND(AVG(POPULATION))FROM CITY

--* Revising Aggregations - Averages
SELECT AVG(POPULATION) FROM CITY
WHERE DISTRICT='California'


--* Weather Observation Station 15
SELECT ROUND(LONG_W,4) FROM STATION
WHERE LAT_N<137.2345
ORDER BY LAT_N DESC
LIMIT 1