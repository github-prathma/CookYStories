class AuthenticationService {



    registerSuccessLogin(username, password, token, profileImageUrl) {
        sessionStorage.setItem('authenticatedUser', username);
        sessionStorage.setItem('password', password);
        sessionStorage.setItem('token', token);
        sessionStorage.setItem('profileImageUrl', profileImageUrl)
    }

    logout() {
        sessionStorage.removeItem('authenticatedUser')
        sessionStorage.removeItem('password')
        sessionStorage.removeItem('token')
        sessionStorage.removeItem('profileImageUrl')
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

    getLoggedInPassword() {
        let password = sessionStorage.getItem('password');
        if (password === null) {
            return ''
        }
        return password
    }

    getProfileImageUrl() {
        return sessionStorage.getItem('profileImageUrl');
    }

}
export default new AuthenticationService()