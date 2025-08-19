import React from 'react';
import { Download, FileImage, CheckCircle, AlertTriangle, DownloadCloud } from 'lucide-react';
import { ConvertedFile } from '../types';

interface ConversionResultsProps {
  convertedFiles: ConvertedFile[];
  onDownloadAll: () => void;
  onReset: () => void;
}

const ConversionResults: React.FC<ConversionResultsProps> = ({ 
  convertedFiles, 
  onDownloadAll, 
  onReset 
}) => {
  const successfulConversions = convertedFiles.filter(file => file.status === 'success');
  const failedConversions = convertedFiles.filter(file => file.status === 'error');

  const downloadSingle = (file: ConvertedFile) => {
    if (file.downloadUrl && file.convertedFile) {
      const link = document.createElement('a');
      link.href = file.downloadUrl;
      link.download = file.convertedFile.name;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <div className="mt-8">
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        {/* Success Summary */}
        {successfulConversions.length > 0 && (
          <div className="mb-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="inline-flex items-center justify-center w-8 h-8 bg-green-100 rounded-full">
                <CheckCircle className="w-5 h-5 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                Conversion Complete! ({successfulConversions.length} files)
              </h3>
            </div>

            <div className="flex justify-between items-center mb-4">
              <p className="text-gray-600">
                Your JPG images have been successfully converted to PNG format.
              </p>
              {successfulConversions.length > 1 && (
                <button
                  onClick={onDownloadAll}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors duration-200 flex items-center space-x-2"
                >
                  <DownloadCloud className="w-4 h-4" />
                  <span>Download All</span>
                </button>
              )}
            </div>

            {/* Successful Files List */}
            <div className="space-y-3">
              {successfulConversions.map((file, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-green-50 rounded-lg border border-green-200">
                  <div className="flex items-center space-x-3">
                    <FileImage className="w-5 h-5 text-green-600" />
                    <div>
                      <span className="text-sm font-medium text-gray-900">
                        {file.convertedFile?.name}
                      </span>
                      <div className="text-xs text-gray-500">
                        Original: {file.originalFile.name} 
                        ({(file.originalFile.size / 1024 / 1024).toFixed(2)} MB)
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => downloadSingle(file)}
                    className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center space-x-2"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Error Summary */}
        {failedConversions.length > 0 && (
          <div className="mb-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="inline-flex items-center justify-center w-8 h-8 bg-red-100 rounded-full">
                <AlertTriangle className="w-5 h-5 text-red-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                Failed Conversions ({failedConversions.length} files)
              </h3>
            </div>

            <div className="space-y-3">
              {failedConversions.map((file, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-red-50 rounded-lg border border-red-200">
                  <div className="flex items-center space-x-3">
                    <FileImage className="w-5 h-5 text-red-600" />
                    <div>
                      <span className="text-sm font-medium text-gray-900">
                        {file.originalFile.name}
                      </span>
                      <div className="text-xs text-red-600">
                        {file.error || 'Conversion failed'}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex justify-center space-x-4 pt-4 border-t border-gray-200">
          <button
            onClick={onReset}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
          >
            Convert More Files
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConversionResults;