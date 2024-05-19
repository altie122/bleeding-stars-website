import type React from "react";
import { Button } from "./ui/button";

export function DiscordButton() {
  return(
    <a href="https://discord.gg/UmNRqRUpRe"><Button variant={'outline'} size="icon"><TablerBrandDiscord /></Button></a>
  )
}

export function YoutubeButton() {
  return(
    <a href="https://youtube.com/@Lolbit_The_Fox"><Button variant={'outline'} size="icon"><TablerBrandYoutube /></Button></a>
  )
}

function TablerBrandDiscord(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1.2rem" height="1.2rem" viewBox="0 0 24 24" {...props}><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M8 12a1 1 0 1 0 2 0a1 1 0 0 0-2 0m6 0a1 1 0 1 0 2 0a1 1 0 0 0-2 0"></path><path d="M15.5 17c0 1 1.5 3 2 3c1.5 0 2.833-1.667 3.5-3c.667-1.667.5-5.833-1.5-11.5c-1.457-1.015-3-1.34-4.5-1.5l-.972 1.923a11.9 11.9 0 0 0-4.053 0L9 4c-1.5.16-3.043.485-4.5 1.5c-2 5.667-2.167 9.833-1.5 11.5c.667 1.333 2 3 3.5 3c.5 0 2-2 2-3"></path><path d="M7 16.5c3.5 1 6.5 1 10 0"></path></g></svg>
  )
}


function TablerBrandYoutube(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1.2rem" height="1.2rem" viewBox="0 0 24 24" {...props}><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M2 8a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4z"></path><path d="m10 9l5 3l-5 3z"></path></g></svg>
  )
}