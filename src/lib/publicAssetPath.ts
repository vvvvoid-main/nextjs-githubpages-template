import { format } from 'url';
import getConfig from 'next/config';

const { publicRuntimeConfig = {} } = getConfig() || {};
const { assetPrefix} = publicRuntimeConfig;

const publicAssetPath = (path: string): string =>
format((assetPrefix || "") + (path || ""));

export default publicAssetPath