import config from '../../vercel.json' with { type: 'json' };
export const redirectedPaths = new Set(config.redirects.filter((rule) => !rule.has && !rule.source.includes(':')).map((rule) => rule.source));
