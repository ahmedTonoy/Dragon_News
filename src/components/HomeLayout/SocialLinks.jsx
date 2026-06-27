import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const SocialLinks = () => {
  return (
    <div>
      <h2 className="font-bold mb-5">Find Us On</h2>
      <div className="border border-base-300 rounded-md">
        <div className="flex items-center gap-3 p-4 py-3">
          <div className="p-2 rounded-full bg-base-200">
            <FaFacebookF />
          </div>
          <p className="text-accent">Facebook</p>
        </div>
        <div className="flex items-center gap-3 p-4 py-3 border-y border-base-300">
          <div className="p-2 rounded-full bg-base-200">
            <FaTwitter />
          </div>
          <p className="text-accent">Twitter</p>
        </div>
        <div className="flex items-center gap-3 p-4 py-3">
          <div className="p-2 rounded-full bg-base-200">
            <FaInstagram />
          </div>
          <p className="text-accent">Instagram</p>
        </div>
      </div>
    </div>
  );
};

export default SocialLinks;
