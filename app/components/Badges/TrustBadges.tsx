
export default function TrustBadges() {

    const badges = ["Licensed & Insured", "Fast Response Times", "Local Electrician", "4.8 Google Rated"];

    const renderBadges = () => {
        return badges.map((badge) => (
            <div key={badge} className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 text-xs text-white">
                {badge}
            </div>
        )); 
    };
    
  return (
    <div className="flex flex-row gap-2">
        {renderBadges()}
    </div>
  );
}