"use client";

import { SignIn } from "@clerk/nextjs";

const SignInPage = () => {
  return (
    <SignIn
      path="/sign-in"
      routing="path"
      afterSignInUrl="/" // Redirect to home page after sign in
    />
  );
};

export default SignInPage;