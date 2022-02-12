export default async function ({ exec }) {
    await exec('sudo add-apt-repository ppa:redislabs/redis');
    await exec('sudo apt-get install -y redis-tools redis-server');
}
