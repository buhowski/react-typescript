// FUNCTION: CV PDF PROXY
export const handler = async () => {
	const docId = '12rOT1Pa4Z-Usau2Xkh-QTXweDTZJJTKvadrJKmRpCk0';

	const googleUrl = `https://docs.google.com/document/d/${docId}/export?format=pdf`;

	const response = await fetch(googleUrl);

	if (!response.ok) {
		return {
			statusCode: 500,
			body: 'Failed to fetch PDF',
		};
	}

	const buffer = await response.arrayBuffer();

	return {
		statusCode: 200,
		headers: {
			'Content-Type': 'application/pdf',
			'Content-Disposition': 'inline',
			'Cache-Control': 'public, max-age=300',
		},
		body: Buffer.from(buffer).toString('base64'),
		isBase64Encoded: true,
	};
};
