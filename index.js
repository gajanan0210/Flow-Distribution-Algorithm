// app.js
const express = require('express');
const app = express();
const astrologersRouter = require('./routes/astrologers');

app.use(express.json());
app.use('/astrologers', astrologersRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
