import { createSlice } from '@reduxjs/toolkit'

const rootSlice = createSlice({
    name: "root",
    initialState: {
        ISBN: "ISBN",
        author: "Author",
        book_title: "Book Title",
        book_length: "Book Length",
        book_type: "Book Type",
    },
    reducers: {
        chooseISBN: (state, action) => { state.ISBN = action.payload},
        chooseauthor: (state, action) => { state.author = action.payload},
        choosebook_title: (state, action) => { state.book_title = action.payload},
        choosebook_length: (state, action) => { state.book_length = action.payload},
        choosebook_type: (state, action) => { state.book_type = action.payload}
    }
})

export const reducer = rootSlice.reducer;
export const { chooseISBN, chooseauthor, choosebook_title, choosebook_length, choosebook_type} = rootSlice.actions