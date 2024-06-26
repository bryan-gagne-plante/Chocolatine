const fs = require('fs');
const { FilePurpose } = require('librechat-data-provider');
const { sleep } = require('~/server/utils');
const { logger } = require('~/config');

/**
 * Uploads a file that can be used across various OpenAI services.
 *
 * @param {Object} params - The params object.
 * @param {Express.Request} params.req - The request object from Express. It should have a `user` property with an `id`
 *                       representing the user, and an `app.locals.paths` object with an `imageOutput` path.
 * @param {Express.Multer.File} params.file - The file uploaded to the server via multer.
 * @param {OpenAIClient} params.openai - The initialized OpenAI client.
 * @returns {Promise<OpenAIFile>}
 */
async function uploadOpenAIFile({ req, file, openai }) {
  const uploadedFile = await openai.files.create({
    file: fs.createReadStream(file.path),
    purpose: FilePurpose.Assistants,
  });

  logger.debug(
    `[uploadOpenAIFile] User ${req.user.id} successfully uploaded file to OpenAI`,
    uploadedFile,
  );

  if (uploadedFile.status !== 'processed') {
    const sleepTime = 2500;
    logger.debug(
      `[uploadOpenAIFile] File ${
        uploadedFile.id
      } is not yet processed. Waiting for it to be processed (${sleepTime / 1000}s)...`,
    );
    await sleep(sleepTime);
  }

  return uploadedFile;
}

/**
 * Deletes a file previously uploaded to OpenAI.
 *
 * @param {Express.Request} req - The request object from Express.
 * @param {MongoFile} file - The database representation of the uploaded file.
 * @param {OpenAI} openai - The initialized OpenAI client.
 * @returns {Promise<void>}
 */
async function deleteOpenAIFile(req, file, openai) {
  try {
    const res = await openai.files.del(file.file_id);
    if (!res.deleted) {
      throw new Error('OpenAI returned `false` for deleted status');
    }
    logger.debug(
      `[deleteOpenAIFile] User ${req.user.id} successfully deleted ${file.file_id} from OpenAI`,
    );
  } catch (error) {
    logger.error('[deleteOpenAIFile] Error deleting file from OpenAI: ' + error.message);
    throw error;
  }
}

module.exports = { uploadOpenAIFile, deleteOpenAIFile };
