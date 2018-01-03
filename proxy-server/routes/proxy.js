import express from 'express';
import middleware from './middleware';

const router = express.Router();

module.exports = ({ ...options }) => {
  router.use(middleware({ ...options }));
  return router;
};
