


export function getCoords(elem: Element) { // crossbrowser version
    var box = elem.getBoundingClientRect();

    var body = document.body;
    var docEl = document.documentElement;

    var scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
    var scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft;

    var clientTop = docEl.clientTop || body.clientTop || 0;
    var clientLeft = docEl.clientLeft || body.clientLeft || 0;

    var top = box.top + scrollTop - clientTop;
    var left = box.left + scrollLeft - clientLeft;

    return { top: Math.round(top), left: Math.round(left) };
}

type ClassValue = string | number | boolean | undefined | null;

export function clsx(...args: ClassValue[]): string {
    return args
        .filter(Boolean)
        .map(arg => String(arg))
        .join(' ');
}

export const removeOuterEmptyLines = (code: string): string => {
    // Split the code into lines
    const lines = code.split('\n');

    // Find the first non-empty line
    const startIndex = lines.findIndex(line => line.trim() !== '');

    // Find the last non-empty line
    const endIndex = lines.length - [...lines].reverse().findIndex(line => line.trim() !== '');

    // Extract the lines between the first and last non-empty lines (inclusive)
    const trimmedLines = lines.slice(startIndex, endIndex);

    // Join the lines back into a string
    return trimmedLines.join('\n');
}