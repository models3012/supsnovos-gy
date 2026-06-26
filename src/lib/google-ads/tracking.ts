import { useEffect } from 'react';

export const useUTMTracking = () => {
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const utms = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'gclid'];
    
    let utmData: Record<string, string> = {};
    let found = false;

    utms.forEach(param => {
      const value = urlParams.get(param);
      if (value) {
        utmData[param] = value;
        found = true;
      }
    });

    if (found) {
      utmData['timestamp'] = new Date().toISOString();
      localStorage.setItem('utm_data', JSON.stringify(utmData));
    }
  }, []);
};

export const getUTMData = () => {
  const data = localStorage.getItem('utm_data');
  if (!data) return null;
  
  try {
    const parsed = JSON.parse(data);
    const timestamp = new Date(parsed.timestamp);
    const now = new Date();
    const diffDays = (now.getTime() - timestamp.getTime()) / (1000 * 3600 * 24);
    
    if (diffDays > 90) {
      localStorage.removeItem('utm_data');
      return null;
    }
    
    return parsed;
  } catch (e) {
    return null;
  }
};
