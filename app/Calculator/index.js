module.exports = class Calculator {
    static add(a, b) {
        if (a === undefined || b === undefined) {
            throw new Error('Two numbers are needed!')
        }

        return a + b
    }

    static div(a, b) {
        if (a === undefined || b === undefined) {
            throw new Error('Two numbers are needed!')
        }

        return a / b
    }

    static mult(a, b) {
        if (a === undefined || b === undefined) {
            throw new Error('Two numbers are needed!')
        }

        return a * b
    }

    static sub(a, b) {
        if (a === undefined || b === undefined) {
            throw new Error('Two numbers are needed!')
        }

        return a - b
    }
}
