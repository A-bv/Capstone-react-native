export const validateForm = (form) => {
    const newErrors = {};
    const { password } = form;
    // Trim username/email so whitespace-only input is treated as empty.
    const username = form.username?.trim();
    const email = form.email?.trim();

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