import { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function DeityCard({ form }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation after mount
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`transform transition-all duration-1000 ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
    }`}>
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-3xl mx-auto">
        {/* Image Section */}
        <div className="aspect-w-16 aspect-h-9 relative bg-gradient-to-b from-secondary-light to-white">
          <img
            src={form.image}
            alt={form.name}
            className="object-contain w-full h-full p-4"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
        </div>

        {/* Content Section */}
        <div className="p-8">
          {/* Title */}
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-primary-dark mb-2">
              {form.name}
            </h2>
            <h3 className="text-2xl text-primary sanskrit-text">
              {form.sanskrit}
            </h3>
          </div>

          {/* Description */}
          <p className="text-gray-700 text-lg mb-8 leading-relaxed">
            {form.description}
          </p>

          {/* Divine Qualities */}
          <div className="mb-8">
            <h4 className="text-xl font-semibold text-primary-dark mb-4">
              Divine Qualities
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {form.qualities.map((quality, index) => (
                <div 
                  key={index}
                  className="flex items-center space-x-2 text-gray-700"
                >
                  <ArrowRight className="text-primary" size={16} />
                  <span>{quality}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="space-y-2">
              <h4 className="font-semibold text-primary-dark">Vahana (Vehicle)</h4>
              <p className="text-gray-700">{form.vahana}</p>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold text-primary-dark">Associated Color</h4>
              <p className="text-gray-700">{form.color}</p>
            </div>
          </div>

          {/* Mantra */}
          <div className="bg-secondary-light rounded-xl p-6 text-center">
            <h4 className="text-xl font-semibold text-primary-dark mb-4">
              Sacred Mantra
            </h4>
            <p className="text-2xl sanskrit-text text-primary-dark">
              {form.mantra}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}