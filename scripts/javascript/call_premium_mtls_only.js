const { write } = require('./src/io');
const { stringify } = require('./src/utils');
const { callPremiumShowcase } = require('./src/1_premium_showcase_jws');
const { callPremium } = require('./src/1_premium_mtls_only');

callPremium().then(write);
callPremiumShowcase().then(stringify).then(write);
