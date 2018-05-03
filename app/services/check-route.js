import Service from '@ember/service';

export default Service.extend({
  currentRoute: true,

  setCurrentRoute(obj) {
    this.set('currentRoute', obj);
  },

  isCurrentRoute(){
    return this.get('currentRoute');
  }

});
