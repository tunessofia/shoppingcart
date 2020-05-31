export const loadState = (key) => {
    try {
        return JSON.parse(localStorage.getItem(key));
    }
    catch (err) {
        return undefined;
    }
};

export const saveState = (key, value) => {
    try {
        localStorage.setItem(key, JSON.stringify(value));
    }
    catch (err) {

    }
};