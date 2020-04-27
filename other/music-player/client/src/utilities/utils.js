//

export function isFoldersReady(folders) {
	if (!folders || folders === null || folders.length < 1) {
		return false;
	}
	return true;
}

export function isBreadCrumbsReady(folders, folderId) {
	if (!isFoldersReady(folders)) {
		return false;
	}
	if (folderId === null) {
		return false;
	}
	if (folderId < 0 || folderId >= folders.length) {
		return false;
	}
	return true;
}

export function isShowFoldersReady(folders, folderId) {
	if (!isBreadCrumbsReady(folders, folderId)) {
		return false;
	}
	if (folders[folderId].next.length < 1) {
		return false;
	}
	return true;
}

export function isShowFilesReady(folders, folderId) {
	if (!isBreadCrumbsReady(folders, folderId)) {
		return false;
	}
	if (folders[folderId].mp3.length < 1) {
		return false;
	}
	return true;
}

export function isPlayerReady(folders, folderId, trackId) {
	if (!isShowFilesReady(folders, folderId)) {
		return false;
	}
	if (trackId === null || trackId < 0) {
		return false;
	}
	if (trackId >= folders[folderId].mp3.length) {
		return false;
	}
	return true;
}

export function isSliderReady(
	folders,
	folderId,
	trackId,
	duration,
	currentTime
) {
	if (!isPlayerReady(folders, folderId, trackId)) {
		return false;
	}
	if (duration === null || currentTime === null) {
		return false;
	}
	return true;
}

export function isTrackPlaying(current, playing, trackId) {
	if (!playing) {
		return false;
	}
	if (current !== trackId) {
		return false;
	}
	return true;
}

export function timeToString(currentTime) {
	// console.log('timeToString; currentTime ', currentTime);
	const hours = Math.trunc(currentTime / 3600);
	// console.log('timeToString; hours ', hours);
	let strHours = '';
	if (hours > 0) {
		strHours = `${hours}:`;
	}

	const remainingTime = currentTime - hours * 3600;
	// console.log('timeToString; remainingTime ', remainingTime);

	const minutes = `${Math.trunc(remainingTime / 60)}`;
	const seconds = `${Math.floor(remainingTime % 60)}`;

	const str1 = `${'00'.substr(minutes.length) + minutes}`;
	const str2 = `${'00'.substr(seconds.length)}`;
	const str3 = `${seconds === '60' ? '00' : seconds}`;

	const str = `${strHours}${str1}:${str2}${str3}`;
	return str;
}

export function previousTrack(folders, folderId, trackId) {
	// console.log('previousTrack ', folders, folderId, trackId);
	if (!isPlayerReady(folders, folderId, trackId)) {
		return null;
	}
	const { mp3 } = folders[folderId];
	const id = trackId - 1;
	if (id < 0 || id >= mp3.length) {
		return null;
	}
	return id;
}

export function nextTrack(folders, folderId, trackId) {
	// console.log('nextTrack ', folders, folderId, trackId);
	if (!isPlayerReady(folders, folderId, trackId)) {
		return null;
	}
	const { mp3 } = folders[folderId];
	const id = trackId + 1;
	if (id < 0 || id >= mp3.length) {
		return null;
	}
	return id;
}
