import React from 'react';
import { FileImage, Loader } from 'lucide-react';

interface ConversionProgressProps {
  progress: number;
  totalFiles: number;
}

const ConversionProgress: React.FC<ConversionProgressProps> = ({ progress, totalFiles }) => {
  const currentFile = Math.ceil((progress / 100) * totalFiles);

  return (
    <div className="mt-8">
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
            <Loader className="w-8 h-8 text-blue-600 animate-spin" />
          </div>
          
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Converting Images...
          </h3>
          
          <p className="text-gray-600 mb-6">
            Processing file {currentFile} of {totalFiles}
          </p>

          <div className="max-w-md mx-auto mb-4">
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>Progress</span>
              <span>{Math.round(progress)}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div
                className="bg-blue-600 h-3 rounded-full transition-all duration-500 ease-out"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>

          <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
            <FileImage className="w-4 h-4" />
            <span>Converting JPG to PNG...</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConversionProgress;