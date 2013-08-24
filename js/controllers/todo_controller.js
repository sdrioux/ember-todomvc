Todos.TodoController = Ember.ObjectController.extend({
  isCompleted: function(key, value){
    var model = this.get('model');

    if (value === undefined) {
      //property being used as a getter
      return model.get('isCompleted');
    } else {
      // property being used as a setter
      model.set('isCompleted', value);
      model.save();
      return value;
    }
  }.property('model.isCompleted'),

  isEditing: false,

  editTodo: function(){
    this.set('isEditing', true);
  },

  acceptChanges: function(){
    if(this.get('model').get('isSaving')) return;
    this.set('isEditing', false);
    this.get('model').save();
  },

  removeTodo: function(){
    var todo = this.get('model');
    todo.deleteRecord();
    todo.save();
  }
});