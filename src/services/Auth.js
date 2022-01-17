export default function AuthService() {
    /**
     * 
     * @returns the base URL for Admin API based on environment
     */
    this.getBaseURL = () => {
        return process.env.REACT_APP_ADMIN_API_BASE_URL;
    }

    /**
     * Authenticate user with identity provider
     */
    this.authenticate = (email, password) => {
        const baseUrl = this.getBaseURL();

        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const response = { data: { email } };
                resolve(response);
            }, 2000)
        });
    };
};