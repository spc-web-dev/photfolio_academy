'use client'
import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Label } from "@/components/ui/label"

export default function UserSelectField({ role }: { role: 'viewer'| 'admin'| 'student'}) {
  return (
    <div className="flex flex-col gap-1">
    <Label className="">Role: <span className="text-blue-500 capitalize">{role}</span></Label>
    <Select name="role">
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a role" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Roles</SelectLabel>
          <SelectItem value="viewer">Viewer</SelectItem>
          <SelectItem value="admin">Admin</SelectItem>
          <SelectItem value="student">Student</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
    </div>
  )
}
