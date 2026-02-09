// reverseString(str) - Returns reversed string

export function reverseString (string) {
    if (typeof string === "string") {
        let reversedString = ""
        for (let i = string.length - 1; i >= 0; i--) {
            reversedString += string[i]
        }
        return reversedString
    }
    return "Not a string"
}