let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi! It\'s my first post 🙌🏻', likeCount: 3},
            {id: 2, message: 'Welcome to my first social network', likeCount: 3},
            {id: 3, message: 'Wish me good luck in learning React technologies 😂', likeCount: 11},
            {id: 4, message: 'I almost forgot, subscribe: github.com/ayratkin 😁😁', likeCount: 14},
        ],    
    },

    dialogsPage: {
        dialogs: [
            { id: 1, name: 'Ivan' },
            { id: 2, name: 'Kirill' },
            { id: 3, name: 'Alexandr' },
            { id: 4, name: 'Vova' },
        ],

        messages: [
            { id: 1, message: '- Hello, Tom!' },
            { id: 2, message: '- Hello, Martin, lovely day, isnt it?' },
            { id: 3, message: '- Absolutely wonderful - warm and clear. Whats the weather forecast for tomorrow? Do you know?' },
            { id: 4, message: '- Yes, it says it will be a bit cloudy in the morning. But the day will be bright and sunny.' },
            { id: 5, message: '- How nice. A perfect day for an outing. I promised my family a barbecue, you know.' },
            { id: 6, message: '- Great! I hope you’ll enjoy it.' },
        ],
    }
}

export default state;