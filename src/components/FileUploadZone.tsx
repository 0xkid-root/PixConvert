import React, { useState, useRef } from 'react';
import { UploadCloud as CloudUpload, FileImage, X } from 'lucide-react';
import { ConversionType } from '../types';

interface FileUploadZoneProps {
  onFilesSelect: (files: File[]) => void;
  conversionType: ConversionType;
}

const FileUploadZone: React.FC<FileUploadZoneProps> = ({ 
  onFilesSelect, 
  conversionType 
}) => {
  const [isDragOver, setIsDragOver] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const getAcceptedFormats = (conversionType: ConversionType): string[] => {
    const formatMap: Record<ConversionType, string[]> = {
      'JPG to PNG': ['jpg', 'jpeg'],
      'PNG to JPG': ['png'],
      'HEIC to JPG': ['heic', 'heif'],
      'WebP to JPEG': ['webp'],
      'BMP to PNG': ['bmp'],
      'TIFF to JPG': ['tiff', 'tif']
    };
    return formatMap[conversionType] || [];
  };

  const getAllSupportedFormats = (): string[] => {
    return ['jpg', 'jpeg', 'png', 'heic', 'heif', 'webp', 'bmp', 'tiff', 'tif'];
  };

  const validateFiles = (files: FileList | File[]): { validFiles: File[], hasInvalidFiles: boolean } => {
    const fileArray = Array.from(files);
    const acceptedFormats = getAcceptedFormats(conversionType);
    
    const validFiles = fileArray.filter(file => {
      const extension = file.name.toLowerCase().split('.').pop();
      return extension && acceptedFormats.includes(extension);
    });

    return {
      validFiles,
      hasInvalidFiles: validFiles.length < fileArray.length
    };
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    setError(null);

    const files = e.dataTransfer.files;
    const { validFiles, hasInvalidFiles } = validateFiles(files);

    if (hasInvalidFiles) {
      const acceptedFormats = getAcceptedFormats(conversionType);
      setError(`Some files were skipped. Only ${acceptedFormats.join(', ').toUpperCase()} files are supported for ${conversionType}.`);
    }

    if (validFiles.length === 0) {
      const acceptedFormats = getAcceptedFormats(conversionType);
      setError(`Please select valid ${acceptedFormats.join(', ').toUpperCase()} files.`);
      return;
    }

    onFilesSelect(validFiles);
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError(null);
    const files = e.target.files;
    if (!files) return;

    const { validFiles, hasInvalidFiles } = validateFiles(files);

    if (hasInvalidFiles) {
      const acceptedFormats = getAcceptedFormats(conversionType);
      setError(`Some files were skipped. Only ${acceptedFormats.join(', ').toUpperCase()} files are supported for ${conversionType}.`);
    }

    if (validFiles.length === 0) {
      const acceptedFormats = getAcceptedFormats(conversionType);
      setError(`Please select valid ${acceptedFormats.join(', ').toUpperCase()} files.`);
      return;
    }

    onFilesSelect(validFiles);
  };

  const openFileDialog = () => {
    fileInputRef.current?.click();
  };

  const acceptedFormats = getAcceptedFormats(conversionType);
  const allFormats = getAllSupportedFormats();

  return (
    <div className="w-full">
      <div
        className={`
          relative border-2 border-dashed rounded-xl p-16 text-center cursor-pointer
          transition-all duration-300 ease-in-out
          ${isDragOver 
            ? 'border-blue-500 bg-blue-50' 
            : 'border-blue-300 bg-blue-50/30 hover:border-blue-400 hover:bg-blue-50'
          }
        `}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={openFileDialog}
      >
        <input
          id="file-input"
          ref={fileInputRef}
          type="file"
          multiple
          accept={acceptedFormats.map(format => `.${format}`).join(',')}
          onChange={handleFileInputChange}
          className="hidden"
        />

        <div className="flex flex-col items-center space-y-6">
          <div className={`
            inline-flex items-center justify-center w-20 h-20 rounded-full transition-colors duration-300
            ${isDragOver ? 'bg-blue-200' : 'bg-blue-100'}
          `}>
            <CloudUpload className={`w-10 h-10 ${isDragOver ? 'text-blue-700' : 'text-blue-600'}`} />
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">
              Drop Your Files Here
            </h3>
            <p className="text-gray-600 mb-2">
              Or click "UPLOAD FILES" to select files from your device.
            </p>
            <p className="text-sm text-gray-500 mb-6">
              Maximum 20 files, up to 50MB each.
            </p>
          </div>

          {/* Supported Formats */}
          <div className="flex flex-wrap justify-center gap-2">
            {allFormats.map((format) => (
              <span
                key={format}
                className={`
                  px-3 py-1 rounded-full text-xs font-medium
                  ${acceptedFormats.includes(format)
                    ? 'bg-blue-100 text-blue-700 border border-blue-200'
                    : 'bg-gray-100 text-gray-500'
                  }
                `}
              >
                .{format.toUpperCase()}
              </span>
            ))}
          </div>
        </div>

        {isDragOver && (
          <div className="absolute inset-0 bg-blue-100 bg-opacity-50 rounded-xl flex items-center justify-center">
            <div className="text-blue-700 text-xl font-semibold">Drop files here</div>
          </div>
        )}
      </div>

      {error && (
        <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
          <div className="flex items-center space-x-2">
            <X className="w-5 h-5 text-red-500" />
            <span className="text-red-700 font-medium">{error}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default FileUploadZone;