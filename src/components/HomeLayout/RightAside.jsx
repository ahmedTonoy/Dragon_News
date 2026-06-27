import QZone from "./QZone";
import SocialLinks from "./SocialLinks";
import SocialLogin from "./SocialLogin";

const RightAside = () => {
  return (
    <div>
      <div>
        <SocialLogin />
      </div>
      <div className="mt-8 mb-5">
        <SocialLinks />
      </div>
      <div>
        <QZone />
      </div>
    </div>
  );
};

export default RightAside;
