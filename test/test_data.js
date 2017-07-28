'use strict';

module.exports = {
    food: {
        collection: [
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
        ],
        queries: [
            {
                keyword: 'av',
                description: 'Keyword: "av", Default Config',
                config: {},
                expected_result_objects: [
                    { id: 4, name: 'Guava', type: 'fruit' },
                    { id: 23, name: 'Boscatella di Fiavè', type: 'curd' }
                ]
            },
            {
                keyword: 'go',
                description: 'Keyword: "go", case_sensitive: false',
                config: { case_sensitive: false },
                expected_result_objects: [
                    { id: 5, name: 'Mango', type: 'fruit' },
                      { id: 21, name: 'Bagòs', type: 'curd' }
                ]
            },
            {
                keyword: 'go',
                description: 'Keyword: "go", replace_umlauts: false',
                config: { replace_umlauts: false },
                expected_result_objects: [
                    { id: 5, name: 'Mango', type: 'fruit' }
                ]
            },
            {
                keyword: 'an',
                description: 'Keyword: "an", Default Config',
                config: {},
                expected_result_objects: [
                    { id: 2, name: 'Banana', type: 'fruit' },
                    { id: 5, name: 'Mango', type: 'fruit' },
                    { id: 6, name: 'Orange', type: 'fruit' },
                    { id: 12, name: 'German lager', type: 'beer' },
                    { id: 14, name: 'North American ale', type: 'beer' },
                    { id: 15, name: 'North American lager', type: 'beer' },
                    { id: 17, name: 'Brânză', type: 'curd' },
                    { id: 19, name: 'Añejo cheese', type: 'curd' },
                    { id: 25, name: 'Brânzǎ de burduf', type: 'curd' }
                ]
            },
            {
                keyword: 'an',
                description: 'Keyword: "an", replace_umlauts: false',
                config: { replace_umlauts: false },
                expected_result_objects: [
                    { id: 2, name: 'Banana', type: 'fruit' },
                    { id: 5, name: 'Mango', type: 'fruit' },
                    { id: 6, name: 'Orange', type: 'fruit' },
                    { id: 12, name: 'German lager', type: 'beer' },
                    { id: 14, name: 'North American ale', type: 'beer' },
                    { id: 15, name: 'North American lager', type: 'beer' }
                ]
            },
            {
                keyword: 'ân',
                description: 'Keyword: "ân", replace_umlauts: false',
                config: { replace_umlauts: false },
                expected_result_objects: [
                    { id: 17, name: 'Brânză', type: 'curd' },
                    { id: 25, name: 'Brânzǎ de burduf', type: 'curd' }
                ]
            },
            {
                keyword: 'īs',
                description: 'Keyword: "īs", Default Config',
                config: {},
                expected_result_objects: [
                    { id: 11, name: 'British ale', type: 'beer' },
                    { id: 13, name: 'Irish ale', type: 'beer' },
                    { id: 20, name: 'Arīsh', type: 'curd' }
                ]
            },
            {
                keyword: 'īs',
                description: 'Keyword: "īs", replace_umlauts: false',
                config: { replace_umlauts: false },
                expected_result_objects: [
                    { id: 20, name: 'Arīsh', type: 'curd' }
                ]
            },
            {
                keyword: 'Am',
                description: 'Keyword: "Am", case_sensitive: false',
                config: { case_sensitive: false },
                expected_result_objects: [
                    { id: 14, name: 'North American ale', type: 'beer' },
                    { id: 15, name: 'North American lager', type: 'beer' },
                    { id: 16, name: 'Abbaye de Tamié', type: 'curd' }
                ]
            },
            {
                keyword: 'Am',
                description: 'Keyword: "Am", case_sensitive: true',
                config: { case_sensitive: true },
                expected_result_objects: [
                    { id: 14, name: 'North American ale', type: 'beer' },
                    { id: 15, name: 'North American lager', type: 'beer' }
                ]
            }
        ]
    },
    books: {
        collection: [
            {
                "name" : "The Lightning Thief",
                "category" : ["book","hardcover"],
                "author" : {
                    name: "Rick Riordan",
                    age: 53,
                    awards: [
                        'Shamus Award for Best First P. I. Novel',
                        'Anthony Award for Best Paperback Original',
                        'Hampshire Book Award',
                        'Edgar Award for Best Paperback Original'
                    ]
                },
                "genre" : "fantasy",
                "price" : 12.50,
                "pages" : 384
            },
            {
                "name" : "The Sea of Monsters",
                "category" : ["book","paperback"],
                "author" : {
                    name: "Rick Riordan",
                    age: 53,
                    awards: [
                        'Shamus Award for Best First P. I. Novel',
                        'Anthony Award for Best Paperback Original',
                        'Hampshire Book Award',
                        'Edgar Award for Best Paperback Original'
                    ]
                },
                "genre" : "fantasy",
                "price" : 6.49,
                "pages" : 304
            },
            {
                "name" : "Sophie's World : The Greek Philosophers",
                "category" : ["book","paperback"],
                "author" : {
                    name: "Jostein Gaarder",
                    age: 64,
                    awards: [
                        'Norwegian Booksellers\' Prize',
                        'The Brage Prize Honorary Award',
                        'Critics Prize for the Years Best Children\'s or Youth\'s Literature'
                    ]
                },
                "genre" : "fantasy",
                "price" : 3.07,
                "pages" : 64
            },
            {
                "name" : "Lucene in Action, Second Edition",
                "category" : ["book","paperback"],
                "author" : {
                    name: "Michael McCandless"
                },
                "genre" : "IT",
                "price" : 30.50,
                "pages" : 475
            }
        ],
        queries: [
            {
                keyword: 'ardco',
                description: 'Keyword: "ardco", Default Config',
                config: {},
                expected_result_objects: [
                    {
                        "name" : "The Lightning Thief",
                        "category" : ["book","hardcover"],
                        "author" : {
                            name: "Rick Riordan",
                            age: 53,
                            awards: [
                                'Shamus Award for Best First P. I. Novel',
                                'Anthony Award for Best Paperback Original',
                                'Hampshire Book Award',
                                'Edgar Award for Best Paperback Original'
                            ]
                        },
                        "genre" : "fantasy",
                        "price" : 12.50,
                        "pages" : 384
                    }
                ]
            },
            {
                keyword: 'ardco',
                description: 'Keyword: "ardco", deep: false',
                config: { deep: false },
                expected_result_objects: []
            },
            {
                keyword: 'rick',
                description: 'Keyword: "rick", Default Config',
                config: {},
                expected_result_objects: [
                    {
                        "name" : "The Lightning Thief",
                        "category" : ["book","hardcover"],
                        "author" : {
                            name: "Rick Riordan",
                            age: 53,
                            awards: [
                                'Shamus Award for Best First P. I. Novel',
                                'Anthony Award for Best Paperback Original',
                                'Hampshire Book Award',
                                'Edgar Award for Best Paperback Original'
                            ]
                        },
                        "genre" : "fantasy",
                        "price" : 12.50,
                        "pages" : 384
                    },
                    {
                        "name" : "The Sea of Monsters",
                        "category" : ["book","paperback"],
                        "author" : {
                            name: "Rick Riordan",
                            age: 53,
                            awards: [
                                'Shamus Award for Best First P. I. Novel',
                                'Anthony Award for Best Paperback Original',
                                'Hampshire Book Award',
                                'Edgar Award for Best Paperback Original'
                            ]
                        },
                        "genre" : "fantasy",
                        "price" : 6.49,
                        "pages" : 304
                    }
                ]
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
    }
};