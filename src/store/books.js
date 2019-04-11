import Vue from 'vue'

export default {
    state: {
        books: [],
        // books: [
        //     {
        //         parts: [
        //             {
        //                 id: '01',
        //                 title: 'PART 1 - THE BOY WHO LIVED',
        //                 link: 'http://www.hogwartsishere.com/library/book/7107/chapter/1/'
        //             }
        //         ]
        //     },
        // ]
    },
    mutations: {
        SET_BOOKS(state, payload) {
            state.books = payload
        }
    },
    actions: {
        LOAD_BOOKS({commit}) {
            Vue.$db.collection('books')
            .get()
            .then(querySnapshot => {
                let books = []
                querySnapshot.forEach(element => {
                    const data = element.data()
                    let book = {
                        id: element.id,
                        author: data.author,
                        title: data.title,
                        description: data.description,
                        imageUrl: data.imageUrl,
                        rating: data.rating,
                        ratingsCount: data.ratingsCount,
                        parts: data.parts
                    }
                    books.push(book)
                });
                commit('SET_BOOKS', books)
            })
            .catch(error => console.log(error))
        }                                                    
    },
    getters: {
        GET_BOOKS: state => state.books
    }
}