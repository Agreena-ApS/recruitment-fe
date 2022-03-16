// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';


export const localStorageMock = (function () {
    let store: any = {}

    return {
        getItem: function (key: any) {
            return store[key] || null
        },
        setItem: function (key: any, value: any) {
            store[key] = value.toString()
        },
        removeItem: function (key: any) {
            delete store[key]
        },
        clear: function () {
            store = {}
        }
    }
})()

Object.defineProperty(window, 'localStorage', {
    value: localStorageMock
})


Object.assign(navigator, {
    clipboard: {
        writeText: () => { },
    },
});