export interface DriveImage {
  id: string;
  url: string;
  title: string;
  description?: string;
  date?: string;
  thumbnailUrl?: string;
}

export class DriveService {
  private apiKey: string;
  private folderId: string;

  constructor() {
    this.apiKey = process.env.REACT_APP_GOOGLE_API_KEY || '';
    this.folderId = process.env.REACT_APP_DRIVE_FOLDER_ID || '';
    
    // Add these console logs (remove in production)
    if (!this.apiKey) {
        console.error('Google API Key is missing');
    }
    if (!this.folderId) {
        console.error('Drive Folder ID is missing');
    }
}

async listFolderContents(): Promise<DriveImage[]> {
  try {
      const url = `https://www.googleapis.com/drive/v3/files?q='${this.folderId}'+in+parents&key=${this.apiKey}&fields=files(id,name,description,createdTime,thumbnailLink)`;
      
      const response = await fetch(url);
      
      if (!response.ok) {
          const errorData = await response.json();
          console.error('Drive API Error:', errorData);
          throw new Error(`Drive API error: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      console.log('Drive API Response:', data); // Debug log

      if (!data.files || data.files.length === 0) {
          console.log('No files found in the specified folder');
          return [];
      }

      return data.files.map((file: any) => ({
          id: file.id,
          url: this.getImageUrl(file.id),
          title: file.name,
          description: file.description,
          date: file.createdTime ? new Date(file.createdTime).toLocaleDateString() : undefined,
          thumbnailUrl: file.thumbnailLink,
      }));
  } catch (error) {
      console.error('Error fetching images from Drive:', error);
      throw error;
  }
}

  getImageUrl(fileId: string): string {
    // Alternative URL format that might work better
    return `https://drive.google.com/thumbnail?id=${fileId}&sz=w1000`;
    // Or try this format
    // return `https://lh3.googleusercontent.com/d/${fileId}`;
}

}