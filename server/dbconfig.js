"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
exports.config = {
    user: 'admin',
    password: 'pwd',
    server: 'DESKTOP-GVM02BL',
    database: 'BitBusta',
    options: {
        trustedconnection: true,
        enableArithAbort: true,
        trustServerCertificate: true,
        instancename: 'SQLEXPRESS' // SQL Server instance name
    },
    port: 1433
};
//# sourceMappingURL=dbconfig.js.map