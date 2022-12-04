import * as fs from 'fs';
import path from 'path';
export  class Utils {
    public static readInput(filePath: string): string {
        const file = fs.readFileSync(path.join(__dirname, filePath),'utf8');
        return file.replace(/\r\n/g, "\r").replace(/\n/g, "\r")
    }

    public static getLines(filePath: string) {
        return Utils.readInput(filePath).split(/\r/)
    }
}

