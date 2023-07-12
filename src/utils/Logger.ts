import chalk from 'chalk'

export default class Logger {
    public static info(...args: any[]): void {
        console.log(chalk.bgBlueBright.gray(' INFO '), ...args)
    }

    public static warn(...args: any[]): void {
        console.warn(chalk.bgYellow.gray(' WARN '), ...args)
    }

    public static error(...args: any[]): void {
        console.error(chalk.bgRed.white(' ERROR '), ...args)
    }

    public static debug(...args: any[]): void {
        console.debug(chalk.bgGreen.gray(' DEBUG '), ...args)
    }
}
