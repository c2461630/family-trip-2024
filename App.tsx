import React, { useState } from 'react';
import { ITINERARY_DATA } from './constants';
import { ActivityCard } from './components/ActivityCard';
import { TravelAssistant } from './components/TravelAssistant';
import { Map, Calendar, Sun } from 'lucide-react';

const App: React.FC = () => {
  const [activeDayId, setActiveDayId] = useState(1);
  const activeDay = ITINERARY_DATA.find(d => d.dayId === activeDayId) || ITINERARY_DATA[0];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-gray-800 pb-24">
      {/* Header */}
      <header className="bg-gradient-to-r from-teal-600 to-blue-600 text-white pb-12 pt-8 px-4 shadow-lg sticky top-0 z-30">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-2 opacity-80">
            <Calendar className="w-4 h-4" />
            <span className="text-sm font-medium tracking-wide">12/10 - 12/14 五日遊</span>
          </div>
          <h1 className="text-3xl font-bold mb-2">花東親子慢活之旅</h1>
          <div className="flex items-center gap-2 text-sm text-teal-50">
            <Map className="w-4 h-4" />
            <span>台南 ➔ 宜蘭 ➔ 花蓮 ➔ 台東</span>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto -mt-8 px-4">
        {/* Navigation Tabs (Scrollable on mobile) */}
        <div className="flex overflow-x-auto gap-2 pb-4 no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0 sticky top-24 z-20">
          {ITINERARY_DATA.map((day) => (
            <button
              key={day.dayId}
              onClick={() => setActiveDayId(day.dayId)}
              className={`flex-shrink-0 flex flex-col items-center justify-center p-3 min-w-[80px] rounded-xl transition-all shadow-sm border ${
                activeDayId === day.dayId
                  ? 'bg-white border-teal-500 ring-2 ring-teal-500/20 text-teal-700 transform scale-105'
                  : 'bg-white/90 border-transparent text-gray-500 hover:bg-white'
              }`}
            >
              <span className="text-xs font-bold uppercase tracking-wider">Day {day.dayId}</span>
              <span className="text-sm font-semibold">{day.date}</span>
            </button>
          ))}
        </div>

        {/* Day Content */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mt-2 animate-in fade-in duration-500">
          <div className="mb-8 pb-6 border-b border-gray-100">
            <div className="flex items-center gap-3 mb-2">
              <span className="px-3 py-1 rounded-full bg-teal-100 text-teal-800 text-xs font-bold">
                {activeDay.weekday}
              </span>
              <h2 className="text-xl font-bold text-gray-800">{activeDay.route}</h2>
            </div>
            <div className="flex items-start gap-2 text-gray-600 bg-orange-50 p-4 rounded-lg border border-orange-100">
              <Sun className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
              <p className="font-medium text-sm leading-relaxed">
                <span className="font-bold text-orange-700">今日重點：</span> {activeDay.highlight}
              </p>
            </div>
          </div>

          {/* Timeline */}
          <div className="space-y-2">
            {activeDay.activities.map((activity) => (
              <ActivityCard key={activity.id} activity={activity} />
            ))}
          </div>
        </div>
        
        <p className="text-center text-gray-400 text-xs mt-8 mb-4">
          祝旅途愉快！記得隨時檢查車況與天氣。
        </p>
      </main>

      <TravelAssistant />
    </div>
  );
};

export default App;