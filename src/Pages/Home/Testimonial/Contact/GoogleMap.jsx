import React from "react";

const GoogleMap = () => {
  return (
    <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-md">
      <iframe
        title="Google Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63339.12638922072!2d80.57609992886535!3d6.274923404566388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae1393e83da2bcd%3A0x6c94a843b6f7c85!2sCentral%20Research%20Station%2C%20Department%20of%20Agriculture!5e0!3m2!1sen!2slk!4v1631181882584!5m2!1sen!2slk"
        width="100%"
        height="100%"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="border-0"
      ></iframe>
    </div>  
  );
};

export default GoogleMap;
