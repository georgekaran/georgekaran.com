import { User, Briefcase, FolderOpen, Wrench, Mail, FileText } from "lucide-react"
import type { AppDefinition, AppId } from "./types"
import AboutApp from "@/apps/AboutApp"
import ExperienceApp from "@/apps/ExperienceApp"
import ProjectsApp from "@/apps/ProjectsApp"
import SkillsApp from "@/apps/SkillsApp"
import ContactApp from "@/apps/ContactApp"
import ReadmeApp from "@/apps/ReadmeApp"

export const APPS: AppDefinition[] = [
  { id: "about", title: "About Me", icon: User, tint: "blue", defaultRect: { x: 120, y: 80, width: 520, height: 460 }, Content: AboutApp },
  { id: "experience", title: "Experience", icon: Briefcase, tint: "teal", defaultRect: { x: 180, y: 110, width: 560, height: 520 }, Content: ExperienceApp },
  { id: "projects", title: "Projects", icon: FolderOpen, tint: "amber", defaultRect: { x: 220, y: 90, width: 640, height: 520 }, Content: ProjectsApp },
  { id: "skills", title: "Skills", icon: Wrench, tint: "violet", defaultRect: { x: 260, y: 130, width: 600, height: 480 }, Content: SkillsApp },
  { id: "contact", title: "Contact", icon: Mail, tint: "coral", defaultRect: { x: 300, y: 120, width: 460, height: 420 }, Content: ContactApp },
  { id: "readme", title: "README.txt", icon: FileText, tint: "gray", defaultRect: { x: 340, y: 100, width: 480, height: 360 }, Content: ReadmeApp },
]

export const DEFAULT_OPEN: AppId[] = ["about"]

export function getApp(id: AppId): AppDefinition | undefined {
  return APPS.find((a) => a.id === id)
}
