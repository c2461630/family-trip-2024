import React from 'react';
import { Activity } from '../types';
import { MapPin, Car, Utensils, Camera, BedDouble, Coffee } from 'lucide-react';

interface ActivityCardProps {
  activity: Activity;
  isOption?: boolean;
}

const getActivityIcon = (type: Activity['type']) => {
  switch (type) {
    case 'travel': return <Car className="w-5 h-5" />;
    case 'food': return <Utensils className="w-5 h-5" />;
    case 'activity': return <Camera className="w-5 h-5" />;
    case 'hotel': return <BedDouble className="w-5 h-5" />;
    case 'rest': return <Coffee className="w-5 h-5" />;
    default: return <MapPin className="w-5 h-5" />;
  }
};

const getActivityColor = (type: Activity['type']) => {
  switch (type) {
    case 'travel': return 'bg-blue-100 text-blue-700 border-blue-200';
    case 'food': return 'bg-orange-100 text-orange-700 border-orange-200';
    case 'activity': return 'bg-green-100 text-green-700 border-green-200';
    case 'hotel': return 'bg-indigo-100 text-indigo-700 border-indigo-200';
    case 'rest': return 'bg-yellow-100 text-yellow-700 border-yellow-200';
    default: return 'bg-gray-100 text-gray-700 border-gray-200';
  }
};

export const ActivityCard: React.FC<ActivityCardProps> = ({ activity, isOption }) => {
  const openMap = (location: string) => {
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location)}`, '_blank');
  };

  const hasOptions = activity.options && activity.options.length > 0;

  return (
    <div className={`relative pl-4 pb-8 border-l-2 border-gray-200 last:border-0 last:pb-0 ${isOption ? 'mt-4' : ''}`}>
      {/* Timeline Dot */}
      <div className={`absolute -left-[9px] top-0 w-4 h-4 rounded-full border-2 border-white shadow-sm ${getActivityColor(activity.type).split(' ')[0].replace('bg-', 'bg-')}`}></div>
      
      <div className={`flex flex-col sm:flex-row sm:items-start gap-4 p-4 rounded-xl border bg-white shadow-sm hover:shadow-md transition-shadow ${isOption ? 'bg-gray-50 border-dashed' : ''}`}>
        
        {/* Icon & Time */}
        <div className="flex items-center gap-3 sm:w-24 flex-shrink-0">
          <div className={`p-2 rounded-full ${getActivityColor(activity.type)}`}>
            {getActivityIcon(activity.type)}
          </div>
          <span className="font-bold text-gray-700 text-sm font-mono">{activity.time}</span>
        </div>

        {/* Content */}
        <div className="flex-grow">
          <h3 className="font-bold text-lg text-gray-900">{activity.title}</h3>
          <p className="text-gray-600 mt-1 whitespace-pre-line">{activity.description}</p>
          
          {activity.tips && (
            <div className="mt-2 flex flex-wrap gap-2">
              {activity.tips.map((tip, idx) => (
                <span key={idx} className="px-2 py-1 bg-yellow-50 text-yellow-800 text-xs rounded-full font-medium border border-yellow-100">
                  ★ {tip}
                </span>
              ))}
            </div>
          )}

          {/* Location Link */}
          {activity.location && (
            <button 
              onClick={() => openMap(activity.location!)}
              className="mt-3 flex items-center gap-1 text-sm text-blue-600 hover:text-blue-800 font-medium transition-colors"
            >
              <MapPin className="w-3 h-3" />
              導航至: {activity.location}
            </button>
          )}

          {/* Nested Options (e.g., Plan A vs Plan B) */}
          {hasOptions && (
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              {activity.options!.map(opt => (
                <ActivityCard key={opt.id} activity={opt} isOption={true} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};