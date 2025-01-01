import { FacebookProvider, CustomChat } from "react-facebook";

const FacebookMsg = () => {
  return (
    <FacebookProvider appId="498324479379955" chatSupport>
      <CustomChat pageId="100401268725508" minimized={true} />
    </FacebookProvider>
  );
};

export default FacebookMsg;
