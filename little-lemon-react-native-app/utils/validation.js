export const validateForm = (form) => {
    const newErrors = {};
    const { username, email, password } = form;

    if (!username) {
        newErrors.username = "Username is required";
    }

    if (!email) {
        newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        newErrors.email = "Email address is invalid";
    }

    if (!password) {
        newErrors.password = "Password is required";
    } else if (password.length < 6) {
        newErrors.password = "Password must be at least 6 characters";
    }

    return newErrors;
};