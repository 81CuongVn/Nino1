import { Precondition, type PreconditionResult } from '@sapphire/framework'
import type { CommandInteraction, GuildMember, Message } from 'discord.js'

export class channelView extends Precondition {
	public override chatInputRun(interaction: CommandInteraction): PreconditionResult {
		const guildMe = interaction.guild!.me as GuildMember
		const guildMember = interaction.member as GuildMember
		const vChannel = guildMember.voice.channel

		if (!vChannel?.permissionsFor(guildMe).has('VIEW_CHANNEL')) {
			return this.error({
				message: 'You must be able to view this channel to use this command.',
			})
		}
		return this.ok()
	}

	public override messageRun(message: Message): PreconditionResult {
		const guildMe = message.guild!.me as GuildMember
		const guildMember = message.member as GuildMember
		const vChannel = guildMember.voice.channel

		if (!vChannel?.permissionsFor(guildMe).has('VIEW_CHANNEL')) {
			return this.error({
				message: 'You must be able to view this channel to use this command.',
			})
		}
		return this.ok()
	}
}