like fs.readdir but with a filter function:

example usage: 

```typescript
// only retrieve directories
readdirFilter(some_path, ((file_name: string, stats: fs.Stats) => stats.isDirectory() && fie_name.match(/^[a-z]/i)))
.then(directory_names) => {
  console.log('found all directories in', some_path, 'that start with an alpha')
}, (ex) { console.log('oh no something went wrong!') })

```