var port = 3001;

module.exports = {
	port: port,
	db: 'mongodb://localhost/todos',
	facebook: {
		clientID: '933411590040373',
		clientSecret: '52bd07f52bcbfec62d899dd030520317',
		callbackURL: 'http://localhost:'+ port +'/oauth/facebook/callback'
	},
	twitter: {
		clientID: 'Nz9HnWb4g7ZkBZG7WiJ9SXl0v',
		clientSecret: 'XFcb6IYUpcMHB3d6wEZocqfntZSXih6N6rMzjagTrvemgxEe1c',
		callbackURL: 'http://localhost:'+ port +'/oauth/twitter/callback'
	}
};