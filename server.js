// siham_project/index.js

require('dotenv').config();             // 1) load DB creds
const express = require('express');
const path    = require('path');
const cors    = require('cors');
const { getLatestExam } = require('./services/examService');

const app = express();

// 2) View engine setup (for the “/” page)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// 3) Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// 4) Render a simple page with the latest exam link
app.get('/', async (req, res, next) => {
  try {
    const exam = await getLatestExam();
    res.render('index', { exam });
  } catch (err) {
    next(err);
  }
});

// 5) Your existing API routes
const examensRouter   = require('./routes/examens');
const questionsRouter = require('./routes/questions');
app.use('/api/examens',   examensRouter);
app.use('/api/questions', questionsRouter);

// 6) Health check
app.get('/api/ping', (req, res) => {
  res.send('Server is running');
});

// 7) Error handler
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send('Server error');
});

// 8) Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(` 
🚀 Server running on http://localhost:${PORT}
• Test:     http://localhost:${PORT}/api/ping
• Frontend: http://localhost:${PORT}/espace_enseignant.html
• Exam link: http://localhost:${PORT}/
`);
});