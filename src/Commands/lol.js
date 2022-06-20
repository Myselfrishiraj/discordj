const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("lol")
    .setDescription("Get the bots latency!"),
  execute: async (interaction, client) => {
    return interaction.reply({ content: `Pong \`${client.ws.ping}ms\` 🏓` });
  },
};
