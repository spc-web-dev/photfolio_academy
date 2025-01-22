"use client";
import { Badge } from "@/components/ui/badge";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { FormVideoType } from "@/lib/type";
import {
  CldUploadWidget,
  CloudinaryUploadWidgetInfo,
} from "next-cloudinary";
import 'next-cloudinary/dist/cld-video-player.css';

function Url({ form }: { form: FormVideoType }) {
  return (
    <FormField
      name="url"
      control={form.control}
      render={({ field }) => (
        <FormItem>
          <FormLabel>Video Url</FormLabel>
          <FormControl>
            <div className="space-y-2 ">
              <Input type="text" {...field} placeholder="Add video url here" />
              <Badge variant={"secondary"}>
                <CldUploadWidget
                  signatureEndpoint="/api/sign-video"
                  uploadPreset="photfolio_videos"
                  onSuccess={(result) => {
                    if (result.info) {
                      form.setValue(
                        "url",
                        (result.info as CloudinaryUploadWidgetInfo).secure_url
                      );
                    }
                  }}
                  onQueuesEnd={(result, { widget }) => {
                    if (result) {
                    }
                    widget.close();
                  }}
                >
                  {({ open }) => {
                    return (
                      <button onClick={() => open()} type="button">
                        Upload an Video
                      </button>
                    );
                  }}
                </CldUploadWidget>
              </Badge>
              {field.value && (
                <video
                  src={field.value}
                  controls
                  className="w-70 h-60 rounded-md"
                ></video>
              )}
            </div>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

export default Url;
