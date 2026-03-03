
/**
 * Centralized configuration for environment variables.
 * Handles fallbacks between AI Studio and Vercel environments.
 */

export const CONFIG = {
    GEMINI_API_KEY: 
        (process as any).env?.API_KEY ||
        (process as any).env?.GEMINI_API_KEY ||
        (import.meta as any).env?.VITE_API_KEY || 
        (import.meta as any).env?.GEMINI_API_KEY ||
        (process as any).env?.VITE_API_KEY ||
        "",
    
    SUPABASE_URL: 
        (import.meta as any).env?.VITE_SUPABASE_URL || 
        (process as any).env?.VITE_SUPABASE_URL || 
        'https://fqsxjyizachjqpxncdmf.supabase.co',
        
    SUPABASE_ANON_KEY: 
        (import.meta as any).env?.VITE_SUPABASE_ANON_KEY || 
        (process as any).env?.VITE_SUPABASE_ANON_KEY || 
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZxc3hqeWl6YWNoanFweG5jZG1mIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI1Mzk3OTAsImV4cCI6MjA4ODExNTc5MH0.lGvYSqOynu9HEN6Xd86L5cBT1pwNogW09UTuJ4TULjg'
};

// Debug helper
export const checkConfig = () => {
    const status = {
        gemini: CONFIG.GEMINI_API_KEY ? `Caricata (${CONFIG.GEMINI_API_KEY.substring(0,4)}...)` : "MANCANTE ❌",
        supabaseUrl: CONFIG.SUPABASE_URL ? "Presente ✅" : "MANCANTE ❌",
        supabaseKey: CONFIG.SUPABASE_ANON_KEY ? "Presente ✅" : "MANCANTE ❌"
    };
    console.log("[Config Diagnostic]", status);
    return status;
};
