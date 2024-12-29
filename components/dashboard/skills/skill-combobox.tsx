"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { SkillType } from "@/lib/type"
import { fetchSkills } from "@/lib/action-skills"
import { useRouter } from "next/navigation"




export default function SkillCombobox() {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState('')
  const [skills,setSkills] = React.useState<SkillType[] | []>([])
  const router = useRouter()

  React.useEffect(()=>{
    async function handleSkill() {
        const { data } = await fetchSkills()
        if(data) setSkills(data as SkillType[])
    }
    handleSkill()
  },[])

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="min-w-[200px] justify-between"
        >
          {value
            ? skills.find((skill) => skill.id === value)?.title
            : "Select skill you want to update..."}
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search skill..." className="h-9" />
          <CommandList>
            <CommandEmpty>No skill found.</CommandEmpty>
            <CommandGroup>
              {skills.map((skill) => (
                <CommandItem
                  key={skill.id}
                  value={skill.id}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue)
                    setOpen(false)
                    router.push(`/dashboard/skills?tabs=update&skill_id=${skill.id}`)
                  }}
                >
                  {skill.title}
                  <Check
                    className={cn(
                      "ml-auto",
                      value === skill.id ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
