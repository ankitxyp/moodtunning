import { AnalysisResult, HistoryItem } from '@/types';

const STORAGE_KEY = 'moodtune_history';

/**
 * Helper to compress image before saving to avoid hitting localStorage 5MB limit quickly.
 * This draws the image to a smaller canvas and outputs a lower quality jpeg.
 */
export const compressImage = (base64Str: string, maxWidth = 1024): Promise<string> => {
  return new Promise((resolve) => {
    const img = new Image();
    img.src = base64Str;
    img.onload = () => {
      const canvas = document.createElement('canvas');
      let width = img.width;
      let height = img.height;

      if (width > maxWidth) {
        height = Math.floor((height * maxWidth) / width);
        width = maxWidth;
      }

      canvas.width = width;
      canvas.height = height;

      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.drawImage(img, 0, 0, width, height);
        resolve(canvas.toDataURL('image/jpeg', 0.75));
      } else {
        resolve(base64Str);
      }
    };
    img.onerror = () => resolve(base64Str);
  });
};

export const saveToHistory = async (image: string, result: AnalysisResult) => {
  try {
    const compressedImage = await compressImage(image);
    
    const newItem: HistoryItem = {
      id: crypto.randomUUID(),
      timestamp: Date.now(),
      image: compressedImage,
      result,
    };

    const currentHistory = getHistory();
    const updatedHistory = [newItem, ...currentHistory];
    
    // Keep max 50 items to avoid quota issues
    const trimmedHistory = updatedHistory.slice(0, 50);
    
    localStorage.setItem(STORAGE_KEY, JSON.stringify(trimmedHistory));
    return true;
  } catch (error) {
    console.error('Failed to save to history:', error);
    return false;
  }
};

export const getHistory = (): HistoryItem[] => {
  if (typeof window === 'undefined') return [];
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error('Failed to get history:', error);
    return [];
  }
};

export const deleteFromHistory = (id: string) => {
  try {
    const currentHistory = getHistory();
    const updatedHistory = currentHistory.filter(item => item.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedHistory));
    return updatedHistory;
  } catch (error) {
    console.error('Failed to delete from history:', error);
    return getHistory();
  }
};

export const clearHistory = () => {
  try {
    localStorage.removeItem(STORAGE_KEY);
    return [];
  } catch (error) {
    console.error('Failed to clear history:', error);
    return [];
  }
};
