export default {
    state: {
        books: [
            {
                id: '101',
                title: 'Harry Potter and The Philosopher\'s Stone',
                desciption: 'This is the tale of Harry Potter, an ordinary 11-year-old boy serving as a sort of slave for his aunt and uncle who learns that he is actually a wizard and has been invited to attend the Hogwarts School for Witchcraft and Wizardry. Harry is snatched away from his mundane existence by Rubeus Hagrid, the grounds keeper for Hogwarts, and quickly thrown into a world completely foreign to both him and the viewer. Famous for an incident that happened at his birth, Harry makes friends easily at his new school. He soon finds, however, that the wizarding world is far more dangerous for him than he would have imagined, and he quickly learns that not all wizards are ones to be trusted.',
                author: 'J. K. Rowling',
                imageId: '201',
                rating: 4,
                ratingsCount: 100
            },
            {
                id: '102',
                title: 'Harry Potter and The Chamber of Secrets',
                desciption: 'Forced to spend his summer holidays with his muggle relations, Harry Potter gets a real shock when he gets a surprise visitor: Dobby the house-elf, who warns Harry Potter against returning to Hogwarts, for terrible things are going to happen. Harry decides to ignore Dobby\'s warning and continues with his pre-arranged schedule. But at Hogwarts, strange and terrible things are indeed happening. Harry is suddenly hearing mysterious voices from inside the walls, muggle-born students are being attacked, and a message scrawled on the wall in blood puts everyone on his or her guard, "The Chamber Of Secrets Has Been Opened. Enemies Of The Heir, Beware',
                author: 'J. K. Rowling',
                imageId: '202',
                rating: 4.5,
                ratingsCount: 100
            }
        ]
    },
    mutations: {
        SET_BOOKS(state, payload) {
            state.books = payload
        }
    },
    getters: {
        getBooks: state => state.books
    }
}