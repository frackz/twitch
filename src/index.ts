import { Handler } from "./handler.js";
import { Client } from 'tmi.js'

import { Username, Password, Channel } from "./config.js";

const Convert = (path) => {return path.split('dist//')[1]}

export const Bot = new Client({
    options: { debug: true },
    identity: {
        username: Username,
        password: Password
    },
    channels: [ Channel ]
})

Bot.connect().catch(console.error)

new Handler('handler/').find(async (file: string) => {
    const { Path, Event, Executor, Init } = await import('./'+Convert(file))
    
    if (Event) Bot.on(Event, (...args) => Executor(Client, ...args))

    const Files = []

    new Handler(Path).find(async (file: string) => Files.push(await import('./'+Convert(file))))

    setTimeout(() => Init(Bot, Files), 50)
})