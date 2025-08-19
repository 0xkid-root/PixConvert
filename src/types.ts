export interface ConvertedFile {
  originalFile: File;
  convertedFile: File | null;
  downloadUrl: string | null;
  status: 'success' | 'error';
  error?: string;
}

export type ConversionType = 
  | 'JPG to PNG'
  | 'PNG to JPG'
  | 'HEIC to JPG'
  | 'WebP to JPEG'
  | 'BMP to PNG'
  | 'TIFF to JPG';