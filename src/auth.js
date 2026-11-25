
const USERS = 'homeease_users';
const SESSION = 'homeease_session';

export function initializeData() {
  if (!localStorage.getItem(USERS)) {
    localStorage.setItem(USERS, JSON.stringify([
      {
        id: 1,
        name: 'Admin',
        email: 'admin@homeease.com',
        password: 'admin123',
        role: 'admin'
      }
    ]));
  }
}

export function loginUser(email, password) {
  const users = JSON.parse(localStorage.getItem(USERS) || '[]');

  const user = users.find(
    u => u.email === email && u.password === password
  );

  if (user) {
    localStorage.setItem(SESSION, JSON.stringify(user));
    return user;
  }

  return null;
}

export function signupUser(name, email, password) {
  const users = JSON.parse(localStorage.getItem(USERS) || '[]');

  if (users.some(u => u.email === email)) {
    return false;
  }

  const user = {
    id: Date.now(),
    name,
    email,
    password,
    role: 'user'
  };

  users.push(user);
  localStorage.setItem(USERS, JSON.stringify(users));
  localStorage.setItem(SESSION, JSON.stringify(user));

  return true;
}

export function getSession() {
  return JSON.parse(localStorage.getItem(SESSION) || 'null');
}

export function logoutUser() {
  localStorage.removeItem(SESSION);
}
