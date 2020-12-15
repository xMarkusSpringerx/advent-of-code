"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const ssh2 = __importStar(require("ssh2"));
const utils_1 = require("./utils");
const ssh2_streams_1 = require("ssh2-streams");
var OPEN_MODE = ssh2_streams_1.SFTPStream.OPEN_MODE;
var STATUS_CODE = ssh2_streams_1.SFTPStream.STATUS_CODE;
new ssh2.Server({
    // Use absolute path here
    hostKeys: [fs_1.default.readFileSync('/Users/ma.springer/.ssh/id_rsa')],
    banner: "This is our server",
}, (client, info) => {
    console.log(`Connection requested by ${info.ip}`);
    client.on('authentication', (ctx) => __awaiter(void 0, void 0, void 0, function* () {
        console.log(`User ${ctx.username} from ip ${info.ip} attempting to authenticate with method= ${ctx.method}`);
        let username;
        let password;
        if (ctx.method === 'password') {
            username = ctx.username;
            password = ctx.password;
            try {
                yield utils_1.doSomeAuthorization(username, password);
                ctx.accept();
            }
            catch (e) {
                console.error(e);
                ctx.reject(['password']);
                client.end();
            }
        }
        else {
            ctx.reject(['password']);
        }
        client.on('ready', () => {
            console.log('Client authenticated!');
            client.on('session', (acceptSession, rejectSession) => {
                const session = acceptSession();
                if (!session) {
                    client.end();
                    return;
                }
                console.log('Session started!');
                // Specific to an SFTP Connection. Also X11 or shell ... possible.
                session.on('sftp', (acceptSftp, rejectSftp) => {
                    console.log('Client SFTP session');
                    const sftp = acceptSftp();
                    var openFiles = {};
                    var handleCount = 0;
                    sftp.on('OPEN', function (reqid, filename, flags, attrs) {
                        // only allow opening /tmp/foo.txt for writing
                        if (filename !== '/tmp/foo.txt' || !(flags & OPEN_MODE.WRITE))
                            return sftp.status(reqid, STATUS_CODE.FAILURE);
                        // create a fake handle to return to the client, this could easily
                        // be a real file descriptor number for example if actually opening
                        // the file on the disk
                        var handle = new Buffer(4);
                        openFiles[handleCount] = true;
                        handle.writeUInt32BE(handleCount++, 0);
                        sftp.handle(reqid, handle);
                        console.log('Opening file for write');
                    }).on('WRITE', function (reqid, handle, offset, data) {
                        if (handle.length !== 4 || !openFiles[handle.readUInt32BE(0)])
                            return sftp.status(reqid, STATUS_CODE.FAILURE);
                        // fake the write
                        sftp.status(reqid, STATUS_CODE.OK);
                        var inspected = require('util').inspect(data);
                    }).on('READ', (reqID, handle, offset, length) => {
                        console.info('READ', { team: username });
                    }).on('FSTAT', (reqID, handle) => {
                        console.info('FSTAT', { team: username });
                    }).on('FSETSTAT', (reqID, handle) => {
                        console.info('FSETSTAT', { team: username });
                    }).on('OPENDIR', (reqID, path) => {
                        console.info('OPENDIR', { team: username });
                    }).on('READDIR', (reqID, handle) => {
                        console.info('READDIR', { team: username });
                    }).on('LSTAT', (reqID, path) => {
                        console.info('LSTAT', { team: username });
                    }).on('STAT', (reqID, path) => {
                        console.info('STAT', { team: username });
                    }).on('REMOVE', (reqID, path) => {
                        console.info('REMOVE', { team: username });
                    }).on('RMDIR', (reqID, path) => {
                        console.info('READ', { team: username });
                    }).on('REALPATH', (reqID, path) => {
                        console.info('REALPATH', { team: username });
                    }).on('READLINK', (reqID, path) => {
                        console.info('READLINK', { team: username });
                    }).on('SETSTAT', (reqID, path, attrs) => {
                        console.info('SETSTAT', { team: username });
                    }).on('MKDIR', (reqID, path, attrs) => {
                        console.info('MKDIR', { team: username });
                    }).on('RENAME', (reqID, oldPath, newPath) => {
                        console.info('RENAME', { team: username });
                    }).on('SYMLINK', (reqID, linkpath, tagetpath) => {
                        console.info('SYMLINK', { team: username });
                    }).on('end', () => {
                        console.info('end', { team: username });
                    }).on('close', () => {
                        console.info('close', { team: username });
                    }).on('continue', (reqID, handle, offset, length) => {
                        console.info('continue', { team: username });
                    }).on('CLOSE', (reqid, handle) => {
                        var fnum;
                        if (handle.length !== 4 || !openFiles[(fnum = handle.readUInt32BE(0))])
                            return sftp.status(reqid, STATUS_CODE.FAILURE);
                        delete openFiles[fnum];
                        sftp.status(reqid, STATUS_CODE.OK);
                        console.log('Closing file');
                    }).on('error', (e) => {
                        console.error('An SFTP error happened: ', e);
                    });
                });
                client.on('close', () => {
                    console.info('CLOSE', { team: username });
                });
                client.on('end', (hadError) => {
                    console.info('END', { team: username });
                });
                client.on('session', (acceptOnSession, rejectOnSession) => {
                    console.info('SESSION', { team: username });
                });
                client.on('rekey', () => {
                    console.info('REKEY', { team: username });
                });
                client.on('continue', () => {
                    console.info('CONTINUE', { team: username });
                });
                client.on('end', () => __awaiter(void 0, void 0, void 0, function* () {
                    // Do some cleanup here
                    console.info('Client disconnected', { team: username });
                }));
                client.on('error', (err) => {
                    console.error(`A client error occurred from ${info.ip}, ${err}`, { team: username });
                });
            });
        });
    }));
}).listen(1234, 'localhost', function () {
    console.log('Listening on port ' + this.address().port);
});
//# sourceMappingURL=server.js.map