import { describe, it, expect} from "vitest";
import { addTwoNumbers } from "../functions/add";
import { subtractTwoNumbers } from "../functions/subtract";
import { multiplyTwoNumbers } from "../functions/multiply";
import { divideTwoNumbers } from "../functions/divide";
import { reverseString } from "../functions/reverseString";
import { isPalindrome } from "../functions/palindrome";
import { findMax } from "../functions/findMax";

describe("addTwoNumbers", () =>{
    it("should add two positive numbers", () =>{
        expect(addTwoNumbers(4,5)).toBe(9);
    })
    it("should only perform operations on number types", () =>{
        expect(addTwoNumbers("-4",5)).toBe(NaN);
    })
})

describe("subtractTwoNumbers", () => {
    it("should subtract two postive numbers", () =>{
        expect(subtractTwoNumbers(10,6)).toBe(4)
    })
    it("should subtract two numbers either postive/negative numbers", () =>{
        expect(subtractTwoNumbers(10,-6)).toBe(16)
    })
    it("should only perform operation on number types", () =>{
        expect(subtractTwoNumbers(10,false)).toBe(NaN)
    })
})

describe("multiplyTwoNumbers", () => {
    it("should multiply two numbers", () => {
        expect(multiplyTwoNumbers(5,4)).toBe(20)
    })
    it("should only perfom multiplication on number types", () => {
        expect(multiplyTwoNumbers(5,true)).toBe(NaN)
    })
})

describe("divideTwoNumbers", () => {
    it("divide two numbers and return remainder", () => {
        expect(divideTwoNumbers(17,4)).toBe(1)
    })
    it("making the numerator 0 and the denominator any value", () => {
        expect(divideTwoNumbers(0,3)).toBe(0);
    })
    it("divide two numbers and return Null if b = 0", () => {
        expect(divideTwoNumbers(17,0)).toBe("Null")
    })
})

describe("reversedString", () => {
    it("returns reversed String", () => {
        expect(reverseString("hello world")).toBe("dlrow olleh")
    })
    it("returns reversed String", () => {
        expect(reverseString("2345")).toBe("5432")
    })
    it("argument passed into funtion is not a string", () => {
        expect(reverseString(12345)).toBe("Not a string")
    })
})

describe("isPalindrome", () => {
    it("returns true if the word is a palindrome", () => {
        expect(isPalindrome("madam")).toBe(true)
    })
    it("returns false if the word is not a palindrome", () => {
        expect(isPalindrome("hello")).toBe(false)
    })
})

describe("findMaxNumber", () => {
    it("return the value of the highest number in an array", () => {
        expect(findMax([45, 30, 3, 10, 80, 81])).toBe(81)
    })
    it("return NaN if any value in the array is not of type number", () => {
        expect(findMax(["Yes", 20, "lol", "you"])).toBe(NaN)
    })
})