const key = 'air-traffic';
const storage = sessionStorage;

export const saveState = (state) => {
    try {
        storage.setItem(key, JSON.stringify(state))
    }
    catch(error) {
        console.warn('unable to persist state', error)
    }
};

export const loadState = () => {
    try {
        return JSON.parse(storage.getItem(key))
    }
    catch(error) {
        console.warn('Failed to retrieve initialize state from storage', error)
    }
};

export const clearState = () => {
    storage.removeItem(key)
}