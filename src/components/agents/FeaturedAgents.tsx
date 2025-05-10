import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone } from 'lucide-react';
import { agents } from '../../data/mockData';

const FeaturedAgents: React.FC = () => {
  // Only display the first 4 agents
  const featuredAgents = agents.slice(0, 4);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {featuredAgents.map((agent) => (
        <div key={agent.id} className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-4">
            <div className="flex justify-center mb-4">
              <img 
                src={agent.avatar} 
                alt={agent.name} 
                className="h-28 w-28 rounded-full object-cover border-4 border-neutral-100"
              />
            </div>
            <h3 className="text-xl font-semibold text-center mb-1">{agent.name}</h3>
            <p className="text-neutral-600 text-center mb-4">{agent.role}</p>
            <div className="space-y-2 mb-4">
              <div className="flex items-center">
                <Phone className="h-4 w-4 text-primary-600 mr-2" />
                <span className="text-sm text-neutral-600">{agent.phone}</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 text-primary-600 mr-2" />
                <span className="text-sm text-neutral-600">{agent.email}</span>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-neutral-600">{agent.listings} listings</span>
              <Link to={`/agents/${agent.id}`} className="text-sm text-primary-600 hover:text-primary-700 font-medium">
                View Profile
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeaturedAgents;