const express = require('express');
const cors = require('cors');
const middleware = require('./utils/middleware');

// Rutas
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/users');
const groupRoutes = require('./routes/groups');
const progressRoutes = require('./routes/progress');
const achievementRoutes = require('./routes/achievements');
const contactRoutes = require('./routes/contacts');
const advisoryRoutes = require('./routes/advisories');

const app = express();

// Middleware global
app.use(cors());
app.use(express.json());
app.use(middleware.tokenExtractor);

// Rutas API
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/groups', groupRoutes);
app.use('/api/progress', progressRoutes);
app.use('/api/achievements', achievementRoutes);
app.use('/api/contacts', contactRoutes);
app.use('/api/advisories', advisoryRoutes);

// Manejo de errores
app.use(middleware.errorHandler);

module.exports = app;
