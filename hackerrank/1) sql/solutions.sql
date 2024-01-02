--? MySQL

-- Revising the Select Query I
select * from CITY where CountryCode="USA" and POPULATION>100000 

-- Revising the Select Query II
select NAME from CITY 
where COUNTRYCODE="USA" and POPULATION>120000

-- Select All
select * from CITY 

-- Select By ID
select * from CITY where (ID="1661")

-- Japanese Cities' Attributes
select * from CITY where COUNTRYCODE="JPN"

-- Japanese Cities' Names
select NAME from CITY
where COUNTRYCODE="JPN"

-- Weather Observation Station 1
select CITY,STATE from STATION;

-- Weather Observation Station 2
select ROUND(SUM(LAT_N),2) as lat, ROUND(SUM(LONG_W),2) as lon from STATION;

-- Weather Observation Station 3
select DISTINCT CITY from STATION
where ID % 2 = 0

-- Weather Observation Station 4 
select COUNT(CITY)-COUNT(DISTINCT CITY) from STATION

-- Weather Observation Station 5
select CITY, LENGTH(CITY) as len from STATION
order by len desc, CITY limit 1;
select CITY, LENGTH(CITY) as len from STATION
order by len, CITY  limit 1;

-- Weather Observation Station 6
select DISTINCT CITY from STATION
where CITY like 'A%' or CITY like 'E%' or CITY like 'I%' or CITY like 'O%' or CITY like 'U%';

--*or
-- select DISTINCT CITY from STATION
-- where CITY REGEXP '^[AEIOU]';

-- Weather Observation Station 7
select DISTINCT CITY from STATION
where CITY like '%a' or CITY like '%e' or CITY like '%i' or CITY like '%o' or CITY like '%u';

-- Weather Observation Station 8
select DISTINCT CITY from STATION 
where (substring(CITY,1,1)in ('A','E','I','O','U'))
and (substring(CITY,-1,1) in ('a','e','i', 'o', 'u'));

--* or
-- select DISTINCT CITY from STATION 
-- where (CITY REGEXP '^[AEIOU].*[aeiou]$');



