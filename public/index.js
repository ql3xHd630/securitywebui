import config from './config.json' assert {type: 'json'}
console.log(config, 'config')
const configString = JSON.stringify(config)
console.log(config, 'configstring')
localStorage.setItem('config', configString)
