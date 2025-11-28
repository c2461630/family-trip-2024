
export enum ActivityType {
  Drive = 'Drive',
  Food = 'Food',
  Activity = 'Activity',
  Hotel = 'Hotel',
  Rest = 'Rest',
}

export interface Activity {
  time: string;
  title: string;
  description?: string;
  type: ActivityType;
  location?: string;
  tips?: string[];
  options?: {
    title: string;
    description: string;
  }[];
}

export interface WeatherInfo {
  type: 'sunny' | 'cloudy' | 'rain' | 'windy';
  temp: string;
  desc: string;
}

export interface DayPlan {
  id: number;
  date: string;
  weekday: string;
  route: string;
  theme: string;
  weather: WeatherInfo;
  activities: Activity[];
}

export interface DeploymentStep {
  title: string;
  content: string;
}

export interface Expense {
  id: string;
  title: string;
  amount: number;
  category: 'food' | 'transport' | 'stay' | 'play' | 'other';
  payer: string;
  date: string;
  dateTimestamp?: number;
}

export interface Accommodation {
  id: number;
  date: string;
  name: string;
  location: string;
  note?: string;
  checkIn?: string;  // e.g., "15:00"
  checkOut?: string; // e.g., "11:00"
  bookingId?: string; // 訂房代號
}

export interface PackingItem {
  id: string;
  text: string;
  checked: boolean;
}

export interface PackingCategory {
  id: string;
  title: string;
  items: PackingItem[];
}
