import Image from "next/image"


type Props = {
    src: string;
    alt: string;
}

const ProfileLogo = ({ src, alt }: Props ) => {
  return (
    <div className="max-w-[250px] max-h-[250px] relative">
        <Image src={src} alt={alt} width={250} height={250} quality={95} priority className="rounded-lg object-cover" />
    </div>
  )
}

export default ProfileLogo