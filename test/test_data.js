'use strict';

module.exports.testData = function () {
    var food_collection = [
        { id: 1, name: 'Apple', type: 'fruit' },
        { id: 2, name: 'Banana', type: 'fruit' },
        { id: 3, name: 'Blackberry', type: 'fruit' },
        { id: 4, name: 'Guava', type: 'fruit' },
        { id: 5, name: 'Mango', type: 'fruit' },
        { id: 6, name: 'Orange', type: 'fruit' },
        { id: 7, name: 'Papaya', type: 'fruit' },
        { id: 8, name: 'Salal Berry', type: 'fruit' },
        { id: 9, name: 'Strawberry', type: 'fruit' },
        { id: 10, name: 'Watermelon', type: 'fruit' },

        { id: 11, name: 'British ale', type: 'beer' },
        { id: 12, name: 'German lager', type: 'beer' },
        { id: 13, name: 'Irish ale', type: 'beer' },
        { id: 14, name: 'North American ale', type: 'beer' },
        { id: 15, name: 'North American lager', type: 'beer' },

        { id: 16, name: 'Abbaye de Tamié', type: 'curd' },
        { id: 17, name: 'Brânză', type: 'curd' },
        { id: 18, name: 'Algunder Butterkäse', type: 'curd' },
        { id: 19, name: 'Añejo cheese', type: 'curd' },
        { id: 20, name: 'Arīsh', type: 'curd' },
        { id: 21, name: 'Bagòs', type: 'curd' },
        { id: 22, name: 'Bałtycki', type: 'curd' },
        { id: 23, name: 'Boscatella di Fiavè', type: 'curd' },
        { id: 24, name: 'Bovški sir', type: 'curd' },
        { id: 25, name: 'Brânzǎ de burduf', type: 'curd' }
    ];
    var book_collection = [
        {
            name : "The Lightning Thief",
            category : ["book","hardcover"],
            author : {
                name: "Rick Riordan",
                age: 53,
                awards: [
                    'Shamus Award for Best First P. I. Novel',
                    'Anthony Award for Best Paperback Original',
                    'Hampshire Book Award',
                    'Edgar Award for Best Paperback Original'
                ]
            },
            genre : "fantasy",
            price : 12.50,
            pages : 384
        },
        {
            name : "The Sea of Monsters",
            category : ["book","paperback"],
            author : {
                name: "Rick Riordan",
                age: 53,
                awards: [
                    'Shamus Award for Best First P. I. Novel',
                    'Anthony Award for Best Paperback Original',
                    'Hampshire Book Award',
                    'Edgar Award for Best Paperback Original'
                ]
            },
            genre : "fantasy",
            price : 6.49,
            pages : 304
        },
        {
            name : "Sophie's World : The Greek Philosophers",
            category : ["book","paperback"],
            author : {
                name: "Jostein Gaarder",
                age: 64,
                awards: [
                    'Norwegian Booksellers\' Prize',
                    'The Brage Prize Honorary Award',
                    'Critics Prize for the Years Best Children\'s or Youth\'s Literature'
                ]
            },
            genre : "fantasy",
            price : 3.07,
            pages : 64
        },
        {
            name : "Lucene in Action, Second Edition",
            category : ["book","paperback"],
            author : {
                name: "Michael McCandless"
            },
            genre : "IT",
            price : 30.50,
            pages : 475
        }
    ];
    var movie_collection = [
        {
            name: 'The Dark Knight',
            release: '18 July 2008',
            box_office: '1.005 billion USD',
            genres: ['Action', 'Crime', 'Drama', 'Thriller'],
            director: {
                name: 'Christopher Nolan',
                profile: {
                    born: '30 July 1970',
                    birthplace: 'Westminster, United Kingdom',
                    spouse: 'Emma Thomas',
                    siblings: ['Jonathan Nolan', 'Matthew Francis Nolan']
                },
                awards: [
                    {
                        title: 'Empire Award for Best Director',
                        year: '2015'
                    },
                    {
                        title: 'Independent Spirit Award for Best Director',
                        year: '2002'
                    },
                    {
                        title: 'Saturn Award for Best Director',
                        year: '2011'
                    }
                ]
            },
            actors: [
                {
                    name: 'Christian Bale',
                    profile: {
                        born: '30 January 1974',
                        birthplace: 'Haverfordwest, United Kingdom',
                        spouse: 'Sibi Blazik'
                    },
                    awards: [
                        {
                            title: 'Academy Award for Best Actor in Supporting Role',
                            year: '2011'
                        },
                        {
                            title: 'Golden Globe Award for Best Actor in Supporting Role',
                            year: '2011'
                        },
                    ]
                },
                {
                    name: 'Heath Ledger',
                    profile: {
                        born: '4 April 1979',
                        birthplace: 'Perth, Australia',
                        died: '22 January 2008'
                    },
                    awards: [
                        {
                            title: 'Academy Award for Best Actor in Supporting Role',
                            year: '2008'
                        }
                    ]
                },
                {
                    name: 'Gary Oldman',
                    profile: {
                        born: '21 March 1958',
                        birthplace: 'New Cross, London, England',
                        spouse: 'Alexandra Edenborough'
                    },
                    awards: [
                        {
                            title: 'BAFTA Award for Best British Film',
                            year: '1998'
                        },
                        {
                            title: 'Empire Icon Award',
                            year: '2011'
                        }
                    ]
                },
                {
                    name: 'Michael Caine',
                    awards: [
                        {
                            title: 'Golden Globe Award for Best Actor',
                            year: '1999'
                        }
                    ]
                },
                {
                    name: 'Morgan Freeman',
                    awards: [
                        {
                            title: 'Academy Award for Best Actor in Supporting Role',
                            year: '2005'
                        },
                        {
                            title: 'AFI Life Achievement Award',
                            year: '2011'
                        }
                    ]
                },
            ]
        }
    ];
    this.food = {
        collection: food_collection,
        queries: [
            {
                keyword: 'av',
                description: 'Keyword: "av", Default Config',
                config: {},
                expected_result_objects: [food_collection[3], food_collection[22]]
            },
            {
                keyword: 'go',
                description: 'Keyword: "go", case_sensitive: false',
                config: { case_sensitive: false },
                expected_result_objects: [food_collection[4], food_collection[20]]
            },
            {
                keyword: 'go',
                description: 'Keyword: "go", replace_umlauts: false',
                config: { replace_umlauts: false },
                expected_result_objects: [food_collection[4]]
            },
            {
                keyword: 'an',
                description: 'Keyword: "an", Default Config',
                config: {},
                expected_result_objects: [
                    food_collection[1],
                    food_collection[4],
                    food_collection[5],
                    food_collection[11],
                    food_collection[13],
                    food_collection[14],
                    food_collection[16],
                    food_collection[18],
                    food_collection[24]
                ]
            },
            {
                keyword: 'an',
                description: 'Keyword: "an", replace_umlauts: false',
                config: { replace_umlauts: false },
                expected_result_objects: [
                    food_collection[1],
                    food_collection[4],
                    food_collection[5],
                    food_collection[11],
                    food_collection[13],
                    food_collection[14]
                ]
            },
            {
                keyword: 'ân',
                description: 'Keyword: "ân", replace_umlauts: false',
                config: { replace_umlauts: false },
                expected_result_objects: [food_collection[16], food_collection[24]]
            },
            {
                keyword: 'īs',
                description: 'Keyword: "īs", Default Config',
                config: {},
                expected_result_objects: [food_collection[10], food_collection[12], food_collection[19]]
            },
            {
                keyword: 'īs',
                description: 'Keyword: "īs", replace_umlauts: false',
                config: { replace_umlauts: false },
                expected_result_objects: [food_collection[19]]
            },
            {
                keyword: 'Am',
                description: 'Keyword: "Am", case_sensitive: false',
                config: { case_sensitive: false },
                expected_result_objects: [food_collection[13], food_collection[14], food_collection[15]]
            },
            {
                keyword: 'Am',
                description: 'Keyword: "Am", case_sensitive: true',
                config: { case_sensitive: true },
                expected_result_objects: [food_collection[13], food_collection[14]]
            }
        ]
    };

    this.books = {
        collection: book_collection,
        queries: [
            {
                keyword: 'ardco',
                description: 'Keyword: "ardco", Default Config',
                config: {},
                expected_result_objects: [book_collection[0]]
            },
            {
                keyword: 'ardco',
                description: 'Keyword: "ardco", deep: false',
                config: { deep: false },
                expected_result_objects: [book_collection[0]]
            },
            {
                keyword: 'rick',
                description: 'Keyword: "rick", Default Config',
                config: {},
                expected_result_objects: [book_collection[0], book_collection[1]]
            },
            {
                keyword: 'rick',
                description: 'Keyword: "rick", deep: false',
                config: { deep: false },
                expected_result_objects: []
            },
            {
                keyword: 'rick',
                description: 'Keyword: "rick", case_sensitive: true',
                config: { case_sensitive: true },
                expected_result_objects: []
            },
        ]
    };

    this.movies = {
        collection: movie_collection,
        queries: [
            {
                keyword: 'dark',
                description: 'Keyword: "dark", Default Config',
                config: {},
                expected_result_objects: [movie_collection[0]]
            },
            {
                keyword: 'dark',
                description: 'Keyword: "dark", case_sensitive: true',
                config: { case_sensitive: true },
                expected_result_objects: []
            },
            {
                keyword: 'life',
                description: 'Keyword: "life", Default Config',
                config: {},
                expected_result_objects: [movie_collection[0]]
            },
            {
                keyword: 'dark',
                description: 'Keyword: "dark", keys: director',
                config: { keys: ['director'] },
                expected_result_objects: []
            },
            {
                keyword: 'bale',
                description: 'Keyword: "bale", keys: director',
                config: { keys: ['director'] },
                expected_result_objects: []
            },
            {
                keyword: 'spirit award',
                description: 'Keyword: "spirit award", keys: director',
                config: { keys: ['director'] },
                expected_result_objects: [movie_collection[0]]
            },
            {
                keyword: 'spirit award',
                description: 'Keyword: "spirit award", keys: director, case_sensitive: true',
                config: { keys: ['director'], case_sensitive: true },
                expected_result_objects: []
            },
            {
                keyword: 'jonathan',
                description: 'Keyword: "jonathan", keys: director',
                config: { keys: ['director'] },
                expected_result_objects: [movie_collection[0]]
            },
            {
                keyword: 'jonathan',
                description: 'Keyword: "jonathan", keys: director, deep: false',
                config: { keys: ['director'], deep: false },
                expected_result_objects: []
            },
            {
                keyword: 'academy',
                description: 'Keyword: "academy", keys: actors.awards, deep: false',
                config: { keys: ['actors.awards'], deep: false },
                expected_result_objects: []
            },
        ]
    };
};