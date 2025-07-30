import { Timeline } from "../components/Timeline";
import { certifications } from "../constants";
const Certification = () => {
  return (
    <div className="w-full">
      <Timeline data={certifications} />
    </div>
  );
};

export default Certification;
