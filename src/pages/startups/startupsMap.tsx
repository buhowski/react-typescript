import { MetaTags, LanguageCode, PageProps } from '../../types/common';
import { visionMetaTags } from './components/startupsMetaTags';
import { findParentPath } from './helpers/backButtonPathHelper';
import StartupsWrapper from './components/StartupsWrapper';
import { startupDataMap, startupSubPaths } from '../../routesData';

type InitialLangProp = {
	initialLang?: LanguageCode;
	metaTags?: Partial<PageProps['metaTags']>;
};

export const startupsMap: Record<string, React.FC<InitialLangProp>> = Object.fromEntries(
	Object.entries(startupDataMap).map(([path, pageData]) => {
		const parent = findParentPath(startupSubPaths, path);
		const defaultMeta: MetaTags = pageData.metaTags || visionMetaTags;

		return [
			path,
			(props: InitialLangProp) => (
				<StartupsWrapper
					{...pageData}
					backButton={parent}
					initialLang={props.initialLang}
					metaTags={{ ...defaultMeta, ...props.metaTags }}
				/>
			),
		];
	})
);
