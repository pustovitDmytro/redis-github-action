import { assert } from 'chai';
import { load } from '../utils';

const Installer = load('Installer').default;
const exec = commands => command => commands.push(command);

suite('Installer');

test('platform: Windows', async function () {
    const commands = [];
    const installer = new Installer({ exec: exec(commands) });

    await installer.install({ platform: 'win32' });
    assert.deepEqual(
        commands,
        [
            'choco install memurai-developer'
        ]
    );
});

test('platform: Linux', async function () {
    const commands = [];
    const installer = new Installer({ exec: exec(commands) });

    await installer.install({ platform: 'linux' });
    assert.deepEqual(
        commands,
        [
            'sudo add-apt-repository ppa:redislabs/redis',
            'sudo apt-get install -y redis-tools redis-server'
        ]
    );
});

test('platform: MacOs', async function () {
    const commands = [];
    const installer = new Installer({ exec: exec(commands) });

    await installer.install({ platform: 'darwin' });
    assert.deepEqual(
        commands,
        [
            'brew install redis',
            'brew services start redis'
        ]
    );
});

test('specify redisVersion on linux', async function () {
    const commands = [];
    const installer = new Installer({ exec: exec(commands) });

    await installer.install({
        platform     : 'linux',
        redisVersion : '6.2.2'
    });

    assert.deepEqual(
        commands,
        [
            'sudo add-apt-repository ppa:redislabs/redis',
            'sudo apt-get install -y redis-tools redis-server'
        ]
    );
});
