import { comments } from './modules/comments.js'
import { posts } from './modules/posts.js'
import { users } from './modules/users.js'

//прописываем в юзера его посты и коменты к этим постам
users.forEach((user) => {

    user.post = posts.filter((post) => {
        post.comments = comments.filter((comment) => {
            return post.id === comment.postId
        })
        return user.id === post.userId

    })

})

// сортируем юзеров по имени

// // users.sort((a, b) => {
// //     if (a.name.toLowerCase() > b.name.toLowerCase()) {
// //         return 1
// //     } else if (a.name.toLowerCase() < b.name.toLowerCase()) {
// //         return -1
// //     } else {
// //         return 0
// //     }
// // })

// users.sort((a, b) => {
//     return a.post.length - b.post.length
// })
console.log(users)



//ищет указаную строку в имени юзера, в post.body и в comment.body(в юзере, в постах и коментах. иерархия вложений обьектов следующая: users=>user=>posts(массив постов)=>post=>comments(массив коментов)=>comment) 
function search(str) {
    let _posts = []
    let _comments = []

    let _users = users.filter((user) => {
        _posts = [..._posts,
        ...user.post.filter((p) => {
            _comments = [..._comments, ...p.comments.filter((c) => {
                return c.body.includes(str)
            })
            ]
            return p.body.includes(str)
        })
        ]
        return user.name.includes(str)
    })
    return [_users, _posts, _comments]
}

console.log(search('ba'))