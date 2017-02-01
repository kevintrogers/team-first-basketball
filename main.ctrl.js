  angular.module('app').controller("MainController", function(){
    var vm = this;
  vm.title = 'Team First Basketball';
  vm.services = [{
    service: 'Offensive Skills',
    description: 'The player(s) will learn basic and advanced offensive skills such as fakes, shooting, passing' +
    'and isolation strategies.',
    pic:'/img/offense.svg'
  }, {
    service: 'Defensive Skills',
    description: 'The player(s) will learn basic and advanced defense skills such as defensive schemes, spacing,' + 
    'rotations, and more...',
    pic:'/img/defense.svg'
  }, {
    service: 'Conditioning',
    description: 'Conditioning is imperative in order to keep your play at peak levels throughout a game.',
    pic:'/img/conditioning.svg'
  }
                ];
  vm.testimonials = [{
    pic: 'img/james-adams.jpeg',
    name: 'James Adams',
    position: 'Varsity Basketball Player',
    testimony: 'Coach Davis helped me to improve my ball handling skills so I saw an increase in playing time my senior year.'
  }, {
    pic: 'img/stephanie-mccollough.jpeg',
    name: 'Stephanie McCollough',
    position: "Girl/'s Varsity Coach, Bassett High School",
    testimony: 'Steve is very dedicated to coaching and was able to consistently get the best out of our players.'
  }, {
    pic: 'img/terrence-mack.jpeg',
    name: 'Terrence Mack',
    position: 'Saddleback College Basketball',
    testimony: 'Coach Davis guidance in the weight room helped make the physical adjustments of the game from high school to college easier.'
  } 
  ]
  });