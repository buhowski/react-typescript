import React, { useEffect, useState } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

import tgIcon from './assets/tg.png';
import igIcon from './assets/insta.png';
import inIcon from './assets/in.png';
import emIcon from './assets/mail.png';
import siteIcon from './assets/site.png';

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

// --- Components ---
export const EmailHeader = () => (
	<tr>
		<td style={{ padding: `40px ${UI.padX}px 0` }} />
	</tr>
);

export const EmailH2 = ({ content, top = 20 }: { content: string; top?: number }) => (
	<tr>
		<td style={S.cell(top)}>
			<h2 style={{ ...S.titleBase(), color: C.accent1, fontSize: '18px' }}>{content}</h2>
		</td>
	</tr>
);

export const EmailH3 = ({ content, top = 10 }: { content: string; top?: number }) => (
	<tr>
		<td style={S.cell(top)}>
			<p style={{ ...S.titleBase(), color: C.accent2, fontSize: '15px' }}>{content}</p>
		</td>
	</tr>
);

export const EmailText = ({ content }: { content: string }) => (
	<tr>
		<td style={S.cell()}>
			<p style={S.textBase()}>{content}</p>
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

// --- Icons Config ---
export const emailIcons = {
	tg: { src: tgIcon, alt: 'Telegram' },
	ig: { src: igIcon, alt: 'Instagram' },
	in: { src: inIcon, alt: 'LinkedIn' },
	em: { src: emIcon, alt: 'Gmail' },
	site: { src: siteIcon, alt: 'Website' },
};

// Footer Links
export const socialLinks = [
	{
		url: 'https://t.me/olexander_tsiomakh',
		icon: emailIcons.tg.src,
		alt: emailIcons.tg.alt,
	},
	{
		url: 'https://www.instagram.com/buhowski',
		icon: emailIcons.ig.src,
		alt: emailIcons.ig.alt,
	},
	{
		url: 'https://www.linkedin.com/in/olexander-tsiomakh-34a364239/',
		icon: emailIcons.in.src,
		alt: emailIcons.in.alt,
	},
];

export const EmailFooter = ({
	links = socialLinks,
}: {
	links?: { url: string; icon: string; alt: string }[];
}) => {
	const imgRatio = '52px';

	return (
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
							color: '#676767',
							padding: '10px',
						}}
					>
						{new Date().getFullYear()} © Olexander Tsiomakh
					</a>
				</p>
				<table {...TABLE_PROPS} align='center'>
					<tbody>
						<tr>
							{links.map((link, i) => (
								<td key={i} style={{ padding: '0 9px' }}>
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
											width={`${imgRatio}`}
											height={`${imgRatio}`}
											style={{
												width: `${imgRatio}`,
												height: `${imgRatio}`,
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
};

export const EmailPreheader = ({ text }: { text: string }) => (
	<tr>
		<td>
			<p
				style={{
					display: 'none',
					fontSize: '1px',
					color: C.bodyBg,
					lineHeight: '1px',
					maxHeight: '0px',
					maxWidth: '0px',
					opacity: 0,
					overflow: 'hidden',
					margin: 0,
				}}
			>
				{text}
				{'\u200C\u00A0'.repeat(20)}
			</p>
		</td>
	</tr>
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

export const EmailLayout = ({ children, lang }: { children: React.ReactNode; lang?: string }) => (
	<table
		lang={lang}
		{...TABLE_PROPS}
		width='100%'
		role='presentation'
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

export const EmailBuilder = ({ children }: { children: React.ReactElement }) => {
	const [copied, setCopied] = useState(false);

	useEffect(() => {}, []);

	const handleCopy = () => {
		const html = EmailToHtml(children);

		navigator.clipboard.writeText(html).then(() => {
			setCopied(true);
			setTimeout(() => setCopied(false), 1500);
		});
	};

	return (
		<>
			<style>{`
        body { overflow: auto }
        table { text-rendering: auto; -webkit-font-smoothing: auto; }
        table a { display: inline }
    `}</style>

			<button
				onClick={handleCopy}
				title='Copy HTML'
				style={{
					position: 'fixed',
					top: '5px',
					right: '15px',
					zIndex: 999999,
					padding: '4px 8px',
					background: '#000000',
					color: '#ffffff',
					borderRadius: '10px',
					cursor: 'pointer',
					fontSize: '14px',
					border: 'none',
				}}
			>
				{copied ? 'HTML Copied ✅' : '📋'}
			</button>

			{children}
		</>
	);
};
