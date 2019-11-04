module.exports = {
    prod: process.env.NODE_ENV === 'development' ? '/test' : '',//正常使用的地址
    dev: ''//代理时使用
}