import { Shield, Users, Trophy, Star } from 'lucide-react';

const badges = [
  {
    icon: Shield,
    label: 'Trusted Reviews',
    value: '10+ Years'
  },
  {
    icon: Users,
    label: 'Monthly Readers',
    value: '2M+'
  },
  {
    icon: Trophy,
    label: 'Expert Reviews',
    value: '1000+'
  },
  {
    icon: Star,
    label: 'User Rating',
    value: '4.9/5'
  }
];

export function TrustBadges() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
      {badges.map((badge) => (
        <div 
          key={badge.label}
          className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-3"
        >
          <badge.icon className="h-8 w-8 text-white" />
          <div>
            <p className="text-sm font-medium text-gray-200">{badge.label}</p>
            <p className="text-lg font-bold text-white">{badge.value}</p>
          </div>
        </div>
      ))}
    </div>
  );
}