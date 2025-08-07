'use client';

import React from 'react';

const PPTPage = () => {
  const fileUrl = 'https://view.officeapps.live.com/op/embed.aspx?src=' +
    encodeURIComponent('https://www.1vans.in/1_Vans.pptm');
    // ⚠️ Change "localhost:3000" to your real domain when deploying

  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <iframe
        src={fileUrl}
        width="100%"
        height="100%"
        frameBorder="0"
        title="PowerPoint Viewer"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default PPTPage;
