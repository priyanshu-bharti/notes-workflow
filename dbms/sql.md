# SQL (Postgres)

Tags: Programming Language
Created time: June 22, 2024 7:16 PM
Last edited time: July 8, 2024 6:38 AM

# What are Relational Databases

- Relational databases are a type of database management system (DBMS) that stores and organizes data in a structured format called tables.
- These tables are made up of rows, also known as records or tuples, and columns, which are also called attributes or fields.
- The term “relational” comes from the fact that these tables can be related to one another through keys and relationships.

## **Key Concepts**

- **Table**
    - A table is a collection of data organized into rows and columns.
    - Each table has a unique name and represents a specific object or activity in the database.
- **Row**
    - A row is a single entry in a table, containing a specific instance of data.
    - Each row in a table has the same columns and represents a single record.
- **Column**
    - A column is a data field in a table, representing a specific attribute of the data.
    - Columns have a unique name and a specific data type.
- **Primary Key**
    - A primary key is a column (or a set of columns) in a table that uniquely identifies each row.
    - No two rows can have the same primary key value.
- **Foreign Key**
    - A foreign key is a column (or a set of columns) in a table that refers to the primary key of another table.
    - It is used to establish relationships between tables.

## **Relationships**

- One of the main advantages of a relational database is its ability to represent relationships between tables.
- These relationships could be one-to-one, one-to-many, or many-to-many relationships.
- They allow for efficient querying and manipulation of related data across multiple tables.
    - **One-to-One**
        - This is a relationship where a row in one table has a single corresponding row in another table.
        - For example, a person could have a single passport, and a passport can only belong to one person.
    - **One-to-Many**
        - This is a relationship where a row in one table can have multiple corresponding rows in another table.
        - For example, a customer can have multiple orders, but an order can only belong to one customer.
    - **Many-to-Many**
        - This is a relationship where multiple rows in one table can have multiple corresponding rows in another table.
        - To represent a many-to-many relationship, a third table, called a junction table or associative table, is needed.
        - For example, a student can enroll in multiple courses, and a course can have multiple students enrolled.

## **Advantages of Relational Databases**

Relational databases offer several advantages in terms of efficiency, flexibility, and data integrity:

- **Structured Data**
    - The table-based organization of relational databases makes them well-suited for handling structured data, which has a consistent structure and can be easily mapped to the columns and rows of a table.
- **Data Integrity**
    - Relational databases use primary and foreign keys to maintain consistent relationships between related data, reducing the chances of data inconsistency and redundancy.
- **Scalability**
    - Relational databases can handle large amounts of structured data and can be scaled to accommodate growing data requirements.
- **Querying**
    - The SQL (Structured Query Language) is used for querying, updating, and managing relational databases, providing a powerful and standardized way to access and manipulate the data.

# RDBMS Benefits and Limitations

## **Benefits**

- **Structured Data**
    - RDBMS allows data storage in a structured way, using rows and columns in tables.
    - This makes it easy to manipulate the data using SQL (Structured Query Language), ensuring efficient and flexible usage.
- **ACID Properties**
    - ACID stands for Atomicity, Consistency, Isolation, and Durability.
    - These properties ensure reliable and safe data manipulation in a RDBMS, making it suitable for mission-critical applications.
- **Normalization**
    - RDBMS supports data normalization, a process that organizes data in a way that reduces data redundancy and improves data integrity.
- **Scalability**
    - RDBMSs generally provide good scalability options, allowing for the addition of more storage or computational resources as the data and workload grow.
- **Data Integrity**
    - RDBMS provides mechanisms like constraints, primary keys, and foreign keys to enforce data integrity and consistency, ensuring that the data is accurate and reliable.
- **Security**
    - RDBMSs offer various security features such as user authentication, access control, and data encryption to protect sensitive data.

## **Limitations**

- **Complexity**
    - Setting up and managing an RDBMS can be complex, especially for large applications.
    - It requires technical knowledge and skills to manage, tune, and optimize the database.
- **Cost**
    - RDBMSs can be expensive, both in terms of licensing fees and the computational and storage resources they require.
- **Fixed Schema**
    - RDBMS follows a rigid schema for data organization, which means any changes to the schema can be time-consuming and complicated.
- **Handling of Unstructured Data**
    - RDBMSs are not suitable for handling unstructured data like multimedia files, social media posts, and sensor data, as their relational structure is optimized for structured data.
- **Horizontal Scalability**
    - RDBMSs are not as easily horizontally scalable as NoSQL databases.
    - Scaling horizontally, which involves adding more machines to the system, can be challenging in terms of cost and complexity.

# PostgreSQL vs NoSQL Databases

## **Database type**

- **PostgreSQL** is a relational database management system (RDBMS) that uses SQL as its main query language.
    - It is designed to store structured data, and it is based on the relational model, which means that data is represented as tables with rows and columns.
- **NoSQL** (Not only SQL) is a term used to describe a variety of non-relational database management systems, which are designed to store unstructured or semi-structured data.
    - Some common types of NoSQL databases are:
        - Document databases (e.g., MongoDB, Couchbase)
        - Key-Value databases (e.g., Redis, Riak)
        - Column-family databases (e.g., Cassandra, HBase)
        - Graph databases (e.g., Neo4j, Amazon Neptune)

## **Scalability**

- **PostgreSQL** provides vertical scalability, which means that you can increase the performance of a single server by adding more resources (e.g., CPU, RAM).
    - On the other hand, horizontal scalability (adding more servers to a database cluster to distribute the load) is more challenging in PostgreSQL.
    - You can achieve this through read replicas or sharding, but it requires a more complex configuration and may have limitations depending on your use case.
- **NoSQL** databases, in general, are designed for horizontal scalability.
    - They can easily distribute data across multiple servers, making them a suitable choice for large-scale applications or those that require high availability and high write/read throughput.
    - That said, different NoSQL databases implement this in various ways, which may impact performance and feature set.

## **Data modeling**

- **PostgreSQL** uses a schema-based approach for data modeling, where you define tables and relationships between them using SQL.
    - This allows you to enforce data integrity and consistency through constraints, such as primary keys, foreign keys, and unique indexes.
- **NoSQL** databases, given their non-relational nature, use more flexible data models, such as JSON or key-value pairs.
    - This allows you to store complex, hierarchical, and dynamic data without having to design a rigid schema first.
    - However, this also means that you may have to handle data consistency and integrity at the application level.

## **Query language**

- **PostgreSQL** uses SQL (Structured Query Language) for querying and managing data.
    - SQL is a powerful and widely used language that allows you to perform complex queries and analyze data with ease.
- **NoSQL** databases use a variety of query languages, depending on the database type.
    - Some, like MongoDB, use query languages similar to JSON, while others, like Neo4j, have their own tailored query languages (e.g., Cypher).
    - This variety may lead to a steeper learning curve, but it also allows you to choose the database with the most suitable and expressive query language for your needs.

## **Use cases**

- **PostgreSQL** is a great choice for:
    - Applications that require consistent and well-structured data, such as financial or banking systems.
    - Complex reporting and data analysis.
    - Applications that can benefit from advanced features, such as stored procedures, triggers, and full-text search.
- **NoSQL** databases are a better fit for:
    - Applications that deal with large volumes of unstructured or semi-structured data, such as social media platforms, IoT devices, or content management systems.
    - Applications that require high performance, scalability, and availability, such as real-time analytics, gaming platforms, or search engines.
    - Projects where data modeling and schema design may evolve over time, due to the flexible storage approach.

# Basic Postgres ORDBMS Concepts

- PostgreSQL is an object-relational database management system (ORDBMS).
- That means it combines features of both relational (RDBMS) and object-oriented databases (OODBMS).
- The object model in PostgreSQL provides features like user-defined data types, inheritance, and polymorphism, which enhances its capabilities beyond a typical SQL-based RDBMS.

## **User-Defined or Composite Data Types**

- One of the core features of the object model in PostgreSQL is the ability to create user-defined data types.
- User-defined data types allow users to extend the base functionality and use PostgreSQL to store complex and custom data structures.
- These data types are known as Composite Types, which are created using the **`CREATE TYPE`** SQL command.
- For example, you can create a custom type for a 3D point:
    
    ```sql
    CREATE TYPE point_3d AS (    
    	x REAL,
    	y REAL,
    	z REAL
    );
    ```
    

## **Inheritance**

- Another element of the object model in PostgreSQL is table inheritance.
- This feature allows you to define a table that inherits the columns, data types, and constraints of another table.
- Inheritance in PostgreSQL is a powerful mechanism to organize and reuse common data structures across multiple tables.
- The syntax for creating a table that inherits another table is as follows:
    
    ```sql
    CREATE TABLE child_table_name ()
        INHERITS (parent_table_name);
    ```
    
- For example, consider a base table **`person`**:
    
    ```sql
    CREATE TABLE person (
        id SERIAL PRIMARY KEY,
        first_name VARCHAR(100),
        last_name VARCHAR(100),
        dob DATE
    );
    ```
    
- You can create an **`employee`** table that inherits the attributes of **`person`**:
    
    ```sql
    CREATE TABLE employee ()
        INHERITS (person);
    ```
    
- The **`employee`** table now has all the columns of the **`person`** table, and you can add additional columns or constraints specific to the **`employee`** table.

## **Polymorphism**

- Polymorphism is another valuable feature of the PostgreSQL object model.
- Polymorphism allows you to create functions and operators that can accept and return multiple data types.
- This flexibility enables you to work with a variety of data types conveniently.
- In PostgreSQL, two forms of polymorphism are supported:
    - Polymorphic Functions: Functions that can accept and return multiple data types.
    - Polymorphic Operators: Operators, which are essentially functions, that can work with multiple data types.
- For example, consider the following function which accepts `anyelement` type:
    
    ```sql
    CREATE FUNCTION simple_add(x anyelement, y anyelement) RETURNS anyelement
        AS 'SELECT x + y;'
    	  LANGUAGE SQL;
    ```
    
- This function can work with any data type that supports the addition operator.

# Object Model

## Queries

- Queries are the primary way to interact with a PostgreSQL database and retrieve or manipulate data stored within its tables.

### **Simple SELECT Statements**

- The most basic type of query is a simple **`SELECT`** statement.
- This allows you to retrieve data from one or more tables, and optionally filter or sort the results.
    
    ```sql
    SELECT column1, column2, ...
    FROM table_name
    WHERE conditions
    ORDER BY column ASC/DESC;
    ```
    
- For example, to select all records from the **`users`** table:
    
    ```sql
    SELECT * FROM users;
    ```
    
- To select only the **`name`** and **`email`** columns for users with an **`age`** greater than 25:
    
    ```sql
    SELECT name, email 
    FROM users 
    WHERE age > 25;
    ```
    

### **Aggregate Functions**

- PostgreSQL provides several aggregate functions that allow you to perform calculations on a set of records, such as counting the number of records, calculating the sum of a column, or finding the average value.
- Some common aggregate functions include:
    - `COUNT()`: Count the number of rows
    - `SUM()`: Calculate the sum of a column’s values
    - `AVG()`: Calculate the average value of a column
    - `MIN()`: Find the smallest value of a column
    - `MAX()`: Find the largest value of a column
- Example: Find the total number of users and the average age:
    
    ```sql
    SELECT 
    	COUNT(*) AS user_count, 
    	AVG(age) AS average_age 
    FROM users;
    ```
    

### **Joins**

- When you want to retrieve related data from multiple tables, you can use a **`JOIN`** in the query.
- There are various types of joins available, such as **`INNER JOIN`**, **`LEFT JOIN`**, **`RIGHT JOIN`**, **`FULL OUTER JOIN`** and **`CROSS JOIN`**.
- Syntax for a simple **`INNER JOIN`**:
    
    ```sql
    SELECT column1, column2, ...
    FROM table1
    JOIN table2
    ON table1.column = table2.column;
    ```
    
- Example: Fetch user details along with their order details, assuming there are **`users`** and **`orders`** tables, and **`orders`** has a **`user_id`** foreign key:

```sql
SELECT 
		users.name, 
		users.email, 
		orders.order_date, 
		orders.total_amount
FROM users
JOIN orders
ON users.id = orders.user_id;
```

### **Subqueries**

Subqueries, also known as “nested queries” or “inner queries”, allow you to use the result of a query as input for another query. Subqueries can be used with various SQL clauses, such as **`SELECT`**, **`FROM`**, **`WHERE`**, and **`HAVING`**.

Syntax for a subquery:

```sql
SELECT column1, column2, ...
FROM (
	SELECT ... FROM ...
) AS subquery
WHERE conditions;
```

Example: Find the average age of users who have placed orders from the **`users`** and **`orders`** tables:

```sql
SELECT 
	AVG(age) AS average_age
FROM users
WHERE id IN (
	SELECT DISTINCT user_id FROM orders
);
```

There’s much more to explore with various types of queries, but this foundational knowledge will serve as a solid basis for further learning and experimentation.

## Data Types

- PostgreSQL supports a wide range of data types that allow you to store various kinds of information in your database.

### **Numeric Data Types**

- PostgreSQL offers several numeric data types to store integers and floating-point numbers:
    - **`smallint`**: 2 byte signed int between -32,768 and 32,767.
    - **`integer`**: 4 byte signed int between -2^31 and 2^31-1.
    - **`bigint`**: 8 byte signed int between -2^63 and 2^63-1.
    - **`decimal`**: Exact numeric type (such as currency values)
    - **`numeric`**: This is an alias for the `decimal` data type.
    - **`real`**: A 4 byte float with a precision of 6 decimal digits.
    - **`double precision`**: 8 byte float with precision of 15 decimal digits.

### **Character Data Types**

- **`char(n)`**: A fixed-length character string with a specified length `n`.
- **`varchar(n)`**: A variable-length character string with a maximum length of `n`.
- **`text`**: A variable-length character string with no specified maximum length.

### **Binary Data Types**

- **`bytea`**: Store variable-length binary strings such as serialized objects or images.

### **Date and Time Data Types**

- **`date`**: Date without timezone information (YYYY-MM-DD).
- **`time`**: Time values without timezone information (HH:MM:SS).
- **`timestamp`**: Date and time values without timezone information.
- **`timestamptz`**: Date and time values including timezone information.
- **`interval`**: Time interval, like the difference between two timestamps.

### **Boolean Data Type**

- **`boolean`**: Stores a true or false value.

### **Enumerated Types**

- **`CREATE TYPE`**: Used to define your custom enumerated type with a list of allowed values.
    
    ```sql
    CREATE TYPE name AS ENUM (value1, value2, value3, ...); 
    ```
    

### **Geometric and Network Data Types**

- **`point`, `line`, `lseg`, `box`, `polygon`, `path`, `circle`**: Geometric data types to store points, lines, and various shapes.
- **`inet`, `cidr`**: Network data types to store IP addresses and subnets.

## Rows

- A row in PostgreSQL represents a single, uniquely identifiable record with a specific set of fields in a table.
- Each row in a table is made up of one or more columns, where each column can store a specific type of data (e.g., integer, character, date, etc.).
- The structure of a table determines the schema of its rows, and each row in a table must adhere to this schema.

## Columns

- Columns are used to store the actual data within a table and define their attributes such as data type, constraints, and other properties.
- When creating a table, you specify the columns along with their data types and additional properties, if applicable.
- The general syntax for defining columns is as follows:
    
    ```sql
    CREATE TABLE table_name (
      column_name data_type [additional_properties],
      ...,
    );
    ```
    

## Tables

- A **table** is one of the primary data storage objects in PostgreSQL.
- In simple terms, a table is a collection of rows or records, organized into columns.
- Each column has a unique name and contains data of a specific data type.

### **Creating tables**

- To create a table, use the **`CREATE TABLE`** command, followed by the table name, and the columns with their respective data types enclosed in parentheses:
    
    ```sql
    CREATE TABLE table_name (
        column1 data_type,
        column2 data_type,
        ...
    );
    ```
    
    For example:
    
    ```sql
    CREATE TABLE student (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        age INT,
        joined_date DATE
    );
    ```
    

### **Adding constraints to columns**

- Constraints are rules enforced on columns to maintain data integrity.
- Some common constraints include:
    - `NOT NULL`: Column must have a value.
    - `UNIQUE`: Column must have a unique value.
    - `PRIMARY KEY`: Uniquely identifies a record in the table.
    - `FOREIGN KEY`: Links two tables together.
    - `CHECK`: Ensures that the value in the column satisfies a specific condition.
- Constraints can be added either during table creation or using the **`ALTER TABLE`** command.

### **Table indexing**

- Indexes are created to speed up data retrieval.
- They work similarly to book indexes, where it’s easier to find content using an indexed keyword.
- In PostgreSQL, an index can be created on one or more columns of a table.
- To create an index, use the **`CREATE INDEX`** command:
    
    ```sql
    CREATE INDEX index_name 
    ON table_name (
    	column1, 
    	column2, 
    	...
    );
    ```
    

### **Altering tables**

The **`ALTER TABLE`** statement is used to modify existing tables. Some common actions include:

- Adding a new column: `ALTER TABLE table_name ADD COLUMN column_name data_type;`
- Dropping a column: `ALTER TABLE table_name DROP COLUMN column_name;`
- Adding a constraint: `ALTER TABLE table_name ADD CONSTRAINT constraint_name constraint_definition;`
- Dropping a constraint: `ALTER TABLE table_name DROP CONSTRAINT constraint_name;`

### **Deleting tables**

To permanently delete a table and all its data from PostgreSQL, use the **`DROP TABLE`** statement:

```
DROP TABLE table_name;
```

Be cautious when using this command, as there’s no way to recover a table once it’s dropped.

## Schemas

- Schemas are an essential part of PostgreSQL’s object model, and they help provide structure, organization, and namespacing for your database objects.
- A schema is a collection of database objects, such as tables, views, indexes, and functions, that are organized within a specific namespace.

### **Namespacing**

- The primary purpose of using schemas in PostgreSQL is to provide namespacing for database objects.
- Each schema is a namespace within the database and must have a unique name.
- This allows you to have multiple objects with the same name within different schemas.
- For example, you may have a **`users`** table in both the **`public`** and **`private`** schemas.
- Using namespaces helps avoid naming conflicts and can make it easier to organize and manage your database as it grows in size and complexity.

## **Default Schema**

- PostgreSQL comes with a default schema named **`public`**.
- When you create a new database, the **`public`** schema is automatically created for you.
- If you don’t specify a schema when creating a new object, like a table or function, it will be created within the default **`public`** schema.

## **Creating and Using Schemas**

- You can create a new schema using the **`CREATE SCHEMA`** command:
    
    ```sql
    CREATE SCHEMA schema_name;
    ```
    
- To reference a schema when creating or using a database object, you can use the schema name followed by a period and the object name.
- For example, to create a table within a specific schema:
    
    ```sql
    CREATE TABLE schema_name.table_name (
      col1 data_type PRIMARY KEY,
      col2 data_type,
      ...
    );
    ```
    
- When querying a table, you should also reference the schema name:
    
    ```sql
    SELECT * FROM schema_name.table_name;
    ```
    

## **Access Control**

- Schemas are also useful for managing access control within your database.
- You can set permissions on a schema level, allowing you to control which users can access and modify particular database objects.
- This is helpful for managing a multi-user environment or ensuring that certain application components only have access to specific parts of your database.
- To grant access to a specific schema for a user, use the **`GRANT`** command:
    
    ```sql
    GRANT USAGE ON SCHEMA schema_name TO user_name;
    ```
    

## Database Objects

- A **Database** is an essential part of PostgreSQL’s object model, providing a way to organize and manage data efficiently.

### **What is a Database?**

- In PostgreSQL, a database is a named collection of tables, indexes, views, stored procedures, and other database objects.
- Each PostgreSQL server can manage multiple databases, enabling the separation and organization of data sets for various applications, projects, or users.

### **Creating a Database**

- To create a database, you can use the **`CREATE DATABASE`** SQL statement or leverage PostgreSQL utilities like **`createdb`**.
- Here’s an example of a **`CREATE DATABASE`** SQL statement:
    
    ```sql
    CREATE DATABASE database_name;
    ```
    
- Replace **`database_name`** with the desired name for the new database.

### **Managing Databases**

- PostgreSQL provides several SQL commands and utilities to manage databases, including:
    - **Listing databases**
        - Use the `\l` command in the `psql` command-line interface, or execute the `SELECT datname FROM pg_database;` SQL statement.
    - **Switching databases**
        - Use the `\connect` or `\c` command followed by the database name in the `psql` command-line interface.
    - **Renaming a database**
        - Use the `ALTER DATABASE old_name RENAME TO new_name;` SQL statement.
    - **Dropping a database**
        - Use the `DROP DATABASE database_name;` SQL statement or the `dropdb` utility.
        - Be cautious when dropping a database, as it will permanently delete all its data and objects.

### **Database Properties**

- Each PostgreSQL database has several properties that you can configure to fine-tune its behavior and performance, such as:
    - **Encoding**
        - Defines the character encoding used in the database. By default, PostgreSQL uses the same encoding as the server’s operating system (e.g., UTF-8 on most Unix-based systems).
    - **Collation**
        - Determines the sorting rules for strings in the database.
        - By default, PostgreSQL uses the server’s operating system’s default collation.
    - **Tablespaces**
        - Controls where the database files are stored on the file system.
        - By default, PostgreSQL uses the server’s default tablespace.
        - You can create additional tablespaces to store data on different disks or file systems, for performance or backup purposes.
- You can set these properties when creating a new database or altering an existing one using the **`CREATE DATABASE`** and **`ALTER DATABASE`** SQL statements, respectively.
- In conclusion, databases in PostgreSQL provide a powerful and flexible way to manage and organize your data.
- By understanding how databases work and how to manage them, you can effectively structure your data and optimize your applications for performance and scalability.

# Relational Model

## Domains

- Domains in PostgreSQL are essentially user-defined data types that can be created using the **`CREATE DOMAIN`** command.
- These custom data types allow you to apply constraints and validation rules to columns in your tables by defining a set of values that are valid for a particular attribute or field.
- This ensures consistency and data integrity within your relational database.

### **Creating Domains**

- To create a custom domain, you need to define a name for your domain, specify its underlying data type, and set any constraints or default values you want to apply.
- The syntax for creating a new domain is:

```sql
CREATE DOMAIN domain_name AS underlying_data_type  
	[DEFAULT expression]  
	[NOT NULL]  
	[CHECK (condition)];
```

- `domain_name`: The name of the custom domain you want to create.
- `underlying_data_type`: The existing PostgreSQL data type on which your domain is based.
- `DEFAULT expression`: An optional default value for the domain when no value is provided.
- `NOT NULL`: Determines whether null values are allowed in the domain. If set, null values are not allowed.
- `CHECK (condition)`: Specifies a constraint that must be met for values in the domain.

## **Example**

- Suppose you want to create a custom domain to store phone numbers.
- This domain should only accept valid 10-digit phone numbers as input.
- Here’s an example of how you might define this domain:

```sql
CREATE DOMAIN phone_number AS VARCHAR(10)
	NOT NULL
	CHECK (VALUE ~ '^[0-9]{10}$');
```

Now that your **`phone_number`** domain is created, you can use it when defining columns in your tables. For example:

```sql
CREATE TABLE customers (
  id SERIAL PRIMARY KEY,  
  name VARCHAR(50) NOT NULL,  
  phone phone_number
);
```

In this example, the **`phone`** column is based on the **`phone_number`** domain and will only accept values that pass the defined constraints.

## **Modifying and Deleting Domains**

- You can alter your custom domains by using the **`ALTER DOMAIN`** command.
- To delete a domain, you can use the **`DROP DOMAIN`** command.
- Be aware that dropping a domain may affect the tables with columns based on it.

## Attributes

- In the context of a relational database, an **attribute** corresponds to a column in a table.
- Each record (row) within the table will have a value associated with this attribute.
- Attributes describe the properties of the entities stored in a table, serving as a blueprint for the structure of the data.
- For example, consider a table called **`employees`** that stores information about employees in a company.
- The table can have attributes like **`employee_id`**, **`first_name`**, **`last_name`**, **`email`**, and **`salary`**.
- Each of these attributes define a specific aspect of an employee.

## Tuples

- A tuple is defined as an ordered set of attribute values, meaning that each value in a tuple corresponds to a specific attribute or column in the table.
- The values can be of different data types, such as integers, strings, or dates, depending on the schema of the table.
- For example, consider a **`users`** table with columns **`id`**, **`name`**, and **`email`**.
- A sample tuple in this table could be **`(1, 'John Smith', 'john.smith@example.com')`**, where each value corresponds to its respective column.

### **Operations on Tuples**

- PostgreSQL provides a variety of operations that can be performed on tuples, which can be classified into three main categories:
    - **Projection**: This operation involves selecting one or more attributes from a tuple and creating a new tuple with only the selected attributes.
        - For example, projecting the **`name`** and **`email`** attributes from the previously mentioned tuple would result in **`('John Smith', 'john.smith@example.com')`**.
    - **Selection**: Selection involves filtering tuples based on a specific condition.
        - For example, you may want to select all tuples from the **`users`** table where the **`email`** attribute ends with “@example.com”.
    - **Join**: The join operation combines tuples from two or more tables based on a common attribute or condition.
        - For example, if we have another table called **`orders`** with a **`user_id`** column, we could use a join operation to retrieve all records from both tables where the **`users.id`** attribute matches the **`orders.user_id`**.

## Relations

- A relation, sometimes referred to as a table, represents a collection of related information in a structured format.
- In the relational model, data is organized into rows and columns within a table.
- Each row in a table (also known as a tuple or record) represents a single record or instance of the data, while columns (also known as attributes or fields) represent the properties of that data.
- For example, a table representing a list of employees might have columns for employee ID, name, department, and salary, and each row in the table would represent a unique employee with their specific attributes.

### **Key Characteristics of Relations**

- There are a few essential characteristics of relations:
    - **Header**: The header is the set of column names, also referred to as the schema, which describes the structure of the table. Column names within a table must be unique, and each column should have a specific data type (e.g., integer, text, date).
    - **No Duplicate Rows**: In a relation, each row must be unique, ensuring there are no duplicate records. This constraint maintains data integrity and consistency.
    - **Order Doesn’t Matter**: In the relational model, the order of rows and columns within a table is not important. When querying the database, you can request the data in any desired order.
    - **Keys**: A key is a minimal set of columns (attribute(s)) that can uniquely identify each row within the table. There are two types of keys:
        - **Primary Key**: A primary key is a column or a set of columns that uniquely identify each row. A table can have only one primary key. Primary keys ensure data consistency and act as a reference for other tables in the database.
        - **Foreign Key**: A foreign key is a column or set of columns that refer to the primary key of another table. This relationship enforces referential integrity, ensuring that data across tables remains consistent.

## Constraints

- Constraints are an essential part of the relational model, as they define rules that the data within the database must follow.
- They ensure that the data is consistent, accurate, and reliable.

### **Primary Key**

- A primary key constraint is a column or a set of columns that uniquely identifies each row in a table.
- There can only be one primary key per table, and its value must be unique and non-null for each row.
    
    ```sql
    CREATE TABLE users (
      id SERIAL PRIMARY KEY,
      username VARCHAR(100) NOT NULL,
      email VARCHAR(100) NOT NULL
    );
    ```
    

### **Foreign Key**

- A foreign key constraint ensures that a column or columns in a table refer to an existing row in another table.
- It helps maintain referential integrity between tables.
    
    ```sql
    CREATE TABLE orders (
      order_id SERIAL PRIMARY KEY,
      user_id INTEGER,
      product_id INTEGER,
      FOREIGN KEY (user_id) REFERENCES users (id),
      FOREIGN KEY (product_id) REFERENCES products (id)
    );
    ```
    

### **Unique**

- A unique constraint ensures that the values in a column or set of columns are unique across all rows in a table.
- In other words, it prevents duplicate entries in the specified column(s).

```sql
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(100) UNIQUE NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL
);
```

### **Check**

- A check constraint verifies that the values entered into a column meet a specific condition.
- It helps to maintain data integrity by restricting the values that can be inserted into a column.

```sql
CREATE TABLE products (
  product_id SERIAL PRIMARY KEY,
  product_name VARCHAR(100) NOT NULL,
  price NUMERIC CHECK (price >= 0)
);
```

### **Not Null**

- A NOT NULL constraint enforces that a column cannot contain a NULL value.
- This ensures that a value must be provided for the specified column when inserting or updating data in the table.

```sql
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL
);
```

### **Exclusion**

- An exclusion constraint is a more advanced form of constraint that allows you to specify conditions that should not exist when comparing multiple rows in a table.
- It helps maintain data integrity by preventing conflicts in data.

```sql
CREATE TABLE reservation (
  user_id INTEGER,
  reserved_from TIMESTAMP NOT NULL,
  reserved_to TIMESTAMP NOT NULL,
  EXCLUDE USING gist (
	  user_id WITH =, 
	  tsrange(reserved_from, reserved_to) WITH &&
	)
);
```

## NULL

- One of the important concepts in the relational model is the use of **`NULL`** values.
- **`NULL`** is a special marker used to indicate the absence of data, meaning that the field has no value assigned, or the value is simply unknown.
- It is important to note that **`NULL`** is not the same as an empty string or a zero value, it stands for the absence of any data.

### **Representing Unknown or Missing Data**

- Consider the scenario where you have a table named **`employees`**, with columns like **`name`**, **`email`**, and **`birthdate`**.
- It’s possible that some employees don’t provide their birthdate or email address.
- In such cases, you can use **`NULL`** to indicate that the data is not available or unknown

```sql
INSERT INTO employees (
	name, 
	email, 
	birthdate
) VALUES (
	'John Doe', 
	NULL, 
	'1990-01-01'
);
```

### **NULL in Constraints and Unique Values**

- While creating a table, you can set constraints like **`NOT NULL`**, which ensures that a specific column must hold a value and cannot be left empty.
- If you try to insert a row with **`NULL`** in a **`NOT NULL`** column, PostgreSQL will raise an error.
- On the other hand, when using unique constraints, multiple **`NULL`** values are considered distinct, meaning you can have more than one **`NULL`** value even in a column with a unique constraint.

### **Comparing NULL Values**

- When comparing **`NULL`** values, you cannot use the common comparison operators like **`=`**, **`<>`**, **`<`**, **`>`**, or **`BETWEEN`**.
- Instead, you should use the **`IS NULL`** and **`IS NOT NULL`** operators to check for the presence or absence of **`NULL`** values.
- The ’`=`’ operator will always return **`NULL`** when compared to any value, including another null value.

Example:

```sql
-- Find all employees without an email address
SELECT * FROM employees WHERE email IS NULL;

-- Find all employees with a birthdate assigned
SELECT * FROM employees WHERE birthdate IS NOT NULL;
```

### **NULL in Aggregate Functions**

- When dealing with aggregate functions like **`SUM`**, **`AVG`**, **`COUNT`**, etc., PostgreSQL ignores **`NULL`** values and only considers the non-null data.

Example:

```sql
-- Calculate the average birth year of employees without including NULL values
SELECT AVG(
	EXTRACT(
		YEAR FROM birthdate
	)
) FROM employees;
```

### **Coalescing NULL values**

- Sometimes, you may want to replace **`NULL`** values with default or placeholder values.
- PostgreSQL provides the **`COALESCE`** function, which allows you to do that easily.

Example:

```sql
-- Replace NULL email addresses with 'N/A'
SELECT 
	name, COALESCE(
		email, 'N/A'
	) as email, 
	birthdate
FROM employees;
```

# RDBMS Concepts

## ACID Properties

- When you’re building and maintaining an application, **the last thing you want to worry about is data integrity**;
- Charging a customer the wrong amount or losing their data can be catastrophic.
- Thankfully, the databases you’re using — like MySQL and Postgres — take special measures to make sure that doesn’t happen.
- But what’s going on behind the hood? Most modern SQL DBs use transactional standards like ACID to ensure data integrity and keep your users from seeing wrong or stale data, and this post explores how they work.

### Things that can go wrong with transactions

- A database transaction is a series of logically grouped database operations:
    - insert a row here, update a record there, and more stuff like that.
    - Your application code is constantly making transactions every time you sign up a new user or that user updates their account information.
- The thing about transactions, though, is that they can go very wrong.
- Any number of things can happen when you’re trying to write to your database:
    - you can lose connection to a remote instance,
    - you can encounter value errors, or anything else under the sun.
- You’ve seen it, you’ve dealt with it, and it can mean disaster for your underlying data.
- Let’s take an e-commerce example
    - User updates order quantity and clicks “order now” →
    - Update order quantity in the pending orders table
    - Add row to orders table
    - Apply the purchase to user’s balance / charge credit card
- If something goes wrong in the middle of this group of operations but the system continues executing them, the user will get charged the wrong amount.
- And if the charge doesn’t work, they’ll get their order for free.

### Dirty Reads

- If a transaction is in the middle of updating some data and hasn’t committed yet, and another transaction is allowed to read that uncommitted data, that’s dirty, and could lead to your app showing incorrect data that got rolled back.
- An example of a dirty read could be a transaction that invalidates login tokens when a user changes their password.
- If as the first transaction loads the token, a second one reads that token before the first invalidates it, you’d have yourself a dirty read.

```sql
### Transaction 1 ###

SELECT user_login_token_id
FROM tokens

UPDATE tokens
SET token_status = "INVALID"
WHERE token_id = user_login_token_id

### Transaction 2 ###

SELECT user_login_token_id
FROM tokens
```

### Non-repeatable Reads

- If you’ve got two consecutive reads in one transaction with a concurrent update in between, those reads are going to show different results even though they’re part of the same transaction.
- An example might be two writers working on a blog.
    - Our first user starts a transaction that reads a post’s title, writes to the post, and then reads that post’s title again.
    - If a second user changes that post’s title in the middle of the first user’s transaction, the first user is going to see different values for the title across the two reads; or in other words, a non-repeatable read.

```sql
### Transaction 1 ###

SELECT post_title
FROM posts

SELECT
    post_title,
    post_content
FROM posts

### Transaction 2 ###

UPDATE posts
SET post_title = "something_new"
WHERE post_title = post_title
	
```

### Phantom Reads

- If a transaction reads data and then a concurrent transaction inserts data that would have been read in the original transaction, that’s a phantom read.
- Let’s use the same example as a non-repeatable read: if our second user adds content in between our first user’s two reads, the first read will be missing data that appears in the second read (this is actually really similar to a non-repeatable read, which is why the same example works).

```sql
### Transaction 1 ###

SELECT post_title
FROM posts

SELECT
    post_title,
    post_content
FROM posts

### Transaction 2 ###

INSERT INTO posts
VALUES "something_new", ...
```

### ACID Explained

- Popular relational databases like MySQL avoid these kinds of data integrity issues by following a few core principles that govern how transactions work.
- They conform to a transactional standard called ACID.
- ACID is an acronym for four different words, but it really breaks down into two core principles: completeness and concurrency.
- First, here’s what ACID stands for:
    - **Atomicity**: the “all or nothing” rule — the transaction either happens completely or doesn’t happen at all
    - **Consistency**: data is consistent before and after a transaction without any missing steps
    - **Isolation**: multiple transactions can happen concurrently without reading the wrong data
    - **Durability**: transactional success is robust to system failure
- These overlap a lot, so just remember: the point of any ACID compliant DB is to make sure that
    - Transactions can fail without hurting data integrity
    - Multiple transactions can occur concurrently without reading and writing the wrong data
- ACID is a set of properties, but it’s not a process:
    - how do the SQL databases we use actually achieve ACID compliance?
    - They use a system called locking to keep the database on hold while transactions happen.
    - Locking works like you’d imagine it would:
        - when a transaction begins, the database engine locks the data that it’s working with until the transaction is completed (and sometimes, beyond that).
        - That way, concurrent transactions can’t work with the data that’s being changed by the first transaction.
    - Once a transaction begins and acquires a lock, it can either finish successfully and commit, or run into an error and abort.
    - It’s sort of like writing in an Excel spreadsheet before saving your work — things are changed, but only softly, until you save them (commit) or revert them (abort).
    - Back to our ecommerce example: if our database runs into an error right after updating a user’s order quantity, the transaction will abort, and it’s as if that update never happened.
    - And if the error happened during the update, the credit card will never get charged.
    - Either everything happens or nothing happens, and that’s ACID.

### BASE

- **Basic Availability**: the database basically works most of the time, even though it’s not perfect
- **Soft-State**: nodes of the database aren’t necessarily consistent with each other all the time
- **Eventual Consistency**: data will be consistent across nodes eventually, like by read time
- In a lot of ways, this is the exact opposite of ACID, and prioritizes availability over perfect consistency; but that’s kind of the point of NoSQL in the first place.

## MVCC

- Multi-Version Concurrency Control (MVCC) is a technique used by PostgreSQL to allow multiple transactions to access the same data concurrently without conflicts or delays.
- It ensures that each transaction has a consistent snapshot of the database and can operate on its own version of the data.

### **Key Features of MVCC**

- **Transaction isolation**: Each transaction has its own isolated view of the database, which prevents them from seeing each other’s uncommitted data (called a snapshot).
- **Concurrency**: MVCC allows multiple transactions to run concurrently without affecting each other’s operations, thus improving system performance.
- **Consistency**: MVCC ensures that when a transaction accesses data, it always has a consistent view, even if other transactions are modifying the data at the same time.

### **How MVCC Works**

- When a transaction starts, it gets a unique transaction ID (TXID). This ID is later used to keep track of changes made by the transaction.
- When a transaction reads data, it only sees the data that was committed before the transaction started, as well as any changes it made itself. This ensures that every transaction has a consistent view of the database.
- Whenever a transaction modifies data (INSERT, UPDATE, or DELETE), PostgreSQL creates a new version of the affected rows and assigns the new version the same TXID as the transaction. These new versions are called “tuples”.
- Other transactions running at the same time will only see the old versions of the modified rows since their snapshots are still based on the earlier state of the data.
- When a transaction is committed, PostgreSQL checks for conflicts (such as two transactions trying to modify the same row). If there are no conflicts, the changes are permanently applied to the database, and other transactions can now see the updated data.

### **Benefits of MVCC**

- **High performance**: With MVCC, reads and writes can occur simultaneously without locking, leading to improved performance, especially in highly concurrent systems.
- **Consistent data**: Transactions always work on a consistent snapshot of the data, ensuring that the data is never corrupted by concurrent changes.
- **Increased isolation**: MVCC provides a strong level of isolation between transactions, which helps prevent errors caused by concurrent updates.

### **Drawbacks of MVCC**

- **Increased complexity**: Implementing MVCC in a database system requires more complex data structures and algorithms compared to traditional locking mechanisms.
- **Storage overhead**: Multiple versions of each data item must be stored, which can lead to increased storage usage and maintenance overhead.

## Transactions

- Transactions are a fundamental concept in PostgreSQL, as well as in most other database management systems.
- A transaction is a sequence of one or more SQL statements that are executed as a single unit of work.
- Transactions help ensure that the database remains in a consistent state even when there are multiple users or operations occurring concurrently.
- Transactions must follow ACID properties.

### **Transaction Control Statements**

In PostgreSQL, you can use the following transaction control statements to manage transactions:

- **`BEGIN`**: Starts a new transaction.
- **`COMMIT`**: Ends the current transaction and makes all changes made during the transaction permanent.
- **`ROLLBACK`**: Reverts all changes made during the current transaction and ends the transaction.
- **`SAVEPOINT`**: Creates a savepoint to which you can later roll back.
- **`ROLLBACK TO savepoint`**: Rolls back the transaction to the specified savepoint.
- **`RELEASE savepoint`**: Releases a savepoint, which allows you to commit changes made since the savepoint.

## **Example Usage**

Here’s an example to illustrate the use of transactions:

```sql
BEGIN; -- Start a transaction

INSERT INTO employees (name, salary) VALUES ('Alice', 5000);
INSERT INTO employees (name, salary) VALUES ('Bob', 6000);

-- Other SQL statements...

COMMIT; -- Commit the transaction and make changes permanent

-- In case of an issue, you can use ROLLBACK to revert changes
ROLLBACK; -- Roll back the transaction and undo all changes 
```

## Write-ahead Log

- In PostgreSQL, the Write Ahead Log (WAL) is a crucial component that ensures data durability and consistency.
- The primary purpose of the WAL is to guarantee that the database state is recoverable to a consistent state even in the event of a crash or hardware failure.

### **Overview of WAL**

- The Write Ahead Log is a technique where any modification to the data is first recorded in the log before being written into the main data storage.
- WAL ensures that any write operation is atomic, i.e., it either completes successfully or not at all.

### **How WAL Works**

- **Write operation:** When a change is made to the data, PostgreSQL writes the changes to the WAL buffer instead of immediately modifying the disk pages.
- **Flush operation:** Once the transaction is committed, the WAL buffer contents are flushed to the on-disk WAL file.
- **Checkpoint:** The background writer process writes the ‘dirty’ pages from the shared buffer to the main data files at specific intervals called ‘checkpoints.’ It ensures that the actual data files are updated to match the state recorded in the WAL logs.

### **Benefits of WAL**

- **Recovery:** WAL ensures that the database can recover from a system crash or power failure by replaying the changes recorded in the WAL files.
- **Concurrency:** WAL improves concurrency and performance by allowing multiple transactions to proceed simultaneously without conflicting with each other.
- **Archive and Replication:** WAL files can be archived and used for point-in-time recovery, or it can be streamed to a standby server for a real-time backup or read-only queries.

## Query Processing

- Query processing in PostgreSQL involves several stages, from parsing SQL queries to producing the final result set. To understand the complete process, let’s dive into each stage:
    - **Parsing**
        - This is the first stage in query processing, where the SQL query is broken down into smaller components and checked for any syntactical errors.
        - The parser creates a parse tree, a data structure representing the different elements of the query.
    - **Rewriting**: At this stage, the parse tree might be modified to apply any necessary optimization or transformation. Examples include removing redundant conditions, simplifying expressions, expanding views, and applying security-related checks.
    - **Optimization**: This stage involves selecting the best execution plan from multiple alternatives. The query optimizer evaluates various strategies based on factors like the availability of indexes, the size of the tables, and the complexity of the conditions in the query. The cost of each plan is estimated, and the one with the lowest cost is chosen as the final plan.
    - **Plan Execution**: The selected execution plan is converted into a series of low-level operations, which are then executed by the executor. The executor retrieves or modifies the data as specified by the plan, executing the required joins, filtering, aggregations, and sorting steps.
    - **Returning Results**: After the successful execution of the plan, the final result set is sent back to the client application. This result set might be in the form of rows of data, a single value, or a confirmation message of completed operations.

## **Key Components in Query Processing**

There are several key components of PostgreSQL’s query processing engine:

- **Parser**: The component responsible for breaking down SQL queries and creating parse trees.
- **Optimizer**: The part of the system that evaluates and chooses the optimal execution plan for a given query.
- **Executor**: The component that runs the selected execution plan, performing the required operations to retrieve or modify the data.
- **Statistics Collector**: This component gathers essential information about the status of the database, including table sizes, distribution of the data, and access frequency. This information is used by the optimizer to make better decisions when choosing execution plans.

## Normalization

- Normalization is a process of systematically organizing data in the database to reduce redundancy, improve consistency, and ensure data integrity.
- The normalization rules are divided into several forms, such as First Normal Form (1NF), Second Normal Form (2NF), Third Normal Form (3NF), and so on.
- Each form imposes a set of constraints to achieve a higher degree of data organization and consistency.

# SQL Concepts

## DDL Queries

### Schemas

```sql
// Creating a schema
CREATE SCHEMA schema_name;

// Display all available schemas in the database
SELECT * FROM information_schema.schemata;

// Dropping a schema without deleting objects if any present
DROP SCHEMA IF EXISTS schema_name;

// Delete a schema with its contained objects
DROP SCHEMA schema_name CASCADE;
```

### Tables

```sql
// Create a new table
CREATE TABLE table_name (
	id SERIAL PRIMARY KEY,
	name VARCHAR(30) NOT NULL,
	...
);

// Add a column to table
ALTER TABLE table_name 
ADD COLUMN email VARCHAR(100) UNIQUE;

// Modify column's data type
ALTER TABLE table_name
ALTER COLUMN email TYPE VARCHAR(255);

// Drop a column
ALTER TABLE table_name
DROP COLUMN email;

// Add a foreign key constraint
ALTER TABLE table_name
ADD CONSTRAINT fk_id FOREIGN KEY (id) REFERENCES another_table(id)

// Drop a table
DROP TABLE table_name;

// Delete data and its dependent objects
DROP TABLE table_name CASCADE;

// Delete data without deleting the table itself
TRUNCATE TABLE table_name;

// Export the contents of the table into a csv
COPY table_name (column1, column2, ...)
TO "path/to/csv/file.csv" WITH CSV HEADER;

// Import data from a CSV into the table
COPY table_name (column1, column2, ...)
FROM "path/to/csv/file.csv" WITH CSV HEADER;
```

## DML Queries

### Querying/Modifying Data

```sql
// Query all columns from the table
SELECT * FROM employees;

// Query Selected columns from the table
SELECT first_name, last_name FROM employees;

// Query based on some condition
SELECT * FROM employees WHERE salary > 40000;

// Query records based on some sorting order
SELECT first_name, last_name, salary FROM employees ORDER BY salary ASC;

// Inserting single row into the table
INSERT INTO employees (first_name, last_name, salary)
VALUES ('John', 'Doe', 50000);

// Inserting multiple rows into the table
INSERT INTO employees (first_name, last_name, salary)
VALUES 
	('John', 'Doe', 50000), 
	('Jane', 'Doe', 55000);

// Updating a single record
UPDATE employees
SET salary = 60000
WHERE employee_id = 1;

// Updating multiple records
UPDATE employees
SET salary = salary * 1.1
WHERE salary < 50000;

// Deleting a single record
DELETE FROM employees
WHERE employee_id = 1;

// Deleting multiple records
DELETE FROM employees
WHERE salary < 40000;
```

### Filtering Data based on Conditions

```sql
// Select Where value of a column is greater than something
SELECT * 
FROM employees
WHERE salary > 4000;

// Logical AND
SELECT * 
FROM employees
WHERE department = 'IT' AND salary >= 4500;

// Logical OR
SELECT * 
FROM employees
WHERE position = 'Manager' OR salary <= 4000;
```

### Joining Tables

```sql
// Inner Join = Intersection
// Left Join = Intersection + All Left Rows
// Right Join = Intersection + All right rows
// Outerr Join = Intersection + Both left and right rows.

// Join Syntax
SELECT columns
FROM table1
JOIN table2 ON table1.column = table2.column;
```

## Advanced Topics

### Transactions and Isolation Levels

- In PostgreSQL, transactions can be configured to operate at different isolation levels to control how they interact with each other and with the database.
- The four standard isolation levels defined by the SQL standard and supported by PostgreSQL are:
    1. **Read Committed**: Default level in PostgreSQL. A transaction sees only data committed before the transaction begins.
    2. **Repeatable Read**: A transaction sees a snapshot of the database as of the start of the transaction, preventing any changes made by other transactions from being visible.
    3. **Serializable**: Highest level of isolation. Transactions are executed in a way that they appear to be run sequentially, ensuring complete isolation.

```sql
// Read Committed
BEGIN TRANSACTION ISOLATION LEVEL READ COMMITTED;
	SELECT * FROM accounts 
	WHERE balance > 1000;
	UPDATE accounts 
	SET balance = balance - 100 
	WHERE account_id = 1;
COMMIT;

// Repeatable Read
BEGIN TRANSACTION ISOLATION LEVEL REPEATABLE READ;
	SELECT * FROM products 
	WHERE category = 'Electronics';
	UPDATE products 
	SET price = price * 1.10 
	WHERE category = 'Electronics';
COMMIT;

// Serializable
BEGIN TRANSACTION ISOLATION LEVEL SERIALIZABLE;
	INSERT INTO orders (order_id, product_id, quantity) 
	VALUES (1, 101, 2);
	UPDATE inventory 
	SET stock = stock - 2 
	WHERE product_id = 101;
COMMIT;

// Set Isolation levels for a given session
SET SESSION CHARACTERISTICS AS TRANSACTION ISOLATION LEVEL SERIALIZABLE;
BEGIN;
		// Your SQL statements here
COMMIT;

// Check isolation levels
SHOW TRANSACTION ISOLATION LEVEL;
```

### Common Table Expressions (CTE)

- Common Table Expressions (CTEs) are a powerful feature in PostgreSQL that allow you to create temporary result sets that can be referenced within a `SELECT`, `INSERT`, `UPDATE`, or `DELETE` statement.
- CTEs improve the readability and maintainability of complex queries by breaking them down into simpler, more manageable parts.
- CTEs are defined using the `WITH` keyword, followed by one or more subqueries that define the CTEs.
- Each subquery is given a name, and these named result sets can be referenced in the main query that follows.
- Example:
    - Suppose you have a scenario where you need to find:
        1. The total number of orders placed by each customer.
        2. The total amount spent by each customer.
        3. Customers who have placed more than a certain number of orders and have spent more than a certain amount.
        
        ```sql
        WITH order_count AS (
            SELECT
                customer_id,
                COUNT(order_id) AS total_orders
            FROM orders
            GROUP BY customer_id
        ),
        order_total AS (
            SELECT
                customer_id,
                SUM(amount) AS total_amount
            FROM orders
            GROUP BY customer_id
        ),
        high_value_customers AS (
            SELECT
                c.customer_id,
                c.name,
                oc.total_orders,
                ot.total_amount
            FROM customers c
            JOIN order_count oc ON c.customer_id = oc.customer_id
            JOIN order_total ot ON c.customer_id = ot.customer_id
            WHERE oc.total_orders > 1 AND ot.total_amount > 200
        )
        SELECT * FROM high_value_customers;
        ```
        

### Aggregate Functions

```sql
// Count number of matching rows
SELECT COUNT(*) AS total_employees FROM employees;

// Sum the values of an attribute for all matching rows
SELECT SUM(salary) AS total_salary FROM employees;

// Average of an attribute for all matching rows
SELECT AVG(salary) AS average_salary FROM employees;

// Max value of an attribute for all matching rows
SELECT MAX(salary) AS highest_salary FROM employees;

// Min value of an attribute for all matching rows
SELECT MIN(salary) AS lowest_salary FROM employees;

// Display the matching attributes from all rows as array
SELECT ARRAY_AGG(name) AS employee_names FROM employees;

// Display the matching attributes from all rows as a string
SELECT STRING_AGG(name, ', ') AS employee_names FROM employees;

// Group by
SELECT
    department_id,
    COUNT(*) AS total_employees,
    SUM(salary) AS total_salary,
    AVG(salary) AS average_salary
FROM employees 
GROUP BY department_id;
    
// Having
SELECT
    department_id,
    AVG(salary) AS average_salary
FROM employees
GROUP BY department_id
HAVING AVG(salary) > 60000;

// Over
SELECT
    employee_id,
    name,
    salary,
    SUM(salary) OVER (ORDER BY employee_id) AS running_total
FROM employees;
```