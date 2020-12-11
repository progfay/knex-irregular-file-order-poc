# POC of irregular seed file execution order in knex.js

## Prepare

```sh
npm ci
```

## Execute

```sh
npm exec knex seed:run --knexfile knexfile.js
```

### First time

- Unsorted order file execution

```sh
❯ npm exec knex seed:run --knexfile knexfile.js
Working directory changed to ~/poc
# POC of irregular seed file running order in knex.js
000
001
004
002
003
006
005
007
008
009
Ran 10 seed files
```

### Second time

- Unsorted order file execution
- It's not same as first time order

```sh
❯ npm exec knex seed:run --knexfile knexfile.js
Working directory changed to ~/poc
000
001
002
004
005
003
006
007
008
009
Ran 10 seed files
```
