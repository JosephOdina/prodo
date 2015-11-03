exports.render = function(req, res) {
    res.render('index', {
    	title: 'ProDo: A procrastination app for losers',
    	user: JSON.stringify(req.user)
    });
};