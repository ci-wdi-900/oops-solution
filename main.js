const Stack = () => {
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

const Queue = () => {
  return {
    items: [],

    add: function(item) {
      this.items.push(item);
    },

    remove: function() {
      return this.items.shift();
    },

    peek: function() {
      return this.items[0];
    }
  }
}

module.exports = {
  Stack,
  Queue,
}
