//

export const { SERVER_URL } = process.env;

export const SERVER_API = `${SERVER_URL}/api/data`;

export const SERVER_FOLDERS_DATA = `./music-folders-data`;

export const SERVER_GET_TRACK = `${SERVER_API}/music-mp3`;

export const SERVER_META_DATA = `./music-folder-metadata`;

export const NOT_APP_15_SEC_RULE = process.env.NOT_APP_15_SEC_RULE === 'true';
