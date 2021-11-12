process.env.NODE_ENV = "test"
const db = require("./db");
const Book = require('./models/book')

describe("Test book routes", () => {
    beforeEach(async () => {
        await db.query("DELETE FROM books")
    })
    test("can create", async () => {
        let b = await Book.create({
            "isbn": "0691161518",
            "amazon_url": "http://a.co/eobPtX2",
            "author": "Matthew Lane",
            "language": "english",
            "pages": 264,
            "publisher": "Princeton University Press",
            "title": "Power-Up: Unlocking the Hidden Mathematics in Video Games",
            "year": 2017
        })
        expect(b).toEqual({
            "isbn": "0691161518",
            "amazon_url": "http://a.co/eobPtX2",
            "author": "Matthew Lane",
            "language": "english",
            "pages": 264,
            "publisher": "Princeton University Press",
            "title": "Power-Up: Unlocking the Hidden Mathematics in Video Games",
            "year": 2017
        })
    })
    test("can update", async () => {
        let newBook = await Book.create({
            "isbn": "0691161518",
            "amazon_url": "http://a.co/eobPtX2",
            "author": "Matthew Lane",
            "language": "english",
            "pages": 264,
            "publisher": "Princeton University Press",
            "title": "Power-Up: Unlocking the Hidden Mathematics in Video Games",
            "year": 2017
        })
        let b = await Book.update("0691161518", {
            "amazon_url": "http://a.co/eobPtX2",
            "author": "Matt Lain",
            "language": "english",
            "pages": 270,
            "publisher": "Princeton University Press",
            "title": "Power-Down: Locking the Found Arithmitic in Chess",
            "year": 1500
        })
        expect(b).toEqual({
            "isbn": "0691161518",
            "amazon_url": "http://a.co/eobPtX2",
            "author": "Matt Lain",
            "language": "english",
            "pages": 270,
            "publisher": "Princeton University Press",
            "title": "Power-Down: Locking the Found Arithmitic in Chess",
            "year": 1500
        })
    })
})