export const Name = 'message'
export const Executor = (client, channel: string, tags, message: string) => {
    console.log(message)
}