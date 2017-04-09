import * as path from 'path'
const join = path.join
import * as fs from 'fs'

export default function readdirFilter(dir_path: string, condition?: (fso_name: string, stats: fs.Stats) => boolean): Promise<string[]> {
  return new Promise<string[]>((resolve, reject) => {
    let counter = 0
    let matches: string[] = []
    fs.readdir(dir_path, (err, fsos) => {
      if (err) reject(err)
      fsos.forEach((fso_name) => {
        fs.stat(join(dir_path, fso_name), (err, stats) => {
          if (err) reject(err)
          if (condition(fso_name, stats)) matches.push(fso_name)
          if (counter++ == fsos.length - 1) { resolve(matches) }
        })
      })
    })
  })
}
