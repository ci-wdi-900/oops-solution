function Stack() {
  return {
    items: [],

    add: function(item) {
      this.items.push(item);
    },

    remove: function() {
      return this.items.pop();
    },

    peek: function() {
      return this.items[this.items.length - 1];
    }
  }
}

module.exports = {
  Stack,
}