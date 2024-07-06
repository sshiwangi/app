import Navbar from '@/components/Navbar';
import React from 'react';
import portfolio from '../../assets/Upload image.png';
import manual from '../../assets/Young woman is putting together her portfolio.png';
import Card from '@/components/ui/card';

function GigSetup() {
  return (
    <div>
      <div className="flex gap-8 bg-primary-dark-900 h-screen items-center justify-center">
        <Card
          icon={manual}
          title="Manual Gig Creation"
          description="Type in the prompt describing your service and we will generate a gig for you."
        />
        <Card
          icon={portfolio}
          title="Upload portfolio"
          description="Create gig from your portfolio. Just upload your portfolio and we will generate a gig for you."
        />
      </div>
    </div>
  );
}

export default GigSetup;
