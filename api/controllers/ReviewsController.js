/**
 * ReviewsController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
	search: function (req, res) {
		var params = req.allParams();
		if(!params.fromDate || !params.toDate) {
			res.status(422);
			res.send('Missing Parameters');
		}
		var query = {
			date: { '>=': params.fromDate, '<=': params.toDate }
		};

		Reviews.find({
		  where: query,
		  sort: 'createdAt DESC'
		}).exec(function (err, results) {
		  	res.send(results);
		});
	},

	searchByBatchId: function (req, res) {
		var batchId = req.param('batchId');
		if(!batchId) {
			res.status(422);
			res.send('Missing Parameters');
		}

		Reviews.find({
		  batchId: batchId
		}).exec(function (err, results) {
			res.send(results);
		});
	},


};
