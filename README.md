1. `npm i`
2. Edit the database config in `config/`
3. Replace the line in `node_modules/sequelize/lib/dialects/abstract/query-generator/helpers/quote.js`
    
before: https://github.com/sequelize/sequelize/blob/9f950cbcbdd659d559496b77c40e0f827b108561/lib/dialects/abstract/query-generator/helpers/quote.js#L68

after:
```
let cleanIdentifier = identifier.replace(/[[\]']+/g, '');
return cleanIdentifier.endsWith('.dbo') ? cleanIdentifier.split('.').map(part => `[${part}]`).join('.') : `[${cleanIdentifier}]`;
```

4. `npm run createDb`
5. `npm run migrateDb`
6. `npm run dev`
7. Open `http://localhost:48790/getList`
