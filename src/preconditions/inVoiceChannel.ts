import { Precondition, type PreconditionResult } from '@sapphire/framework'
import type { CommandInteraction, GuildMember } from 'discord.js'

export class inVoiceChannel extends Precondition {
	public override chatInputRun(interaction: CommandInteraction): PreconditionResult {
		const member = interaction.member as GuildMember
		const vChannel = member.voice.channel

		if (!vChannel) {
			return this.error({
				message: 'You must be in voice channel to use this command.',
			})
		}
		return this.ok()
	}
}
