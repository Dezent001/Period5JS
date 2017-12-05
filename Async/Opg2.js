const crypto = require('crypto');

function makeSecureRandom(SIZE) {
  const random = crypto.randomBytes(SIZE).toString('hex');
  return {
    length: random.length,
    random
  };
};

async function iAwaitStuffAsync() {
  const res = await makeSecureRandom(4);
  console.log(res);
}

iAwaitStuffAsync();
console.log("first bitch :)!");