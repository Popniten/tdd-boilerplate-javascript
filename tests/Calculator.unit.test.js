let chai = require('chai')
let expect = chai.expect
//let should = chai.should()

let Calculator = require('../app/Calculator')

describe('Calculator', () => {
    describe('Addition', () => {
        it('2 + 3 should equal 5', () => {
            expect(Calculator.add(2, 3)).to.equal(5)
        })

        it('2 + 3 should NOT equal 6', () => {
            expect(Calculator.add(2, 3)).to.not.equal(6)
        })

        it('should should throw an error if any number is omitted', () => {
            expect(() => {
                Calculator.add(4)
            }).to.throw(Error)
        })
    })

    describe('Subtracion', () => {
        it('should correclty add the two numbers', () => {
            // Assertions here.
        })

        it('should should throw an error if any number is omitted', () => {
            // Assertions here.
        })
    })

    describe('Multiplication', () => {
        it('should should throw an error if any number is omitted', () => {
            // Assertions here.
        })
    })

    describe('Division', () => {
        it('should correclty add the two numbers', () => {
            // Assertions here.
        })
    })
})
