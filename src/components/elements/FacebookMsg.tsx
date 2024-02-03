"use client";

import React from "react";
import { FacebookProvider, CustomChat } from "react-facebook";

export default function FacebookMsg() {
  return (
    <FacebookProvider appId={`${process.env.NEXT_PUBLIC_META_APP_ID}`}>
      <CustomChat
        pageId={`${process.env.NEXT_PUBLIC_FACEBOOKPAGE_ID}`}
        minimized={false}
      />
    </FacebookProvider>
  );
}
