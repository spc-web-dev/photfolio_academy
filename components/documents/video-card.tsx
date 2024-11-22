

const VideoCard = ({ url }: { url: string; }) => {
  return (
    <video className="w-full h-fit max-h-52 sm:max-h-96 bg-slate-100 dark:bg-[rgba(0,0,0,.1)] rounded-md" controls>
        <source src={url} type="video/mp4" />
    </video>
  )
}

export default VideoCard