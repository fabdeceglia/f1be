export class Logger {
    constructor() {}

    log(type: 'warning' | 'error' | 'log', message: string): void {

        switch (type) {
            case 'warning':
                console.warn(`⚡️[server]::WARNING: ${message}`);
                break;
            case 'error':
                console.error(`⚡️[server]::ERROR: ${message}`);
                break;
            case 'log':
                console.log(`⚡️[server]: ${message}`)
                break;
            default:
                console.log(`⚡️[server]: ${message}`)
                break;
        }

    }
}