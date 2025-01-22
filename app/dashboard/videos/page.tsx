import VideosTabs from "@/components/dashboard/videos/videos-tabs"


async function page({ searchParams }: { searchParams: Promise<{ tabs: string; video_id: string; }>}) {
  return (
    <div>
        <VideosTabs searchParams={searchParams}/>
    </div>
  )
}

export default page