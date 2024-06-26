const fs = require('fs');
const path = require('path');
const sharp = require('sharp');
const { resizeImageBuffer } = require('./resize');
const { getStrategyFunctions } = require('../strategies');

/**
 * Converts an image file or buffer to WebP format with specified resolution.
 *
 * @param {Express.Request} req - The request object, containing user and app configuration data.
 * @param {Buffer | Express.Multer.File} file - The file object, containing either a path or a buffer.
 * @param {'low' | 'high'} [resolution='high'] - The desired resolution for the output image.
 * @param {string} [basename=''] - The basename of the input file, if it is a buffer.
 * @returns {Promise<{filepath: string, bytes: number, width: number, height: number}>} An object containing the path, size, and dimensions of the converted image.
 * @throws Throws an error if there is an issue during the conversion process.
 */
async function convertToWebP(req, file, resolution = 'high', basename = '') {
  try {
    let inputBuffer;
    let outputBuffer;
    let extension = path.extname(file.path ?? basename).toLowerCase();

    // Check if the input is a buffer or a file path
    if (Buffer.isBuffer(file)) {
      inputBuffer = file;
    } else if (file && file.path) {
      const inputFilePath = file.path;
      inputBuffer = await fs.promises.readFile(inputFilePath);
    } else {
      throw new Error('Invalid input: file must be a buffer or contain a valid path.');
    }

    // Resize the image buffer
    const {
      buffer: resizedBuffer,
      width,
      height,
    } = await resizeImageBuffer(inputBuffer, resolution);

    // Check if the file is already in WebP format
    // If it isn't, convert it:
    if (extension === '.webp') {
      outputBuffer = resizedBuffer;
    } else {
      outputBuffer = await sharp(resizedBuffer).toFormat('webp').toBuffer();
      extension = '.webp';
    }

    // Generate a new filename for the output file
    const newFileName =
      path.basename(file.path ?? basename, path.extname(file.path ?? basename)) + extension;

    const { saveBuffer } = getStrategyFunctions(req.app.locals.fileStrategy);

    const savedFilePath = await saveBuffer({
      userId: req.user.id,
      buffer: outputBuffer,
      fileName: newFileName,
    });

    const bytes = Buffer.byteLength(outputBuffer);
    return { filepath: savedFilePath, bytes, width, height };
  } catch (err) {
    console.error(err);
    throw err;
  }
}

module.exports = { convertToWebP };
