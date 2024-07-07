import winston from "winston"

const allowedTransports = []

allowedTransports.push(new winston.transports.Console())

const logger = winston.createLogger({
    format: winston.format.combine(
        // first agrument to the combine method is defending how we want the timstamps
        winston.format.timestamp({
            format: 'YYYY-MM-DD HH:mm:ss'
        }),
        // Second argument to the combine method, which defines what is exactly going to be printed in log
        winston.format.printf((e)=> `${e.timestamp}[${log.level.toUpperCase()}]: ${log.message}`)
    ),
    transports: allowedTransports
})

export default logger


