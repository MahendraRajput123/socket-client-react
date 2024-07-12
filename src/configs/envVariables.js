const Reset = '\x1b[0m';
const FgYellow = '\x1b[33m';

const APP_ENV = 'prod'
let APP_HOST = ''

switch (APP_ENV) {
    case 'local':
        console.log('connecting to local')
        APP_HOST = 'https://ebitsvisionai.in'
        break;
    case 'prod':
        console.log('connecting to prod')
        APP_HOST = 'https://ebitsvisionai.in'
        break;
    default:
        console.log('connecting to default api (local)')
        APP_HOST = 'https://ebitsvisionai.in'
        break;
}

console.log(FgYellow, APP_ENV, Reset,'-------env-variable')
console.log(FgYellow, APP_HOST, Reset,'-------------------env-variable')

export default APP_HOST;