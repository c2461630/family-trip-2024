export type ActivityType = 'travel' | 'food' | 'activity' | 'hotel' | 'rest';

export interface Activity {
  id: string;
  time: string;
  title: string;
  description: string;
  location?: string;
  type: ActivityType;
  options?: Activity[]; // For "Option A vs Option B" scenarios
  tips?: string[];
}

export interface DaySchedule {
  dayId: number;
  date: string;
  weekday: string;
  route: string;
  highlight: string;
  activities: Activity[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}