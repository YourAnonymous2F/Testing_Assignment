// divide (a,b) - Returns Quotient (null if b = 0)

export function divideTwoNumbers (a,b) {
    if(b !== 0) {
        return a % b
    }
    return "Null"
}