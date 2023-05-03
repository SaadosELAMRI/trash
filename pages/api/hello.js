const sendEmail = require('../email/sendEmail');

const handler = (req, res) => {
  console.log(req.body);

  // send an email using the form data
  sendEmail(req.body);

  res.status(200).json(req.body);
};

export default handler;
