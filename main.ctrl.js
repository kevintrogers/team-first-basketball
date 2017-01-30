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
  });