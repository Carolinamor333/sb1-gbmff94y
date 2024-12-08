import React from 'react';
import { Sliders } from 'lucide-react';
import type { SearchFilters } from '../../types';

interface SearchFiltersProps {
  filters: SearchFilters;
  onFilterChange: (filters: SearchFilters) => void;
}

export function SearchFilters({ filters, onFilterChange }: SearchFiltersProps) {
  const specializations = [
    'Life Coaching',
    'Nutrition',
    'Meditation',
    'Yoga',
    'Energy Healing',
    'Career Coaching',
  ];

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">Filters</h2>
        <Sliders className="h-5 w-5 text-gray-500" />
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Specialization
          </label>
          <select
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            value={filters.specialization}
            onChange={(e) => onFilterChange({ ...filters, specialization: e.target.value })}
          >
            <option value="">All Specializations</option>
            {specializations.map((spec) => (
              <option key={spec} value={spec}>{spec}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Price Range
          </label>
          <div className="flex items-center space-x-2">
            <input
              type="number"
              min="0"
              value={filters.priceRange[0]}
              onChange={(e) => onFilterChange({
                ...filters,
                priceRange: [Number(e.target.value), filters.priceRange[1]]
              })}
              className="w-24 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
            <span>-</span>
            <input
              type="number"
              min="0"
              value={filters.priceRange[1]}
              onChange={(e) => onFilterChange({
                ...filters,
                priceRange: [filters.priceRange[0], Number(e.target.value)]
              })}
              className="w-24 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Location
          </label>
          <input
            type="text"
            value={filters.location}
            onChange={(e) => onFilterChange({ ...filters, location: e.target.value })}
            placeholder="Enter location..."
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Availability
          </label>
          <select
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            value={filters.availability}
            onChange={(e) => onFilterChange({ ...filters, availability: e.target.value })}
          >
            <option value="">Any Time</option>
            <option value="today">Today</option>
            <option value="this_week">This Week</option>
            <option value="next_week">Next Week</option>
          </select>
        </div>
      </div>
    </div>
  );
}