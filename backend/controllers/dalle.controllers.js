const { model } = require('mongoose');

const generateImage = async () => {
  res.status(201).json({ data: 'Generated Image' });
};

module.exports = { generateImage };
