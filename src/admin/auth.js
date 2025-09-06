const ADMIN_STORAGE_KEY = 'thereTechAdminToken';
const ADMIN_USERS_KEY = 'thereTechAdminUsers';

// Seed default admin if not present
export function ensureDefaultAdmin() {
	const existing = JSON.parse(localStorage.getItem(ADMIN_USERS_KEY) || '[]');
	if (!existing.find(u => u.username === 'monchel')) {
		const seeded = [...existing, { username: 'monchel', password: 'monchel1236' }];
		localStorage.setItem(ADMIN_USERS_KEY, JSON.stringify(seeded));
	}
}

export function getAdminUsers() {
	return JSON.parse(localStorage.getItem(ADMIN_USERS_KEY) || '[]');
}

export function saveAdminUsers(users) {
	localStorage.setItem(ADMIN_USERS_KEY, JSON.stringify(users));
}

export function loginAdmin(username, password) {
	ensureDefaultAdmin();
	const users = getAdminUsers();
	const found = users.find(u => u.username === username && u.password === password);
	if (!found) return false;
	const token = btoa(`${username}:${Date.now()}`);
	localStorage.setItem(ADMIN_STORAGE_KEY, token);
	return true;
}

export function logoutAdmin() {
	localStorage.removeItem(ADMIN_STORAGE_KEY);
}

export function isAdminAuthenticated() {
	return Boolean(localStorage.getItem(ADMIN_STORAGE_KEY));
}