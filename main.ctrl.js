angular.module('app').controller("MainController", function(){
    var vm = this;
    vm.title = 'Spicy Monkey Media';
    vm.pages = [
        {
            title:'Home',
            abbr:'H',
            link:'#home'
        },
        {
            title:'About',
            abbr:'A',
            link:'#about',
        },
        {
            title:'Portfolio',
            abbr:'P',
            link:'#portfolio'
        },
        {
            title:'Contact',
            abbr:'C',
            link:'#contact'
        }
        ];
vm.social_media = [
        {
            title:'Twitter',
            link:'https://twitter.com/kevin_t_rogers'
        },
        {
            title:'Linkedin',
            link:'"https://www.linkedin.com/profile/view?id=AAIAAAmBUKoBdbOrqAwzQRxcyyy6wp_9xl90TVk&trk=nav_responsive_tab_profile'
        },
        {
            title:'Github',
            link:'https://github.com/kevintrogers'
        },
        {
            title:'FreeCodeCamp',
            link:'http://freecodecamp.com/kevintrogers'
        }
        ];
vm.projects = [
        {
            title:'Twitter',
            link:'https://twitter.com/kevin_t_rogers',
            screenshot:'http://spicymonkeymedia.com/images/spicymonkey_logo.png',
            description:'This that teh other thing'
        },
        {
            title:'Twitter',
            link:'https://twitter.com/kevin_t_rogers',
            screenshot:'http://spicymonkeymedia.com/images/spicymonkey_logo.png',
            description:'Blah Blah Blah'
            
        },
        {
            title:'Twitter',
            link:'https://twitter.com/kevin_t_rogers',
            screenshot:'http://spicymonkeymedia.com/images/spicymonkey_logo.png',
            description:'Yada Yada Yada'
        },
        {
            title:'Twitter',
            link:'https://twitter.com/kevin_t_rogers',
            screenshot:'',
            description:''
        },
                {
            title:'Twitter',
            link:'https://twitter.com/kevin_t_rogers',
            screenshot:'',
            description:''
        },
                {
            title:'Twitter',
            link:'https://twitter.com/kevin_t_rogers',
            screenshot:'',
            description:''
        },
                {
            title:'Twitter',
            link:'https://twitter.com/kevin_t_rogers',
            screenshot:'',
            description:''
        },
                {
            title:'Twitter',
            link:'https://twitter.com/kevin_t_rogers',
            screenshot:'',
            description:''
        },
                {
            title:'Twitter',
            link:'https://twitter.com/kevin_t_rogers',
            screenshot:'',
            description:''
        },
        ];

});