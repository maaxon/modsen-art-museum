import {textLengthLimiter} from "@utils/textLenghtLimiter/textLengthLimiter.ts";

describe("text length limiter",()=>{
    test("text less then limit",
        ()=>expect(textLengthLimiter("test",10)).toEqual("test"))
    test("text greater then limit",
        ()=>expect(textLengthLimiter("testte sttest",10)).toEqual("testte stt..."))
})