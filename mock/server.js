let http = require('http')
let fs = require('fs')
let url = require('url')

// 获取轮播图 /sliders
let sliders = require('./sliders')

function read (cb) {
  fs.readFile('./book.json', 'utf8', function (err, data) {
    if (err || data.length === 0) {
      cb([]) // 如果有错误，或者文件没长度，就是空数组
    } else {
      cb(JSON.parse(data)) // 将读出来的内容转化成对象
    }
  })
}
// read(function (books) { // books代表所有图书， 此处是测试
//   console.log(books)
// })

http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Content-Length, Authorization, Accept,X-Requested-With')
  res.setHeader('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
  res.setHeader('X-Powered-By', ' 3.2.1')
  if (req.method === 'OPTIONS') return res.send() /* 让options请求快速返回 */
  // let {pathname, query} = url.parse(req.url)
  let {pathname} = url.parse(req.url)
  if (pathname === '/sliders') {
    res.setHeader('Content-Type', 'application/json;charset=utf8')
    return res.end(JSON.stringify(sliders))
  }
  if (pathname === '/hot') {
    read(function (books) {
      res.setHeader('Content-Type', 'application/json;charset=utf8')
      let hot = books.reverse().slice(0, 6)
      res.end(JSON.stringify(hot))
    })
    return ''
  }
}).listen(3000)
