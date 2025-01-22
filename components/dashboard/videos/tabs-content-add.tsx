"use client";
import { Form } from "@/components/ui/form";
import { TabsContent } from "@/components/ui/tabs";
import TitleKh from "./fields/title-kh";
import TitleEn from "./fields/title-en";
import DescriptionKh from "./fields/description-kh";
import DescriptionEn from "./fields/description-en";
import Url from "./fields/url";
import Skills from "./fields/skills";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { videoSchema } from "@/lib/type";
import { zodResolver } from "@hookform/resolvers/zod";
import { handleAddVideo } from "@/lib/action/action-videos";
import { toast } from "sonner";

function TabsContentAdd() {
  const form = useForm({
    resolver: zodResolver(videoSchema),
    defaultValues: {
      titleEn: "",
      titleKh: "",
      descriptionsEn: "",
      descriptionsKh: "",
      url: "",
      skillId: "",
    },
  });
  const onSubmit = async (videos: z.infer<typeof videoSchema>) => {
    const { success,message } = await handleAddVideo(videos);
    toast(success ? "success" : "error", {
      description: message,
    });
  };
  return (
    <TabsContent value="add_new">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-4">
            <TitleKh form={form}/>
            <TitleEn form={form}/>
            <DescriptionKh form={form}/>
            <DescriptionEn form={form}/>
            <Url form={form}/>
            <Skills form={form}/>
          </div>
          <Button type="submit" variant={"outline"}>
            Save
          </Button>
        </form>
      </Form>
    </TabsContent>
  );
}

export default TabsContentAdd;
