import {  describe, it, expect, beforeEach } from "vitest";
import {  DurationFormatPipe } from "./duration-format.pipe";

describe('DurationFormatPipe', () => {

    let pipe: DurationFormatPipe;

    beforeEach( () => {
        pipe = new DurationFormatPipe();
    });

    it('should create the pipe', () =>{
        expect(pipe).toBeTruthy;
    });

    it('should format duration', () =>{
        const result = pipe.transform("05:30");
        expect(result).toBe("05h 30m");
    });

})