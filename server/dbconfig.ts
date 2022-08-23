export const  config = {
    user:'admin',
    password: 'pwd',
    server:  'DESKTOP-GVM02BL', // if it does not work try- localhost
    database:  'BitBusta',
    options: {
      trustedconnection:  true,
      enableArithAbort:  true,
      trustServerCertificate: true,
      instancename:  'SQLEXPRESS'  // SQL Server instance name
    },
    port:  1433
  }
  