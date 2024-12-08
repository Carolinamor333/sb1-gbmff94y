import React from 'react';
import { Star, MapPin, Clock } from 'lucide-react';
import type { Coach } from '../../types';

interface CoachCardProps {
  coach: Coach;
  onSelect: (coach: Coach) => void;
}

export function CoachCard({ coach, onSelect }: CoachCardProps) {
  return (
    <div 
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
      onClick={() => onSelect(coach)}
    >
      <div className="aspect-w-16 aspect-h-9">
        <img 
          src={coach.imageUrl} 
          alt={coach.name}
          className="object-cover w-full h-48"
        />
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{coach.name}</h3>
            <p className="text-sm text-gray-600">{coach.title}</p>
          </div>
          <div className="flex items-center">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span className="ml-1 text-sm text-gray-600">{coach.rating} ({coach.reviewCount})</span>
          </div>
        </div>
        
        <div className="flex items-center text-sm text-gray-500 mb-2">
          <MapPin className="h-4 w-4 mr-1" />
          <span>{coach.location}</span>
        </div>

        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center text-sm text-gray-500">
            <Clock className="h-4 w-4 mr-1" />
            <span>Available Today</span>
          </div>
          <p className="text-lg font-semibold text-indigo-600">${coach.hourlyRate}/hr</p>
        </div>

        <div className="mt-3 flex flex-wrap gap-2">
          {coach.specializations.slice(0, 3).map((spec, index) => (
            <span 
              key={index}
              className="px-2 py-1 text-xs bg-indigo-50 text-indigo-700 rounded-full"
            >
              {spec}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}