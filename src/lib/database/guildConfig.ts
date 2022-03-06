import mongoose from 'mongoose';
import { serverConfig } from '../function/types';

/**
 *
 * @param { String } guildId
 */
export const defaultData = (guildId) => ({
	guild: guildId,
	config: {
		language: 'es-ES',
	},
});

const serverConfigSchema = new mongoose.Schema(
	{
		guild: String,
		config: {
			language: String,
		},
	},
	{ versionKey: false }
);

export const Model = mongoose.model<serverConfig>('serverConfig', serverConfigSchema);