"use client";

import { SignIn } from "@clerk/nextjs";

const SignInPage = () => {
  return (
    <SignIn
      path="/signin"
      routing="path"
      afterSignInUrl="/" // Redirect to home page after sign in
    />
  );
};

export default SignInPage;