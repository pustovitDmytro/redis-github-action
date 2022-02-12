import { assert } from 'chai';
import Redis from 'ioredis';
import { v4 as uuid } from 'uuid';

suite('Redis');

test('Connect to Redis', async function () {
    const redis = new Redis({
        port                 : 6379,
        host                 : '127.0.0.1',
        family               : 4, // 4 (IPv4) or 6 (IPv6)
        password             : 'auth',
        user                 : process.env.REDIS_USER,
        db                   : 0,
        maxRetriesPerRequest : 2
    });

    const unique = uuid();

    assert.equal(
        await redis.set('redis-github-action-test', unique),
        'OK'
    );

    assert.equal(
        await redis.get('redis-github-action-test'),
        unique
    );
});
