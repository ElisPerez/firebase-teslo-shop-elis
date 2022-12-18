# Operadores en Mongo

## Listado de operadores RELACIONALES

- `$eq`: equal - igual
- `$lt`: low than - menor que
- `$lte`: low than equal - menor o igual que
- `$gt`: greater than - mayor que
- `$gte`: greater than equal - mayor o igual que
- `$ne`: not equal - distinto
- `$in`: in - dentro de
- `$nin`: not in - no dentro de

## Listado de operadores LOGICOS

- `$and`:
- `$or`:
- `$not`:

# Evaluation Query Operators

Link: [https://www.mongodb.com/docs/manual/reference/operator/query-evaluation/#evaluation-query-operators](https://www.mongodb.com/docs/manual/reference/operator/query-evaluation/#evaluation-query-operators)

- `$expr`: Allows use of aggregation expressions within the query language.
- `$jsonSchema`: Validate documents against the given JSON Schema.
- `$mod`: Performs a modulo operation on the value of a field and selects documents with a specified result.
- `$regex`: Selects documents where values match a specified regular expression.
- `$text`: Performs text search.
- `$where`: Matches documents that satisfy a JavaScript expression.

### `$text`

Link: [https://www.mongodb.com/docs/manual/reference/operator/query/text/](https://www.mongodb.com/docs/manual/reference/operator/query/text/)
