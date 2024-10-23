import { toast } from 'react-hot-toast';

interface AnalysisResponse {
  analysis: string;
}

export async function analyzeMessage(message: string, mode: 'serious' | 'fun'): Promise<string> {
  try {
    // For demo purposes, we'll simulate API response
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const responses = {
      serious: [
        "This message shows genuine interest while maintaining respect. Consider adding a specific question about their interests to deepen the conversation.",
        "Your tone is appropriate, but you might want to be more specific about what caught your attention. Try referencing something from their profile.",
        "Good start! To make it more engaging, try incorporating a light-hearted observation or shared interest."
      ],
      fun: [
        "Oh honey, that message is smoother than a freshly waxed dolphin! 🐬 But maybe throw in a dad joke to seal the deal?",
        "Your flirting game is stronger than my coffee this morning! ☕ Maybe add a pun to make them laugh?",
        "Well well well, look who's channeling their inner Shakespeare! 📝 Just don't go full Romeo, we know how that ended!"
      ]
    };

    const randomIndex = Math.floor(Math.random() * 3);
    return responses[mode][randomIndex];
  } catch (error) {
    console.error('Error analyzing message:', error);
    toast.error('Failed to analyze message');
    throw error;
  }
}