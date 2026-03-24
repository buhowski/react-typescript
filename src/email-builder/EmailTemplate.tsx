import React, { useState } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { urlTelegram, urlLinkedIn, urlInstagram } from '../components/urlsData';

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
	padX: 27,
	spacing: 15,
	borderW: 2,
	font: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
	fSize: '15px',
};

const TABLE_PROPS = {
	cellPadding: 0,
	cellSpacing: 0,
	border: 0,
	role: 'presentation',
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
			<p style={{ ...S.titleBase(), color: C.accent2, fontSize: '16px' }}>{content}</p>
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
		<td style={S.cell(0, 20)}>
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
									style={{
										display: 'block',
										textDecoration: 'none',
										backgroundColor: C.listBg,
										color: C.link,
									}}
								>
									<table {...TABLE_PROPS} width='100%'>
										<tbody>
											<tr>
												<td
													style={{
														padding: '13px 0 13px 20px',
														color: C.link,
														fontSize: UI.fSize,
														lineHeight: 1.22,
														letterSpacing: '0.38px',
													}}
												>
													{item.title}
												</td>
												<td
													align='right'
													style={{ padding: '0 19px 0 6px', color: C.accent1, fontSize: '21px' }}
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
			<table {...TABLE_PROPS} width='100%'>
				<tbody>
					<tr>
						<td
							style={{
								borderTop: `${UI.borderW}px solid ${C.border}`,
								fontSize: 0,
								lineHeight: 0,
								height: '1px',
							}}
						>
							&nbsp;
						</td>
					</tr>
				</tbody>
			</table>
		</td>
	</tr>
);

// --- Icons Config ---

const SITE_URL = 'https://buhowski.netlify.app';
const EMAIL_ICONS_URL = `${SITE_URL}/assets/icons`;

export const emailIcons = {
	tg: { src: `${EMAIL_ICONS_URL}/tg.png`, alt: 'Telegram' },
	ig: { src: `${EMAIL_ICONS_URL}/insta.png`, alt: 'Instagram' },
	in: { src: `${EMAIL_ICONS_URL}/in.png`, alt: 'LinkedIn' },
	em: { src: `${EMAIL_ICONS_URL}/mail.png`, alt: 'Gmail' },
	site: { src: `${EMAIL_ICONS_URL}/site.png`, alt: 'Website' },
};

// Footer Links
export const socialLinks = [
	{
		url: urlTelegram,
		icon: emailIcons.tg.src,
		alt: emailIcons.tg.alt,
	},
	{
		url: urlInstagram,
		icon: emailIcons.ig.src,
		alt: emailIcons.ig.alt,
	},
	{
		url: urlLinkedIn,
		icon: emailIcons.in.src,
		alt: emailIcons.in.alt,
	},
];

export const EmailFooter = ({
	links = socialLinks,
}: {
	links?: { url: string; icon: string; alt: string }[];
}) => {
	const imgRatio = 52;

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
											display: 'block',
											borderRadius: '50%',
											border: `2px solid ${C.border}`,
											backgroundColor: C.cardBg,
										}}
									>
										<img
											src={link.icon}
											alt={link.alt}
											width={imgRatio}
											height={imgRatio}
											style={{
												width: `${imgRatio}px`,
												height: `${imgRatio}px`,
												display: 'block',
												border: 0,
												outline: 'none',
												fontSize: '12px',
												textDecoration: 'none',
												verticalAlign: 'middle',
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

export const EmailPreheader = ({ text }: { text: string }) => {
	const preheaderText = `≪${text}≫`;
	const invisibleTail = '&nbsp;&zwnj;'.repeat(200);
	const combinedStyles = `
    display: none !important;
    visibility: hidden;
    mso-hide: all;
    font-size: 1px;
    line-height: 1px;
    max-height: 0;
    max-width: 0;
    opacity: 0;
    overflow: hidden;
    color: ${C.cardBg};
  `
		.replace(/\s+/g, ' ')
		.trim();

	return (
		// @ts-ignore
		<tr style={{ display: 'none', msoHide: 'all' }}>
			{/* @ts-ignore */}
			<td style={{ display: 'none', msoHide: 'all' }}>
				<div
					dangerouslySetInnerHTML={{
						__html: `
              <div style="${combinedStyles}">
                <span style="display: block; white-space: nowrap;">${preheaderText}</span>
                ${invisibleTail}
              </div>
            `,
					}}
				/>
			</td>
		</tr>
	);
};

// --- EXPORTER ---
export const EmailToHtml = (Element: React.ReactElement) => {
	const lang = Element.props.lang || 'uk';
	const content = renderToStaticMarkup(Element);

	const fixedContent = content
		.replace(/cellSpacing/g, 'cellspacing')
		.replace(/cellPadding/g, 'cellpadding');

	return `<!DOCTYPE html>
<html lang="${lang}" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1.0">
  <meta name="x-apple-disable-message-reformatting">
  <meta name="color-scheme" content="dark">
  <meta name="supported-color-schemes" content="dark">
  <title>Startup</title>
</head>
<body bgcolor="${C.bodyBg}" style="margin: 0; padding: 0; background-color: ${C.bodyBg}; font-family: ${UI.font}; font-size: 100%;mso-line-height-rule:exactly;">
  ${fixedContent}
</body>
</html>`;
};

export const EmailLayout = ({ children, lang }: { children: React.ReactNode; lang?: string }) => (
	<>
		<table
			lang={lang}
			{...TABLE_PROPS}
			width='100%'
			style={{ fontFamily: UI.font, borderSpacing: 0 }}
			bgcolor={C.bodyBg}
		>
			<style>{`
        :root { color-scheme: dark; supported-color-schemes: dark; }
        [data-ogsc] .dark-img { display:block !important; width: auto !important; overflow: visible !important; float: none !important; max-height:inherit !important; max-width:inherit !important; line-height: auto !important; visibility:visible !important; }
        [data-ogsc] .light-img { display:none; display:none !important; }
        table { text-rendering: auto; -webkit-font-smoothing: auto; border-collapse: collapse; border-spacing: 0; }
        table a { display: inline }
      `}</style>

			<tbody>
				<tr>
					<td align='center' style={{ padding: '30px 8px' }}>
						<table
							{...TABLE_PROPS}
							width='600'
							bgcolor={C.cardBg}
							style={{
								width: '100%',
								maxWidth: '600px',
								minWidth: '300px',
								borderRadius: '20px',
								overflow: 'hidden',
								backgroundColor: C.cardBg,
							}}
						>
							<tbody>
								<tr>
									<td
										// @ts-ignore
										bgcolor={C.cardBg}
										style={{
											display: 'block',
											backgroundColor: C.cardBg,
											border: `${UI.borderW}px solid ${C.border}`,
											borderRadius: '20px',
											overflow: 'hidden',
										}}
									>
										<table
											{...TABLE_PROPS}
											width='100%'
											style={{ width: '100%', borderCollapse: 'collapse' }}
										>
											<tbody>{children}</tbody>
										</table>
									</td>
								</tr>
							</tbody>
						</table>
					</td>
				</tr>
			</tbody>
		</table>
	</>
);

export const EmailBuilder = ({
	children,
	subject,
}: {
	children: React.ReactElement;
	subject?: string;
}) => {
	const [copied, setCopied] = useState(false);

	const handleCopy = () => {
		const html = EmailToHtml(children);
		navigator.clipboard.writeText(html).then(() => {
			setCopied(true);
			setTimeout(() => setCopied(false), 1500);
		});
	};

	return (
		<>
			<button
				onClick={handleCopy}
				title='Copy HTML'
				style={{
					position: 'fixed',
					top: '5px',
					right: '15px',
					zIndex: 9999,
					padding: '4px 9px',
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

			{subject && (
				<h1
					style={{
						color: C.accent1,
						padding: '40px 10px 10px',
						fontSize: '21px',
						textAlign: 'center',
						maxWidth: '500px',
						margin: '0 auto',
						lineHeight: 1.5,
						letterSpacing: '1.2px',
						fontWeight: '600',
					}}
				>
					EMAIL: {subject}
				</h1>
			)}

			{children}
		</>
	);
};
