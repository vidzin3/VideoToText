import express from 'express';
import cors from 'cors';
import { YoutubeTranscript } from 'youtube-transcript';

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.post('/transcript', async (req, res) => {
  const { url } = req.body;

  try {
    const transcript = await YoutubeTranscript.fetchTranscript(url);
    res.json(transcript);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
