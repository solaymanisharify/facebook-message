import { useEffect } from "react";

const FacebookMsg = () => {
  useEffect(() => {
    const fbScript = document.getElementById("facebook-jssdk");
    if (!fbScript) {
      const script = document.createElement("script");
      script.id = "facebook-jssdk";
      script.src = "https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js";
      script.async = true;
      document.body.appendChild(script);
    } else {
      window.FB && window.FB.XFBML.parse();
    }
  }, []);

  return (
    <>
      <div id="fb-root"></div>
      <div
        className="fb-customerchat"
        attribution="setup_tool"
        page_id="100401268725508" // Replace with your Facebook Page ID
        theme_color="#0084FF" // Customize as needed
        logged_in_greeting="Hi! How can we help you?"
        logged_out_greeting="Hi! Please log in to chat with us."
      ></div>
    </>
  );
};

export default FacebookMsg;
