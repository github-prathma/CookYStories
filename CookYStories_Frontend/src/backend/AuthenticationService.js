class AuthenticationService {

    profileImageUrl = ""


    registerSuccessLogin(username, password, token) {
        sessionStorage.setItem('authenticatedUser', username);
        sessionStorage.setItem('password', password);
        sessionStorage.setItem('token', token);
    }

    setProfileImage(profileImageUrl) {
        this.profileImageUrl = profileImageUrl
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

    getLoggedInPassword() {
        let password = sessionStorage.getItem('password');
        if (password === null) {
            return ''
        }
        return password
    }

    getProfileImageUrl() {
        return this.profileImageUrl;
    }

}
export default new AuthenticationService()