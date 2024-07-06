import Card from '@/components/ui/card';
import fiverr from '../../../assets/1706198346fiverr-logo-transparent 1.png';
import freelancer from '../../../assets/Group 4.png';
import upwork from '../../../assets/Group 5.png';

function Platform() {
  return (
    <div>
      <div className="flex gap-8 bg-primary-dark-900 h-screen items-center justify-center">
        <Card icon={fiverr} />
        <Card icon={upwork} />
        <Card icon={freelancer} />
      </div>
    </div>
  );
}

export default Platform;
