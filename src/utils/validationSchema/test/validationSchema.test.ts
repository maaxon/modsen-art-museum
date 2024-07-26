import {searchSchema} from "@utils/validationSchema/validationSchema.ts";


describe("validation schema",()=>{

    test("valid text", ()=>{
       const valid = searchSchema.isValidSync("test 123");
       expect(valid).toBeTruthy();
    })

    test("text with invalid letters", ()=>{
        expect(()=>searchSchema.validateSync("test 123а")).toThrowError("Only Latin letters, digits, and spaces are allowed");
    })

    test("text with invalid length", ()=>{
        expect(()=>searchSchema.validateSync("t".repeat(51))).toThrowError("Query is too long. Maximum length is 50 characters.");
    })
})