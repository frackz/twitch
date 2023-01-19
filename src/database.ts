import { createConnection } from 'mysql'
import { Database } from './config.js'
import { Query } from './types.js'

export const MySQL = createConnection(Database)

export const query = (query, ...args) => {
    return new Promise<Query>((res) => {
        MySQL.query(query, args, (err, result : Array<Object>) => {
            res({
                all: () => {
                    if (result == null) return null
                    if (result.length > 0) return result
                    return null
                },
                get: () => {
                    return (result || [null])[0]
                }
            })
        })
    })
}