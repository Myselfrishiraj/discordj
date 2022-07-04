client.on("messageCreate", async message => { if (message.content.toLowerCase().includes(' andy ')) { message.channel.send("Test") } })
