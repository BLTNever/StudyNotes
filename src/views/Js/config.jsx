export const compareTable = [
    {
        key: '1',
        data: '"foo"',
        toString: 'String',
        typeof: 'string',
    }, {
        key: '2',
        data: 'new String(“foo”)',
        toString: 'String',
        typeof: 'object',
    }, {
        key: '3',
        data: 'new Number(1.2)',
        toString: 'Number',
        typeof: 'object',
    }, {
        key: '4',
        data: 'true',
        toString: 'Boolean',
        typeof: 'boolean',
    }, {
        key: '5',
        data: 'new Boolean(true)',
        toString: 'Boolean',
        typeof: 'object',
    }, {
        key: '6',
        data: 'new Date()',
        toString: 'Date',
        typeof: 'object',
    }, {
        key: '7',
        data: 'new Error()',
        toString: 'Error',
        typeof: 'object',
    }, {
        key: '8',
        data: 'new Array(1, 2, 3)',
        toString: 'Array',
        typeof: 'object',
    }, {
        key: '9',
        data: '/abc/g',
        toString: 'RegExp',
        typeof: 'object',
    }, {
        key: '10',
        data: 'new RegExp(“meow”)',
        toString: 'RegExp',
        typeof: 'object',
    }
]