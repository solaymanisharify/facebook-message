import { useEffect } from "react";

const FacebookMsg = () => {
  useEffect(() => {
    // Load the Facebook SDK script dynamically
    const loadFacebookSDK = () => {
      if (document.getElementById("facebook-jssdk")) return;
      const script = document.createElement("script");
      script.id = "facebook-jssdk";
      script.src = "https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js";
      document.body.appendChild(script);
    };

    // Initialize Facebook SDK
    window.fbAsyncInit = function () {
      window.FB.init({
        appId: "498324479379955", // Your App ID
        autoLogAppEvents: true,
        xfbml: true,
        version: "v15.0",
      });
    };

    loadFacebookSDK();
  }, []);

  return (
    <>
      {/* Your Messenger Chat Plugin */}
      <div id="fb-root"></div>
      <div
        className="fb-customerchat"
        attribution="setup_tool"
        page_id="100401268725508"
        theme_color="#0084ff"
        logged_in_greeting="Hi! How can we help you?"
        logged_out_greeting="Hi! How can we help you?"
      ></div>
    </>
  );
};

export default FacebookMsg;
