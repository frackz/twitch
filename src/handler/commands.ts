export const Path = 'commands/'

var commands = {}

import { Prefix } from "../config.js"

export const Event = 'message'
export const Executor = (client, channel: string, tags, message: string) => {
    if (message[0] == Prefix) {
        const data = commands[(message.split(' ')[0].replace(Prefix,''))]
        if (data == null) return

        data(client, channel, tags, message)
    }
}

export const Init = (bot, files: Array<any>) => files.forEach(e => commands[e.Name] = e.Executor)