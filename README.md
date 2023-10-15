# Installation
1. install [Node.js](https://nodejs.org) 18 or newer
2. clone repository or download code
3. run `install.sh` or `install.bat`
4. run `start.sh` or `start.bat`

# Usage

## GET 

**POST** `your_address/get`
JSON parameters:
1. array of requested keys

Example:
```bash
curl -X POST \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -d '["test", "Hello World"]' \
  "http://127.0.0.1/get"
```
Example response (assuming both "test" and "Hello World" keys exist): 
```json
{
	"test": "123",
	"Hello World": "Hello world!",
}
```

## SET


**POST** `your_address/set`

JSON parameters:
1. object of keys and values

Example:
```bash
curl -X POST \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -d '{"test":"123","Hello World": "Hello world!"}' \
  "http://127.0.0.1/set"
```
Example response
```json
{
	"test": "Set",
	"Hello World": "Set"
}
```
## DEL


**DELETE** `your_address/del`

JSON parameters:
1. array of keys

Example:
```bash
curl -X POST \
  -H "Accept: application/json" \
  -H "Content-type: application/json" \
  -d '["test"]' \
  "http://127.0.0.1/del"
```
Example response
```json
{
	"test": "Deleted"
}
```
# TODO
- Authorization and keys
- Other redis operations
- - Lists
- - Sets
- - Hashes