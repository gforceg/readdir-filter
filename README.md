like fs.readdir but with a filter function:

example usage: 

typescript usage:
```typescript

import { readdirFilter } from 'readdir-filter'
// only retrieve directories that start with an alpha
readdirFilter(some_path, ()
  (file_name: string, stats: fs.Stats) =>
    stats.isDirectory() // is a directory
    && fie_name.match(/^[a-z]/i)) // starts with an alpha
    ).then(alpha_dirs: string[]) => {
    // do stuff w/ alpha_dirs here
}, (ex) { throw ex })

```

javascript usage:
```javascript

const readdirFilter = require('readdir-filter').default
readdirFilter('tests/', (
  (fso_name, stats) =>
    fso_name.match(/^[a-z]i/) // starts with an alpha
    && stats.isDirectory()()) // is a directory
  ).then((alpha_dirs_arr) => {
    // do stuff w/ alpha_dirs here
  }, (ex) => { throw ex })
```