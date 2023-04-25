import { Configuration, OpenAIApi } from ('openai');

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const generateImage = async (req, res) => {
  const {
    body: { prompt },
  } = req;
  try {
    const response = await openai.createImage({
      prompt: prompt,
      n: 1,
      size: '1024x1024',
      response_format: 'b64_json',
    });

    const image = response.data.data[0].b64_json;
    res.status(200).json({ status: true, data: image });
  } catch (err) {
    res.status(500).json({ status: false, data: 'Unable to generate Image' });
  }
};

module.exports = { generateImage };
