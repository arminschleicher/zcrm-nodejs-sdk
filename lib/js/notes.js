
const util = require('./util');
const notes = function notes() {
  return {
    create: function(input) {
      return util.promiseResponse(util.constructRequestDetails(input, input.module+ '/{id}/Notes', HTTP_METHODS.POST, false));// No I18N
    },
  };
};

module.exports = notes;