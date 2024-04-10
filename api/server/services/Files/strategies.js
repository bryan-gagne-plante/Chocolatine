const { FileSources } = require('librechat-data-provider');
const {
  getFirebaseURL,
  prepareImageURL,
  saveURLToFirebase,
  deleteFirebaseFile,
  saveBufferToFirebase,
  uploadImageToFirebase,
  processFirebaseAvatar,
} = require('./Firebase');
const {
  getLocalFileURL,
  saveFileFromURL,
  saveLocalBuffer,
  deleteLocalFile,
  uploadLocalImage,
  prepareImagesLocal,
  processLocalAvatar,
} = require('./Local');
const { uploadOpenAIFile, deleteOpenAIFile } = require('./OpenAI');
const { uploadVectors, deleteVectors } = require('./VectorDB');

/**
 * Firebase Storage Strategy Functions
 *
 * */
const firebaseStrategy = () => ({
  // saveFile:
  /** @type {typeof uploadVectors | null} */
  handleFileUpload: null,
  saveURL: saveURLToFirebase,
  getFileURL: getFirebaseURL,
  deleteFile: deleteFirebaseFile,
  saveBuffer: saveBufferToFirebase,
  prepareImagePayload: prepareImageURL,
  processAvatar: processFirebaseAvatar,
  handleImageUpload: uploadImageToFirebase,
});

/**
 * Local Server Storage Strategy Functions
 *
 * */
const localStrategy = () => ({
  /** @type {typeof uploadVectors | null} */
  handleFileUpload: null,
  saveURL: saveFileFromURL,
  getFileURL: getLocalFileURL,
  saveBuffer: saveLocalBuffer,
  deleteFile: deleteLocalFile,
  processAvatar: processLocalAvatar,
  handleImageUpload: uploadLocalImage,
  prepareImagePayload: prepareImagesLocal,
});

/**
 * VectorDB Storage Strategy Functions
 *
 * */
const vectorStrategy = () => ({
  /** @type {typeof saveFileFromURL | null} */
  saveURL: null,
  /** @type {typeof getLocalFileURL | null} */
  getFileURL: null,
  /** @type {typeof saveLocalBuffer | null} */
  saveBuffer: null,
  /** @type {typeof processLocalAvatar | null} */
  processAvatar: null,
  /** @type {typeof uploadLocalImage | null} */
  handleImageUpload: null,
  /** @type {typeof prepareImagesLocal | null} */
  prepareImagePayload: null,
  handleFileUpload: uploadVectors,
  deleteFile: deleteVectors,
});

/**
 * OpenAI Strategy Functions
 *
 * Note: null values mean that the strategy is not supported.
 * */
const openAIStrategy = () => ({
  /** @type {typeof saveFileFromURL | null} */
  saveURL: null,
  /** @type {typeof getLocalFileURL | null} */
  getFileURL: null,
  /** @type {typeof saveLocalBuffer | null} */
  saveBuffer: null,
  /** @type {typeof processLocalAvatar | null} */
  processAvatar: null,
  /** @type {typeof uploadLocalImage | null} */
  handleImageUpload: null,
  /** @type {typeof prepareImagesLocal | null} */
  prepareImagePayload: null,
  deleteFile: deleteOpenAIFile,
  handleFileUpload: uploadOpenAIFile,
});

// Strategy Selector
const getStrategyFunctions = (fileSource) => {
  if (fileSource === FileSources.firebase) {
    return firebaseStrategy();
  } else if (fileSource === FileSources.local) {
    return localStrategy();
  } else if (fileSource === FileSources.openai) {
    return openAIStrategy();
  } else if (fileSource === FileSources.vectordb) {
    return vectorStrategy();
  } else {
    throw new Error('Invalid file source');
  }
};

module.exports = {
  getStrategyFunctions,
};
