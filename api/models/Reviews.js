/**
 * Reviews.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    batchId: {
        type: 'string'
    },
    datetime: {
      type: 'string',
      columnType: 'datetime',
      defaultsTo: new Date().toISOString()
    },
    date: {
        type: 'string'
    },
    time: {
        type: 'string'
    },
    agency: {
      type: 'string'
    },

    language: {
      type: 'string'
    },

    fileName: {
      type: 'string'
    },

    status: {
      type: 'string'
    },

    remark: {
      type: 'string'
    },

    feedback: {
      type: 'string'
    },

    url: {
      type: 'string'
    }
  },

};

