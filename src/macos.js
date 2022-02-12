export default async function ({ exec }) {
    await exec('brew install redis');
    await exec('brew services start redis');
}
