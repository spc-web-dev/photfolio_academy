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
import { Label } from "@/components/ui/label";
import { FormProjectType } from "@/lib/type";
import {
  CldImage,
  CldUploadWidget,
  CloudinaryUploadWidgetInfo,
} from "next-cloudinary";



function Image({ form }: { form: FormProjectType }) {
  return (
    <FormField
      name="image"
      control={form.control}
      render={({ field }) => (
        <FormItem>
          <FormLabel>Image</FormLabel>
          <FormControl>
            <div className="space-y-2">
              <Input type="text" {...field} placeholder="add image url here" />
              <Label htmlFor="pro-image">
                <Input type="file" hidden id="pro-image" className="hidden" />
                <Badge variant={"secondary"} className=" cursor-pointer">
                  <CldUploadWidget
                    signatureEndpoint={"/api/sign-image"}
                    uploadPreset="photfolio_academy"
                    onSuccess={(result)=>{
                      if(result.info){
                        form.setValue('image', (result.info as CloudinaryUploadWidgetInfo).secure_url)
                      }
                    }}
                    onQueuesEnd={(result, { widget }) => {
                      widget.close();
                    }}
                  >
                    {({ open }) => {
                      function handleClick() {
                        open();
                      }
                      return (
                        <button
                          className="button"
                          type="button"
                          onClick={handleClick}
                        >
                          Upload
                        </button>
                      );
                    }}
                  </CldUploadWidget>
                </Badge>
              </Label>
              {field.value && (
                <CldImage
                  width="120"
                  height="75"
                  src={field.value}
                  sizes="100vw"
                  alt="Description of my image"
                />
              )}
            </div>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

export default Image;
