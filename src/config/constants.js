
const MONGODB_URL = "mongodb://localhost:27017/";

const CRYPTO_ITERATIONS = 4000;

const CRYPTO_KEY_LEN = 4096

const CRYPTO_ALG = 'sha256';

const HAND_SIZE = 10;

const BLANK_SPACE = '______';

const GAME_CAPACITY = 100;

const NEXT_ROUND_DELAY = 10000; //MS


module.exports = {
	MONGODB_URL:MONGODB_URL,
	CRYPTO_ITERATIONS:CRYPTO_ITERATIONS,
	CRYPTO_KEY_LEN:CRYPTO_KEY_LEN,
	CRYPTO_ALG:CRYPTO_ALG,
	HAND_SIZE:HAND_SIZE,
	BLANK_SPACE:BLANK_SPACE,
	GAME_CAPACITY:GAME_CAPACITY
};