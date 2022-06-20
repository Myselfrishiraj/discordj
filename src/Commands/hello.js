const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("hello")
    .setDescription("Say Hello To me!"),
  execute: async (interaction, client) => {
    return interaction.reply({ content: "hulaaaaaaaa https://media.discordapp.net/attachments/977215987902455888/988340985547358248/image0.gif" });
  },
};
