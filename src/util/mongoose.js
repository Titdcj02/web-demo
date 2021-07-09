module.exports = {
     arraysToObject: function(arrays) {
         return arrays.map((array) => array.toObject())
     },
     arrayToObject: function(array) {
         return array ? array.toObject() : array
     }
}