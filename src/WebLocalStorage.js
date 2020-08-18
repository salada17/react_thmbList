class LocalStorageUtilities {
    static set(key, value) {
        if (window.localStorage) {
            let data = value;
            if (typeof (data) === "object") {
                data = JSON.stringify(value);
            }
            window.localStorage.setItem(key, data);
        }
    }

    static get(key) {
        if (window.localStorage) {
            return window.localStorage.getItem(key);
        }

        return null;
    }

    static getJSON(key) {
        if (window.localStorage) {
            const data = LocalStorageUtilities.get(key);
            return JSON.parse(data);
        }

        return null;
    }

    static remove(key) {
        if (window.localStorage) {
            window.localStorage.removeItem(key);
        }
    }
}