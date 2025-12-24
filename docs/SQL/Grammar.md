# 语法
SQL（Structured Query Language）是一种用于管理和操作关系数据库的标准语言，包括数据查询、数据插入、数据更新、数据删除、数据库结构创建和修改等功能。
> * SQL 对大小写不敏感：SELECT 与 select 是相同的。
> * 某些数据库系统要求在每条 SQL 语句的末端使用分号。
> * 分号是在数据库系统中分隔每条 SQL 语句的标准方法，这样就可以在对服务器的相同请求中执行一条以上的 SQL 语句。

## 数据库表
一个数据库通常包含一个或多个表，每个表有一个名字标识（例如:"Websites"），表包含带有数据的记录（行）。

**查看数据库**
```sql
use RUNOOB;  // 命令用于选择数据库。
set names utf8; // 命令用于设置使用的字符集。
SELECT * FROM Websites; // 读取数据表的信息。
```

### 常用SQL语句
* **SELECT** - 从数据库中提取数据
* **UPDATE** - 更新数据库中的数据
* **DELETE** - 从数据库中删除数据
* **INSERT INTO** - 向数据库中插入新数据
* **CREATE DATABASE** - 创建新数据库
* **ALTER DATABASE** - 修改数据库
* **CREATE TABLE** - 创建新表
* **ALTER TABLE** - 变更（改变）数据库表
* **DROP TABLE** - 删除表
* **CREATE INDEX** - 创建索引（搜索键）
* **DROP INDEX** - 删除索引


### 常用的 SQL 语句和语法
**`SELECT`**：用于从数据库中查询数据。
```sql
SELECT column_name(s)
FROM table_name
WHERE condition
ORDER BY column_name [ASC|DESC]
```
* column_name(s): 要查询的列。
* table_name: 要查询的表。
* condition: 查询条件（可选）。
* ORDER BY: 排序方式，ASC 表示升序，DESC 表示降序（可选）。

**`INSERT INTO`**：用于向数据库表中插入新数据。
```sql
INSERT INTO table_name (column1, column2, ...)
VALUES (value1, value2, ...)
table_name: 要插入数据的表。
column1, column2, ...: 要插入数据的列。
value1, value2, ...: 对应列的值。
UPDATE：用于更新数据库表中的现有数据。
``` 
* UPDATE table_name
* SET column1 = value1, column2 = value2, ...
* WHERE condition
* table_name: 要更新数据的表。
* column1 = value1, column2 = value2, ...: 要更新的列及其新值。
* condition: 更新条件。

**`DELETE`**：用于从数据库表中删除数据。
```sql
DELETE FROM table_name
WHERE condition
```
* table_name: 要删除数据的表。
* condition: 删除条件。

**`CREATE TABLE`**：用于创建新的数据库表。
```sql
CREATE TABLE table_name (
    column1 data_type constraint,
    column2 data_type constraint,
    ...
)
```
* table_name: 要创建的表名。
* column1, column2, ...: 表的列。
* data_type: 列的数据类型（如 INT、VARCHAR 等）。
* constraint: 列的约束（如 PRIMARY KEY、NOT NULL 等）。

**`ALTER TABLE`**：用于修改现有数据库表的结构。
```sql
ALTER TABLE table_name
ADD column_name data_type
```
  * table_name: 要修改的表。
  * column_name: 要添加的列。
  * data_type: 列的数据类型。
或：
```sql
ALTER TABLE table_name
DROP COLUMN column_name
```
* column_name: 要删除的列。

**`DROP TABLE`**：用于删除数据库表。
```sql
DROP TABLE table_name
```
* table_name: 要删除的表。

**`CREATE INDEX`**：用于创建索引，以加快查询速度。
```sql
CREATE INDEX index_name
ON table_name (column_name)
```
* index_name: 索引的名称。
* column_name: 要索引的列。

**`DROP INDEX`**：用于删除索引。
```sql
DROP INDEX index_name
ON table_name
```
* index_name: 要删除的索引名称。
* table_name: 索引所在的表。

**`WHERE`**：用于指定筛选条件。
```sql
SELECT column_name(s)
FROM table_name
WHERE condition
```
* condition: 筛选条件。

**`ORDER BY`**：用于对结果集进行排序。
```sql
SELECT column_name(s)
FROM table_name
ORDER BY column_name [ASC|DESC]
```
* column_name: 用于排序的列。
* ASC: 升序（默认）。
* DESC: 降序。

**`GROUP BY`**：用于将结果集按一列或多列进行分组。
```sql
SELECT column_name(s), aggregate_function(column_name)
FROM table_name
WHERE condition
GROUP BY column_name(s)
```
* aggregate_function: 聚合函数（如 COUNT、SUM、AVG 等）。

**`HAVING`**：用于对分组后的结果集进行筛选。
```sql
SELECT column_name(s), aggregate_function(column_name)
FROM table_name
GROUP BY column_name(s)
HAVING condition
```
* condition: 筛选条件。

**`JOIN`**：用于将两个或多个表的记录结合起来。
```sql
SELECT column_name(s)
FROM table_name1
JOIN table_name2
ON table_name1.column_name = table_name2.column_name
```
* JOIN: 可以是 INNER JOIN、LEFT JOIN、RIGHT JOIN 或 FULL JOIN。

**`DISTINCT`**：用于返回唯一不同的值。
```sql
SELECT DISTINCT column_name(s)
FROM table_name
```
* column_name(s): 要查询的列。