export default function AuthService() {
    /**
     * Authenticate user with identity provider
     */
    this.authenticate = (email, password) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const response = { data: { email } };
                resolve(response);
            }, 2000)
        });
    };
};