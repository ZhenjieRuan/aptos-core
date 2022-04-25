import * as React from "react";
import {GitHubSignIn} from "./GitHubSignIn";
import {OnboardingForm} from "./OnboardingForm";
import {Identity} from "./types";
import {useAuth} from "auth";

export function OnboardingPage() {
  const {isSignedIn} = useAuth();

  const handleSubmit = (identity: Identity) => {
    console.log(identity);
  };

  return (
    <div className="max-w-3xl mx-auto py-6 sm:px-6 lg:px-8">
      <div className="mt-5 md:mt-0 md:col-span-2">
        <div className="px-4 sm:px-6">
          <h3 className="text-lg font-medium leading-6 text-gray-900">Aptos</h3>
          <p className="mt-1 text-sm text-gray-600">
            {isSignedIn
              ? "Tell us your address so you can get paid."
              : "Sign in with GitHub to get started."}
          </p>
        </div>
        <div className="px-4 py-5 sm:p-6">
          {isSignedIn ? (
            <OnboardingForm onSubmit={handleSubmit} />
          ) : (
            <GitHubSignIn />
          )}
        </div>
      </div>
    </div>
  );
}