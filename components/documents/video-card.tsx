

const VideoCard = ({ url }: { url: string; }) => {
  return (
    <video className="w-full h-fit max-h-96 bg-slate-100 rounded-md" controls>
        <source src={url} type="video/mp4" />
    </video>
  )
}

export default VideoCard