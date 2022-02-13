import core from '@actions/core';
import { exec } from '@actions/exec';
import Installer from './Installer';

async function run() {
    try {
        const redisVersion = core.getInput('redis-version');

        const intaller = Installer({ exec });

        await intaller.install({ redisVersion, platform: process.platform });
    } catch (error) {
        console.error(error);
        core.setFailed(error.message);
    }
}

run();
