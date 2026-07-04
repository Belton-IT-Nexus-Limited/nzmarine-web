import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Compass,
  FileText,
  Globe,
  GraduationCap,
  Megaphone,
  Mountain,
  Sailboat,
  ShieldCheck,
  Tags,
  Tent,
  Users,
  Wrench,
  type LucideIcon,
} from 'lucide-react';

/**
 * Curated icon registry. Only the icons the site actually uses are imported by
 * name so the bundle tree-shakes to these few, instead of pulling the whole
 * lucide set via the `icons` barrel. Add a name here before referencing it as
 * a string icon in content data.
 */
export const iconRegistry: Record<string, LucideIcon> = {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Compass,
  FileText,
  Globe,
  GraduationCap,
  Megaphone,
  Mountain,
  Sailboat,
  ShieldCheck,
  Tags,
  Tent,
  Users,
  Wrench,
};
