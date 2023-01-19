export const Path = 'events/'

var commands = {}

export const Event = 'message'
export const Executor = (client, channel: string, tags, message: string) => {
    if (message[0] == '>') {
        const split = message.split(' ')
        const cmd = split[0].replace('>','')

        const data = commands[cmd]

        if (data != null) {
            data(
                client,
                channel,
                tags,
                message
            )
        }
    }
}

export const Init = (bot, files: Array<any>) => {
    files.forEach(e => {
        commands[e.Name] = e.Executor
    })
}