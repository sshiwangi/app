import React from 'react';
import description from '../../assets/statistics columns and message.png';
import imageGeneration from '../../assets/cube with image icon.png';
import Card from '@/components/ui/card';

function Generate() {
  return (
    <div>
      <div className="flex gap-8 bg-primary-dark-900 h-screen items-center justify-center">
        <Card
          icon={description}
          title="Gig Description"
          description="Generate gig description for your service in just one click"
        />
        <Card
          icon={imageGeneration}
          title="Gig Image"
          description="Generate gig Image for your service in just one click"
        />
      </div>
    </div>
  );
}

export default Generate;
