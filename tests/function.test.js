const { transformString, sumNums } = require('../index');

describe(
    'testing functions',
    ()=>{
        it(
            'sumNums should add 2 numbers',
            ()=>{
                const sum = sumNums(2,5)
                expect(sum).toBe(7)
            }
        )
        it(
            'transformString should change a string',
            ()=>{
                const str = transformString('string')
                expect(str).toBe('STRING')
            }
        )
    }
)

