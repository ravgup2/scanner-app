/**
 * ReviewesController
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
			datetime: { '>=': params.fromDate, '<': params.toDate }
		};

		Reviewes.find({
		  where: query,
		  sort: 'createdAt DESC'
		}).exec(function (err, results) {
		  	res.send(results);
		});
	}
};

