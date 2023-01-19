export const Path = 'events/'

export const Init = (bot, files: Array<any>) => {
    var events: Event[] = []

    files.forEach(e => {
        bot.on(e.Name, (...args) => e.Executor(bot, ...args))
    })
}