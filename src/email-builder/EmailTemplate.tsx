import React, { useState } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { urlTelegram, urlLinkedIn, urlInstagram } from '../components/urlsData';

const C = {
	bodyBg: '#333333',
	cardBg: '#242424',
	footerBg: '#121212',
	accent1: '#f6b96f',
	accent2: '#d0887d',
	text: '#e2e2e2',
	link: '#55aadd',
	listLinkBg: '#1b1b1b',
	copy: '#686868',
};

const UI = {
	padX: 28,
	spacing: 18,
	borderW: 1,
	borderRd: 16,
	font: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
	fSize: '16px',
};

const TABLE_PROPS = {
	cellPadding: 0,
	cellSpacing: 0,
	border: 0,
	role: 'presentation',
	width: '100%',
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
		letterSpacing: '1.4px',
	}),

	textBase: (): React.CSSProperties => ({
		margin: 0,
		fontSize: UI.fSize,
		lineHeight: 1.5,
		letterSpacing: '0.25px',
		wordSpacing: '0.5px',
		color: C.text,
	}),
};

// --- Components ---
export const EmailPadding = () => (
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

const linkBdrRds = '9px';

export const EmailLinkList = ({
	items,
}: {
	items: { title: string; url: string; genre?: string }[];
}) => (
	<tr>
		<td style={S.cell(0, 20)}>
			<div style={{ borderRadius: linkBdrRds, overflow: 'hidden' }}>
				<table {...TABLE_PROPS} style={{ borderRadius: linkBdrRds, overflow: 'hidden' }}>
					<tbody>
						{items.map((item, i) => (
							<React.Fragment key={i}>
								<tr>
									<td>
										<a
											href={item.url}
											target='_blank'
											rel='noopener noreferrer'
											style={{
												display: 'block',
												textDecoration: 'none',
												outline: 'none',
												backgroundColor: C.listLinkBg,
												color: C.link,
												fontSize: UI.fSize,
												lineHeight: 1.3,
												letterSpacing: '0.8px',
											}}
										>
											<table {...TABLE_PROPS}>
												<tbody>
													<tr>
														<td style={{ padding: '15px 0 15px 22px' }}>
															{item.genre ? (
																<p
																	style={{
																		margin: '0 0 5px',
																		padding: '0',
																		color: C.copy,
																		fontSize: '10px',
																		textTransform: 'uppercase',
																		lineHeight: 1.3,
																		letterSpacing: '0.5px',
																		fontWeight: 300,
																	}}
																>
																	{item.genre}
																</p>
															) : null}
															{item.title}
														</td>
														<td
															align='right'
															style={{
																padding: '0 20px 0 5px',
																color: C.accent1,
																fontSize: '23px',
															}}
														>
															→
														</td>
													</tr>
												</tbody>
											</table>
										</a>
									</td>
								</tr>

								{i < items.length - 1 && (
									<tr>
										<td
											height='1'
											style={{
												backgroundColor: C.bodyBg,
												fontSize: '1px',
												lineHeight: '1px',
												height: '1px',
											}}
										>
											&nbsp;
										</td>
									</tr>
								)}
							</React.Fragment>
						))}
					</tbody>
				</table>
			</div>
		</td>
	</tr>
);

export const EmailBulletList = ({ items }: { items: string[] }) => (
	<tr>
		<td style={S.cell(0, 15)}>
			<table {...TABLE_PROPS}>
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

// --- Icons Config ---
const SITE_URL = 'https://buhowski.netlify.app';
const EMAIL_ICONS_URL = `${SITE_URL}/assets/icons`;

export const emailIcons = {
	tg: { src: `${EMAIL_ICONS_URL}/tg.png`, alt: 'Telegram' },
	ig: { src: `${EMAIL_ICONS_URL}/inst.png`, alt: 'Instagram' },
	in: { src: `${EMAIL_ICONS_URL}/in.png`, alt: 'LinkedIn' },
	// em: { src: `${EMAIL_ICONS_URL}/mail.png`, alt: 'Gmail' },
	// site: { src: `${EMAIL_ICONS_URL}/site.png`, alt: 'Website' },

	// tg: { src: icon1, alt: 'Telegram' },
	// ig: { src: icon2, alt: 'Instagram' },
	// in: { src: icon3, alt: 'LinkedIn' },
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
	const imgRatio = 23;
	const { width, ...tablePropsNoWidth } = TABLE_PROPS;

	return (
		<>
			{/* Spacer перед футером */}
			<tr>
				<td style={{ fontSize: 0, lineHeight: 0, height: '20px' }}>&nbsp;</td>
			</tr>

			<tr>
				<td align='center' style={{ background: C.footerBg, padding: `40px ${UI.padX}px 30px` }}>
					<table {...TABLE_PROPS}>
						<tbody>
							<tr>
								<td align='center'>
									<table {...tablePropsNoWidth} style={{ margin: '0 auto' }}>
										<tbody>
											<tr>
												{links.map((link, i) => (
													<td key={i} style={{ padding: '0 10px' }}>
														<a
															href={link.url}
															target='_blank'
															rel='noopener noreferrer'
															style={{
																display: 'block',
																borderRadius: '50%',
																background: C.bodyBg,
																padding: '14px',
																textDecoration: 'none',
																outline: 'none',
																overflow: 'hidden',
															}}
														>
															<img
																src={link.icon}
																alt={link.alt}
																width={imgRatio}
																height={imgRatio}
																style={{
																	display: 'block',
																	width: `${imgRatio}px`,
																	height: `${imgRatio}px`,
																	border: 0,
																	outline: 'none',
																	pointerEvents: 'none',
																	background: 'transparent',
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

							<tr>
								<td style={{ paddingTop: '20px' }}>
									<div
										style={{
											backgroundColor: C.bodyBg,
											fontSize: '1px',
											lineHeight: '1px',
											height: '1px',
										}}
									>
										&nbsp;
									</div>
								</td>
							</tr>

							<tr>
								<td style={{ paddingTop: '12px' }}>
									<table {...TABLE_PROPS}>
										<tbody>
											<tr>
												<td style={{ fontSize: '11px', color: C.copy, letterSpacing: '0.9px' }}>
													{new Date().getFullYear()} © Olexander Tsiomakh
												</td>
												<td align='right'>
													<a
														href='https://buhowski.dev'
														target='_blank'
														rel='noopener noreferrer'
														style={{
															textDecoration: 'none',
															color: C.link,
															fontSize: '12px',
															letterSpacing: '1.62px',
														}}
													>
														buhowski.dev
													</a>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
				</td>
			</tr>
		</>
	);
};

export const EmailPreheader = ({ text }: { text: string }) => {
	const preheaderText = `«${text}»`;
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
			style={{ fontFamily: UI.font, borderSpacing: 0 }}
			bgcolor={C.bodyBg}
		>
			<style>{`
        :root { color-scheme: dark; supported-color-schemes: dark; }
        [data-ogsc] .dark-img { display:block !important; width: auto !important; overflow: visible !important; float: none !important; max-height:inherit !important; max-width:inherit !important; line-height: auto !important; visibility:visible !important; }
        [data-ogsc] .light-img { display:none; display:none !important; }
        .email-builder { user-select: text; }
        table { text-rendering: auto; -webkit-font-smoothing: auto; border-collapse: collapse; border-spacing: 0; }
        table a { display: inline }
      `}</style>

			<tbody>
				<tr>
					<td align='center' style={{ padding: '46px 2px' }}>
						<table
							{...TABLE_PROPS}
							width='600'
							bgcolor={C.cardBg}
							style={{
								width: '100%',
								maxWidth: '600px',
								minWidth: '312px',
								borderRadius: `${UI.borderRd}px`,
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
											// border: `${UI.borderW}px solid ${C.border}`,
											borderRadius: `${UI.borderRd}px`,
											overflow: 'hidden',
										}}
									>
										<table {...TABLE_PROPS} style={{ width: '100%', borderCollapse: 'collapse' }}>
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
		<div className='email-builder' style={{ backgroundColor: C.bodyBg }}>
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
					@SUBJECT: {subject}
				</h1>
			)}

			{children}
		</div>
	);
};
