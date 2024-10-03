import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center bg-gradient-to-b from-secondary-light via-primary-light to-white px-4 pt-40">
      <div className="text-center max-w-4xl mx-auto space-y-12">
        {/* Main Title */}
        <div className="space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold text-primary-dark sanskrit-text animate-fade-in">
            शुभ नवरात्रि
          </h1>
          <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent max-w-[300px] mx-auto" />
          <p className="text-2xl md:text-3xl text-primary-dark sanskrit-text animate-fade-in-delay">
            ॐ दुं दुर्गायै नमः
          </p>
        </div>

        {/* Description */}
        <div className="space-y-6 text-gray-700">
          <p className="text-xl leading-relaxed">
            Welcome to a sacred journey of self-discovery through the divine aspects of Maa Durga.
          </p>
          <p className="text-lg">
            Each of the nine forms (Navdurga) embodies unique divine qualities and blessings. 
            Discover which form resonates most deeply with your spirit.
          </p>
        </div>

        {/* Start Button */}
        <div className="space-y-8">
          <button 
            onClick={() => navigate('/quiz')}
            className="btn-primary group text-lg px-8 py-3"
          >
            Begin Your Journey
            <ArrowRight className="inline ml-2 group-hover:translate-x-1 transition-transform" 
              size={24}
            />
          </button>
          <p className="text-sm text-gray-600">
            A spiritual quest awaits to connect you with the divine mother's energy
          </p>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-orange-100 to-transparent opacity-50" />
        {/* <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-orange-50 to-transparent opacity-50" /> */}
      </div>
    </div>
  );
}