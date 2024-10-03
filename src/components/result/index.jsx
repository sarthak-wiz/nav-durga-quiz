import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { durgaForms } from '../../data/forms';
import DeityCard from './DeityCard';
import { RotateCcw, Share2 } from 'lucide-react';

export default function Result() {
  const location = useLocation();
  const navigate = useNavigate();
  const [showShareTooltip, setShowShareTooltip] = useState(false);

  useEffect(() => {
    // Redirect to home if accessed directly without quiz results
    if (!location.state?.result) {
      navigate('/');
    }
  }, [location.state, navigate]);

  if (!location.state?.result) {
    return null;
  }

  const { result } = location.state;
  const matchedForm = durgaForms[result.form];

  // Calculate percentage matches
  const totalScore = Object.values(result.scores).reduce((a, b) => a + b, 0);
  const percentages = Object.entries(result.scores).reduce((acc, [form, score]) => {
    acc[form] = Math.round((score / totalScore) * 100);
    return acc;
  }, {});

  const handleShare = async () => {
    const shareText = `I discovered my divine connection with ${matchedForm.name} through the Nav Durga Quiz! 🙏✨`;
    
    try {
      if (navigator.share) {
        await navigator.share({
          title: 'Nav Durga Quiz Result',
          text: shareText,
          url: window.location.origin
        });
      } else {
        await navigator.clipboard.writeText(shareText);
        setShowShareTooltip(true);
        setTimeout(() => setShowShareTooltip(false), 2000);
      }
    } catch (error) {
      console.error('Error sharing:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary-light to-white py-12 px-4 pt-40">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-dark animate-fade-in">
            Your Divine Connection
          </h1>
          <p className="text-xl text-gray-700 animate-fade-in-delay">
            Based on your responses, you share a special connection with:
          </p>
        </div>

        {/* Main Content */}
        <div className="space-y-12">
          {/* Deity Card */}
          <DeityCard form={matchedForm} />

          {/* Percentage Matches */}
          <div className="bg-white rounded-xl shadow-lg p-6 animate-fade-in-delay">
            <h3 className="text-xl font-semibold text-primary-dark mb-4">
              Your Divine Resonance
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {Object.entries(percentages)
                .sort(([,a], [,b]) => b - a)
                .map(([form, percentage]) => (
                  <div 
                    key={form}
                    className="relative h-8 bg-gray-100 rounded-full overflow-hidden"
                  >
                    <div
                      className="absolute inset-0 bg-gradient-to-r from-primary to-secondary transition-all duration-1000"
                      style={{ width: `${percentage}%` }}
                    />
                    <div className="absolute inset-0 flex items-center justify-between px-3">
                      <span className="text-sm font-medium text-gray-700">
                        {durgaForms[form].name.replace('Maa ', '')}
                      </span>
                      <span className="text-sm font-medium text-gray-700">
                        {percentage}%
                      </span>
                    </div>
                  </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button 
              onClick={() => navigate('/')}
              className="btn-primary group content-strech flex justify-center item-center"
            >
              <RotateCcw className="mr-2 mt-1" size={20} />
              Take Quiz Again
            </button>

            <div className="flex flex-row">
              <button
                onClick={handleShare}
                className="btn-outline group flex"
              >
                <Share2 className="mr-2 mt-1" size={20} />
                Share Result
              </button>
              {showShareTooltip && (
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-800 text-white text-sm rounded">
                  Copied to clipboard!
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}