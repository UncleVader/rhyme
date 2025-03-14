'use client'
import posthog from 'posthog-js'
import { PostHogProvider } from 'posthog-js/react'
import {POSTHOG_HOST, POSTHOG_KEY} from "@/const/common";
import {ReactNode} from "react";

if (typeof window !== 'undefined') {
  posthog.init(POSTHOG_KEY, {
    api_host: POSTHOG_HOST,
    person_profiles: 'identified_only', // or 'always' to create profiles for anonymous users as well
  })
}
export function CSPostHogProvider({ children }: {children: ReactNode}) {
  return <PostHogProvider client={posthog}>{children}</PostHogProvider>
}
