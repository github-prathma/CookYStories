class AuthenticationService {
    registerSuccessLogin(username, password, token) {
        sessionStorage.setItem('authenticatedUser', username);
        sessionStorage.setItem('password', password);
        sessionStorage.setItem('token', token);
    }

    logout() {
        sessionStorage.removeItem('authenticatedUser')
        sessionStorage.removeItem('password')
        sessionStorage.removeItem('token')
    }

    isLoggedIn() {
        let user = sessionStorage.getItem('authenticatedUser');
        if (user == null) {
            return false;
        }
        return true;
    }

    getLoggedInUser() {
        let user = sessionStorage.getItem('authenticatedUser');
        if (user=== null) {
            return ''
        }
        return user;
    }

}
export default new AuthenticationService()