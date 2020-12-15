"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.doSomeAuthorization = void 0;
function doSomeAuthorization(username, password) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (username === 'user' && password === 'password') {
                resolve('successfully authenticated');
            }
            else {
                resolve('not successful');
            }
        }, 2000);
    });
}
exports.doSomeAuthorization = doSomeAuthorization;
//# sourceMappingURL=utils.js.map