import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUndoAlt,
  faRedoAlt,
  faPalette,
  faSave,
  faUpload,
  faTrash,
  faFillDrip,
  faEraser,
  faFileUpload,
  faDownload,
} from '@fortawesome/free-solid-svg-icons';

export const UndoIcon = <FontAwesomeIcon icon={faUndoAlt} color="#F34C24" />;
export const RedoIcon = <FontAwesomeIcon icon={faRedoAlt} color="#F34C24" />;
export const PaletteIcon = <FontAwesomeIcon icon={faPalette} color="#F34C24" />;
export const SaveIcon = <FontAwesomeIcon icon={faSave} color="#F34C24" />;
export const LoadIcon = <FontAwesomeIcon icon={faUpload} color="#F34C24" />;
export const TrashIcon = <FontAwesomeIcon icon={faTrash} color="#F34C24" />;
export const BGIcon = <FontAwesomeIcon icon={faFillDrip} color="#F34C24" />;
export const EraserIcon = <FontAwesomeIcon icon={faEraser} color="#F34C24" />;
export const DownloadIcon = (
  <FontAwesomeIcon icon={faDownload} color="#F34C24" />
);
export const fileUploadIcon = (
  <FontAwesomeIcon icon={faFileUpload} color="#F34C24" />
);
