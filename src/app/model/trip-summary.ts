export interface Activity {
  time: string;
  name: string;
  description: string;
  location: string;
  image: string;
}
export interface Itinerary {
  day: number;
  title: string;
  activities: Activity[];
}
export interface TripSummary {
  destination: string;
  duration: string;
  interests: string[];
  best_time_to_visit: string;
  weather: string;
  currency: string;
  language: string;
  local_cuisine: string;
  transportation: string;
  safety_tips: string;
  itinerary: Itinerary[];
}