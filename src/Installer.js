import macos from './macos';
import windows from './windows';
import linux from './linux';

export default class Installer {
    constructor({ exec }) {
        this._exec = exec;
    }

    async install({ redisVersion, platform }) {
        const versionPart = redisVersion
            ? `v.${redisVersion} `
            : '';

        console.log(`Installing Redis ${versionPart}on platorm ${platform}`);

        if (platform === 'win32') {
            return windows({ exec: this._exec });
        }

        if (platform === 'darwin') {
            return macos({ exec: this._exec });
        }

        return linux({ exec: this._exec });
    }
}
