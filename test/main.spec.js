import { beforeEach, describe, expect, it } from "vitest";

describe('test', () => {
    let testState;
    let someServiceOne;
    beforeEach(() => {
        angular.mock.module('some.angular.module')
        
        inject($injector => {
            testState = {
                someService: $injector.get('someService')
            }
        })
})
    it('should inject angular services', () => {
        someServiceOne = testState.someService
        expect(testState.someService).toBeTruthy()
    })

    it('should re-instantiate angular service for each test', () => {
        expect(testState.someService).not.toBe(someServiceOne)
    })
})