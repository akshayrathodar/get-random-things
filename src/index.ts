import { v4 } from "uuid";

export class Random {
    static randomDate(fromdate?: Date, todate?: Date) {
        let from: any = fromdate ? fromdate : randomIntFromInterval(1800, new Date().getFullYear());
        let to: any = todate ? todate : randomIntFromInterval(1800, new Date().getFullYear());
        return generateRandomDate(new Date(from, 0, 1), new Date(to, 0, 1))
    }

    static randomColor(data?: string) {
        switch (data) {
            case "hash":
                return rgbToHex(red(), green(), blue());
            default:
                return "rgb(" + red() + "," + green() + "," + blue() + ")";
        }
    }

    static randomId() {
        return v4() as String;
    }

}

function red() {
    return randomIntFromInterval(0, 255);
}

function green() {
    return randomIntFromInterval(0, 255);
}

function blue() {
    return randomIntFromInterval(0, 255);
}

function randomIntFromInterval(min: number, max: number) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function rgbToHex(r: any, g: any, b: any) {
    return "#" + (1 << 24 | r << 16 | g << 8 | b).toString(16).slice(1);
}

function generateRandomDate(from: Date, to: Date) {
    return new Date(
        from.getTime() +
        Math.random() * (to.getTime() - from.getTime()),
    );
}
