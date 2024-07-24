 const info = (message: string, value?: any) => console.log(`\n [CUSTOM-INFO] ${message} \n`, value, "\n");
 const error = (message: string, value?: any) => console.error(`\n [CUSTOM-ERROR] ${message} \n`, value, "\n");
 const warn = (message: string, value?: any) => console.warn(`\n [CUSTOM-WARN] ${message} \n`, value, "\n");
 const debug = (message: string, value?: any) => console.debug(`\n [CUSTOM-DEBUG] ${message} \n`, value, "\n");

 const startLogProcess = (message: string, scope: number =24) => console.log(`\n ${"-".repeat(scope / 2)} CUSTOM-LOG-START-PROCESS ${"-".repeat(scope / 2)} ${message} - ${new Date().toLocaleString()} \n `);
 const endLogProcess = (message: string, scope: number = 24) => console.log(`\n ${"-".repeat(scope / 2)} CUSTOM-LOG-END-PROCESS ${"-".repeat(scope / 2)} ${message} - ${new Date().toLocaleString()} \n `);

 const customLog = {info, error, warn, debug, startLogProcess, endLogProcess}
 export default customLog;
