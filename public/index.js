import config from './config.json' assert {type: 'json'}
console.log(config)
localStorage.setItem('config', config)
