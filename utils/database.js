import Common from '../config/common'

var knex = require('knex')({
		client: 'pg',
	    connection: "postgres://localhost/postgre_test",
		searchPath: ['knex', 'public']

});

module.exports = knex;
