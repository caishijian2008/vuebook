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
// read(function (books) { // books代表所有图书，此处是测试
//   console.log(books)
// })

function write (data, cb) { // 写入内容
  console.log(JSON.stringify(data))
  fs.writeFile('/book.json', JSON.stringify(data), cb)
}
// write({}, function () { // 此处是测试
//   console.log('写入成功')
// })

http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Content-Length, Authorization, Accept,X-Requested-With')
  res.setHeader('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
  res.setHeader('X-Powered-By', ' 3.2.1')
  if (req.method === 'OPTIONS') return res.end() /* return res.send() 让options请求快速返回 */
  let {pathname, query} = url.parse(req.url, true) // true把query转化成对象
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
    return
  }
  if (pathname === '/book') { // 对书的增删改查
    let id = parseInt(query.id) // query.id取出的是字符串
    switch (req.method) { // ?id=1
      case 'GET':
        if (!isNaN(id)) { // 查询一本
          read(function (books) {
            let book = books.find(item => item.bookId === id)
            if (!book) book = {} // 如果没找到则是undefined，就赋予空对象
            res.setHeader('Content-Type', 'application/json;charset=utf8')
            res.end(JSON.stringify(book))
          })
        } else { // 获取所有图书
          read(function (books) {
            res.setHeader('Content-Type', 'application/json;charset=utf8')
            res.end(JSON.stringify(books.reverse()))
          })
        }
        break
      case 'POST':
        let str = ''
        req.on('data', chunk => {
          str += chunk
        })
        req.on('end', () => {
          let book = JSON.parse(str)
          read(function (books) {
            // 生成bookId
            book.bookId = books.length ? books[books.length - 1].bookId + 1 : 1
            books.push(book) // 将数据放到books中，此时的books在内存中
            write(books, function () {
              res.end(JSON.stringify(book))
            })
          })
        })
        break
      case 'PUT':
        if (id) {
          let str = ''
          req.on('data', chunk => {
            str += chunk
          })
          req.on('end', () => {
            let book = JSON.parse(str) // book要改成的样子
            read(function (books) {
              books = books.map(item => {
                if (item.bookId === id) { // 找到id相同的那一本书
                  return book // 用新的书替换旧的
                }
                return item // 其它书正常返回
              })
              write(books, function () { // 把内存中的新书信息写入到json中
                res.end(JSON.stringify(book))
              })
            })
          })
        }
        break
      case 'DELETE':
        read(function (books) {
          books = books.filter(item => item.bookId !== id)
          console.log(books.length)
          write(books, function () {
            res.end(JSON.stringify({})) // 删除返回空对象
          })
        })
        break
    }
  }
}).listen(3000)
