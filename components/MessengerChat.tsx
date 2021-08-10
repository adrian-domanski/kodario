import React, { useEffect } from 'react';

const MessengerChat = () => {
  useEffect(() => {
    var chatbox = document.getElementById('fb-customer-chat');
    chatbox.setAttribute('page_id', '112167500574067');
    chatbox.setAttribute('attribution', 'biz_inbox');

    (window as any).fbAsyncInit = function () {
      FB.init({
        xfbml: true,
        version: 'v11.0',
      });
    };
    (function (d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s);
      js.id = id;
      js.src = 'https://connect.facebook.net/pl_PL/sdk/xfbml.customerchat.js';
      fjs.parentNode.insertBefore(js, fjs);
    })(document, 'script', 'facebook-jssdk');
  }, []);

  return (
    <>
      <div id='fb-root'></div>
      <div id='fb-customer-chat' className='fb-customerchat'></div>
    </>
  );
};

export default MessengerChat;
