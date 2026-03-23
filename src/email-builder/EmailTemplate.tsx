import React, { useEffect, useState } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

const C = {
	bodyBg: '#212121',
	cardBg: '#1a1a1a',
	footerBg: '#111111',
	border: '#393939',
	accent1: '#e8a85a',
	accent2: '#d0887d',
	text: '#c8c8c8',
	link: '#4d9fc4',
	listBg: '#141414',
};

const UI = {
	padX: 28,
	spacing: 15,
	borderW: 2,
	font: "-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif",
	fSize: '15px',
};

const TABLE_PROPS = {
	cellPadding: 0,
	cellSpacing: 0,
	border: 0,
	role: 'article',
};

const S = {
	cell: (t = 0, b = UI.spacing): React.CSSProperties => ({
		padding: `${t}px ${UI.padX}px ${b}px`,
	}),
	titleBase: (): React.CSSProperties => ({
		margin: 0,
		fontWeight: 'normal',
		textTransform: 'uppercase',
		lineHeight: 1.3,
		letterSpacing: '1px',
	}),
	textBase: (): React.CSSProperties => ({
		margin: 0,
		fontSize: UI.fSize,
		lineHeight: 1.5,
		letterSpacing: '0.22px',
		color: C.text,
	}),
};

// --- Icons Config ---
const EMAIL_ICONS_URL = 'https://buhowski.github.io/js-email-builder/assets';
export const emailIcons = {
	tg: { src: `${EMAIL_ICONS_URL}/tg.png`, alt: 'Telegram' },
	ig: { src: `${EMAIL_ICONS_URL}/insta.png`, alt: 'Instagram' },
	in: { src: `${EMAIL_ICONS_URL}/in.png`, alt: 'LinkedIn' },
	em: { src: `${EMAIL_ICONS_URL}/mail.png`, alt: 'Gmail' },
	site: { src: `${EMAIL_ICONS_URL}/site.png`, alt: 'Website' },
};

// --- Components ---
export const EmailHeader = () => (
	<tr>
		<td style={{ padding: `40px ${UI.padX}px 0` }} />
	</tr>
);

export const EmailH2 = ({ children, top = 20 }: { children: React.ReactNode; top?: number }) => (
	<tr>
		<td style={S.cell(top)}>
			<h2 style={{ ...S.titleBase(), color: C.accent1, fontSize: '18px' }}>{children}</h2>
		</td>
	</tr>
);

export const EmailH3 = ({ children, top = 10 }: { children: React.ReactNode; top?: number }) => (
	<tr>
		<td style={S.cell(top)}>
			<p style={{ ...S.titleBase(), color: C.accent2, fontSize: '15px' }}>{children}</p>
		</td>
	</tr>
);

export const EmailText = ({ children }: { children: React.ReactNode }) => (
	<tr>
		<td style={S.cell()}>
			<p style={S.textBase()}>{children}</p>
		</td>
	</tr>
);

export const EmailLinkList = ({ items }: { items: { title: string; url: string }[] }) => (
	<tr>
		<td style={S.cell(2, 20)}>
			<table {...TABLE_PROPS} width='100%'>
				<tbody>
					{items.map((item, i) => (
						<tr key={i}>
							<td
								style={{
									borderLeft: `${UI.borderW}px solid ${C.link}`,
									borderBottom: i < items.length - 1 ? `1px solid ${C.border}` : 'none',
								}}
							>
								<a
									href={item.url}
									target='_blank'
									rel='noopener noreferrer'
									style={{ display: 'block', textDecoration: 'none', backgroundColor: C.listBg }}
								>
									<table {...TABLE_PROPS} width='100%'>
										<tbody>
											<tr>
												<td
													style={{
														padding: '13px 0 13px 22px',
														color: C.link,
														fontSize: UI.fSize,
														lineHeight: 1.22,
														letterSpacing: '0.35px',
													}}
												>
													{item.title}
												</td>
												<td
													align='right'
													style={{ padding: '0 22px 0 10px', color: C.accent1, fontSize: '21px' }}
												>
													→
												</td>
											</tr>
										</tbody>
									</table>
								</a>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</td>
	</tr>
);

export const EmailBulletList = ({ items }: { items: string[] }) => (
	<tr>
		<td style={S.cell(0, 15)}>
			<table {...TABLE_PROPS} width='100%'>
				<tbody>
					{items.map((item, i) => (
						<tr key={i}>
							<td style={{ padding: `0 0 ${UI.spacing}px` }}>
								<table {...TABLE_PROPS}>
									<tbody>
										<tr>
											<td width='20' valign='middle'>
												<span
													style={{
														display: 'block',
														width: '4px',
														height: '4px',
														borderRadius: '50%',
														backgroundColor: C.accent2,
													}}
												/>
											</td>
											<td style={S.textBase()}>{item}</td>
										</tr>
									</tbody>
								</table>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</td>
	</tr>
);

export const EmailDivider = () => (
	<tr>
		<td style={{ padding: '25px 0 0' }}>
			<hr style={{ border: 'none', borderTop: `${UI.borderW}px solid ${C.border}`, margin: 0 }} />
		</td>
	</tr>
);

export const EmailFooter = ({
	socialLinks,
}: {
	socialLinks: { url: string; icon: string; alt: string }[];
}) => (
	<tr>
		<td align='center' style={{ backgroundColor: C.footerBg, padding: '40px 18px' }}>
			<p style={{ margin: '0 0 26px', textAlign: 'center' }}>
				<a
					href='https://buhowski.dev'
					target='_blank'
					rel='noopener noreferrer'
					style={{
						textDecoration: 'none',
						letterSpacing: '1.1px',
						fontSize: '13px',
						color: '#666666',
						padding: '10px',
					}}
				>
					{new Date().getFullYear()} © Olexander Tsiomakh
				</a>
			</p>
			<table {...TABLE_PROPS} align='center'>
				<tbody>
					<tr>
						{socialLinks.map((link, i) => (
							<td key={i} style={{ padding: '0 9.5px' }}>
								<a
									href={link.url}
									target='_blank'
									rel='noopener noreferrer'
									style={{
										display: 'inline-block',
										borderRadius: '50%',
										border: `2px solid ${C.border}`,
										backgroundColor: C.cardBg,
									}}
								>
									<img
										src={link.icon}
										alt={link.alt}
										width='51'
										height='51'
										style={{
											width: '51px',
											height: '51px',
											display: 'block',
											border: 0,
											outline: 'none',
										}}
									/>
								</a>
							</td>
						))}
					</tr>
				</tbody>
			</table>
		</td>
	</tr>
);

export const EmailLayout = ({ children, lang }: { children: React.ReactNode; lang?: string }) => (
	<table
		lang={lang}
		{...TABLE_PROPS}
		width='100%'
		bgcolor={C.bodyBg}
		style={{ fontFamily: UI.font }}
	>
		<tbody>
			<tr>
				<td align='center' style={{ padding: '30px 10px' }}>
					<table
						width='600'
						{...TABLE_PROPS}
						bgcolor={`${C.cardBg}`}
						style={{
							width: '100%',
							maxWidth: '600px',
							backgroundColor: C.cardBg,
							borderRadius: '20px',
							border: `${UI.borderW}px solid ${C.border}`,
							overflow: 'hidden',
						}}
					>
						<tbody>{children}</tbody>
					</table>
				</td>
			</tr>
		</tbody>
	</table>
);

// --- EXPORTER ---
export const EmailToHtml = (Element: React.ReactElement) => {
	const lang = Element.props.lang || 'uk';
	const content = renderToStaticMarkup(Element);

	return `<!DOCTYPE html>
<html lang="${lang}" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1.0">
  <meta name="x-apple-disable-message-reformatting">
  <meta name="color-scheme" content="dark">
  <title>Startup</title>
</head>
<body style="margin: 0; padding: 0; background-color: ${C.bodyBg}; font-family: ${UI.font}; font-size: 100%;">
  ${content}
</body>
</html>`;
};

export const EmailBuilder = ({ children }: { children: React.ReactElement }) => {
	const [copied, setCopied] = useState(false);
	const isDev = process.env.NODE_ENV === 'development';

	useEffect(() => {}, []);

	const handleCopy = () => {
		const html = EmailToHtml(children);

		navigator.clipboard.writeText(html).then(() => {
			setCopied(true);
			setTimeout(() => setCopied(false), 1000);
		});
	};

	return (
		<>
			<style>{`
          table { 
            text-rendering: auto;
            -webkit-font-smoothing: auto;
          }

          table a { 
            display: inline
          }
          
        `}</style>

			{isDev && (
				<button
					onClick={handleCopy}
					style={{
						position: 'fixed',
						top: '5px',
						right: '5px',
						zIndex: 999999,
						padding: '5px 10px',
						background: '#000000',
						color: '#ffffff',
						borderRadius: '10px',
						cursor: 'pointer',
						fontSize: '14px',
					}}
				>
					{copied ? '✅' : '⚡️'}
				</button>
			)}

			{children}
		</>
	);
};
