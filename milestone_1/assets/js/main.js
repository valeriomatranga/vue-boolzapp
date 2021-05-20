const app = new Vue({

    el:'#app',

    data:{
        counter: 0,
        chatCurrent:[],
        users:[
            './assets/img/avatar_1.jpg',
            './assets/img/avatar_2.jpg',
            './assets/img/avatar_3.jpg',
            './assets/img/avatar_4.jpg',
            './assets/img/avatar_5.jpg',
            './assets/img/avatar_6.jpg',
            './assets/img/avatar_7.jpg',
            './assets/img/avatar_8.jpg',
        ],

        names:[
            'Michele',
            'Fabio',
            'Samuele',
            'Vittorio',
            'Marco',
            'Vanessa',
            'Carlo',
            'Matteo'
        ],

    },


    methods:{
        chat: function(index){
            this.chatCurrent.push(this.users[index]);
        },
    },
})
