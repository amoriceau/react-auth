/*Fake database testing purpose only */
const DB_USERS = [
	{
		id: 0,
		email: 'test@test.test',
		name: 'Test',
		password: 'test',
	},
	{
		id: 3,
		email: 'bugs@bugs.com',
		name: 'Bugsminers',
		password: 'bugs',
	},
];

function filterDB(mail) {
	const localUser = DB_USERS.filter(user =>{
		if(user.email === mail){
			return user
		}
	})
	console.log('====================================');
	console.log(localUser);
	console.log('====================================');
	return localUser[0]
}

class Auth {
	constructor() {
		this.authenticated = true;
	}
	login(user, callback, errorFun) {
		const new_user = filterDB(user.email)
		if (new_user!==undefined && user.email === new_user.email && user.password === new_user.password) {
			console.log(new_user);
			localStorage.setItem('user', JSON.stringify(new_user));
			this.authenticated = true;
			callback();
		} else {
			errorFun();
		}
	}
	logout(callback) {
		localStorage.removeItem('user');
		this.authenticated = false;
		callback();
	}
	isAuthenticated = () => {
		return this.authenticated;
	};
	register(user,callback,errorFun){
		return 1
	}
}

export default new Auth();
