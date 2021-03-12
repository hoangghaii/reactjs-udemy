export const setPlayer = (data) => {
	return {
		id: data.key,
		title: data.title,
		subtitle: data.subtitle,
		image: data.images.coverarthq,
		image_alt: data.share.subject,
		url: data.url,
	};
};
