import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useState, useEffect } from "react"

interface Props {
  uploadthing: string,
  Youtube?: string,
}

export default function MeetingsTabs({ uploadthing, Youtube }: Props) {
  const [tab, setTab] = useState(
    sessionStorage.getItem("video-tab")
      ? JSON.parse(sessionStorage.getItem("video-tabs")!)
      : "uploadthing"
  );
  useEffect(() => {
    sessionStorage.setItem(
      "video-tabs",
      JSON.stringify(tab)
    );
  }, [tab]);
  let youtube: string | undefined = Youtube;
  return (
    <Tabs defaultValue={tab} className="w-full" onValueChange={youtube ? setTab : undefined}>
      <TabsList className="grid grid-cols-2 gap-x-4 gap-y-1 sm:gap-x-6 sm:gap-y-2">
        <TabsTrigger value="uploadthing">Uploadthing</TabsTrigger>
        {youtube ? <TabsTrigger value="youtube">Youtube</TabsTrigger> : <TabsTrigger value="youtube" disabled>Youtube</TabsTrigger> }
      </TabsList>
      <TabsContent value="uploadthing">
        <video className="w-full" controls>
          <source src={uploadthing} type="video/mp4" />
        </video>
      </TabsContent>
      {youtube && <TabsContent value="youtube">
        <iframe
          src={youtube}
          title="Youtube"
          className="w-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </TabsContent>}
    </Tabs>
  )
}