
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { appTitle: 'ConnectMeth: Sign Up Today!'});
};
