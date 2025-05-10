// siham_project/services/examService.js
const pool = require('../config/db');
const { v4: uuidv4 } = require('uuid');

/**
 * Insert a new exam and return its unique link.
 */
async function createExam({ title, description, publicCible }) {
  const link = uuidv4();
  const sql  = `
    INSERT INTO exams
      (title, description, public_cible, link_url)
    VALUES (?,     ?,           ?,             ?)
  `;
  await pool.query(sql, [title, description, publicCible, link]);
  return link;
}

/**
 * (Existing) fetch latest exam...
 */
async function getLatestExam() { /* … */ }

module.exports = { createExam, getLatestExam };