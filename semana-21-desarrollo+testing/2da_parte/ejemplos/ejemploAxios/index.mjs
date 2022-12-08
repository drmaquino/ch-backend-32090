import axios, { AxiosError } from 'axios'

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com'

// const { data: postData } = await axios.post('/posts', { userId: 1, title: 'coderhouse', body: 'que buena clase la de hoy (?' })
// console.log(postData)

// const res = await axios.get('/posts/1')
// console.log(res)

// const { data: postData } = await axios.get('/posts?userId=1', {
//   headers: { "Accept-Encoding": "gzip,deflate,compress" }
// })
// console.log(postData)

// const { data: postData } = await axios.get('/posts', {
//   params: {
//     userId: 2
//   },
//   headers: { "Accept-Encoding": "gzip,deflate,compress" }
// })
// console.log(postData)

// const { data: replacedData } = await axios.put('/posts/1', { userId: 2, title: 'coderhouse', body: 'que buena clase la de hoy (?' })
// console.log(replacedData)

// const { data, status } = await axios.delete('/posts/1')
// console.log(data, status)


// try {
//   const { data: postData } = await axios.get('/posts/99999', {
//     // params: {
//     //   userId: 2
//     // },
//     // headers: { "Accept-Encoding": "gzip,deflate,compress" }
//   })
//   console.log(postData)
// } catch (error) {
//   if (!error.response) {
//     console.log('falló axios!')
//   } else {
//     console.log(error.response.status)
//   }
// }
