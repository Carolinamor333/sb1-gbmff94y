import React, { useState } from 'react';
import { Header } from './components/layout/Header';
import { SearchFilters } from './components/filters/SearchFilters';
import { CoachCard } from './components/coaches/CoachCard';
import type { Coach, SearchFilters as SearchFiltersType } from './types';

function App() {
  const [filters, setFilters] = useState<SearchFiltersType>({
    specialization: '',
    priceRange: [0, 500],
    location: '',
    availability: '',
  });

  // Mock data for initial development
  const coaches: Coach[] = [
    {
      id: '1',
      name: 'Sarah Johnson',
      title: 'Holistic Life Coach',
      specializations: ['Life Coaching', 'Meditation', 'Stress Management'],
      rating: 4.9,
      reviewCount: 128,
      hourlyRate: 120,
      imageUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=800',
      location: 'Miami Beach, FL',
      description: 'Dedicated holistic life coach with 10+ years of experience helping clients achieve balance and fulfillment.',
    },
    {
      id: '2',
      name: 'Michael Chen',
      title: 'Wellness & Nutrition Coach',
      specializations: ['Nutrition', 'Fitness', 'Mindfulness'],
      rating: 4.8,
      reviewCount: 95,
      hourlyRate: 95,
      imageUrl: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80&w=800',
      location: 'Miami, FL',
      description: 'Certified nutrition expert specializing in holistic wellness and sustainable lifestyle changes.',
    },
    {
      id: '3',
      name: 'Emma Rodriguez',
      title: 'Energy Healer & Yoga Instructor',
      specializations: ['Energy Healing', 'Yoga', 'Meditation'],
      rating: 5.0,
      reviewCount: 74,
      hourlyRate: 150,
      imageUrl: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&q=80&w=800',
      location: 'Miami Beach, FL',
      description: 'Experienced energy healer combining ancient wisdom with modern techniques.',
    },
    {
      id: '4',
      name: 'David Martinez',
      title: 'Sound Healing Therapist',
      specializations: ['Sound Therapy', 'Meditation', 'Chakra Balancing'],
      rating: 4.9,
      reviewCount: 86,
      hourlyRate: 135,
      imageUrl: 'https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?auto=format&fit=crop&q=80&w=800',
      location: 'Miami, FL',
      description: 'Certified sound healer specializing in vibrational therapy and deep relaxation techniques.',
    },
    {
      id: '5',
      name: 'Isabella Santos',
      title: 'Reiki Master & Spiritual Coach',
      specializations: ['Reiki', 'Spiritual Healing', 'Crystal Therapy'],
      rating: 4.7,
      reviewCount: 92,
      hourlyRate: 110,
      imageUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=800',
      location: 'Miami Beach, FL',
      description: 'Experienced Reiki master offering transformative energy healing sessions.',
    },
    {
      id: '6',
      name: 'Marcus Thompson',
      title: 'Mindfulness & Meditation Guide',
      specializations: ['Mindfulness', 'Breathwork', 'Stress Reduction'],
      rating: 4.8,
      reviewCount: 103,
      hourlyRate: 125,
      imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800',
      location: 'Miami, FL',
      description: 'Certified mindfulness instructor helping clients find inner peace and clarity.',
    },
    {
      id: '7',
      name: 'Sofia Patel',
      title: 'Ayurvedic Practitioner',
      specializations: ['Ayurveda', 'Holistic Nutrition', 'Herbal Medicine'],
      rating: 4.9,
      reviewCount: 67,
      hourlyRate: 140,
      imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800',
      location: 'Miami Beach, FL',
      description: 'Traditional Ayurvedic practitioner offering personalized wellness solutions.',
    },
    {
      id: '8',
      name: 'Lucas Rivera',
      title: 'Movement & Dance Therapist',
      specializations: ['Dance Therapy', 'Somatic Movement', 'Emotional Release'],
      rating: 4.8,
      reviewCount: 81,
      hourlyRate: 115,
      imageUrl: 'https://images.unsplash.com/photo-1531384441138-2736e62e0919?auto=format&fit=crop&q=80&w=800',
      location: 'Miami, FL',
      description: 'Experienced movement therapist helping clients heal through dance and expression.',
    }
  ];

  const handleCoachSelect = (coach: Coach) => {
    console.log('Selected coach:', coach);
    // TODO: Implement coach selection logic
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-12 gap-8">
          <aside className="col-span-3">
            <SearchFilters 
              filters={filters}
              onFilterChange={setFilters}
            />
          </aside>
          
          <div className="col-span-9">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {coaches.map((coach) => (
                <CoachCard
                  key={coach.id}
                  coach={coach}
                  onSelect={handleCoachSelect}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;