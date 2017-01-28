  angular.module('app').controller("MainController", function(){
    var vm = this;
  vm.title = 'Team First Basketball';
  vm.services = [{
    service: 'Offensive Skills',
    description: 'The player(s) will learn basic and advanced offensive skills such as fakes, shooting, passing' +
    'and isolation strategies.',
    pic:'/img/offense.jpg'
  }, {
    service: 'Defensive Skills',
    description: 'The player(s) will learn basic and advanced defense skills such as defensive schemes, spacing,' + 
    'rotations, and more...',
    pic:'/img/defense.jpg'
  }, {
    service: 'Ball Handling Skills',
    description: 'Ball handling skills are essential to all basketball players but a guard needs to espeicially' +
    'refine these skills through drills and intense practice.',
    pic:'/img/ballhandling.jpg'
  }, {
    service: 'Post Play',
    description: 'As the game evolves it is becoming more and more esssential for all players to have a balanced' +
    'offensive game in order to take advantage of mismatches.',
    pic: '/img/post.jpg'
  }, {
    service: 'Group and Indivdual Instruction',
    description: 'The player(s) will learn basic and advanced offensive skills such as fakes, shooting, passing' +
    'and isolation strategies',
    pic: '/img/group.jpg'
  } 
                ];
  });