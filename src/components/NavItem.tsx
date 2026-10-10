"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItemProps {
  href: string;
  name: string;
  icon?: string;
}

const NavItem = ({
  href,
  name,
  icon,
}: NavItemProps) => {
  const pathname = usePathname();

  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`

                flex
                shrink-0
                items-center
                gap-1.5
                rounded-lg
                px-3
                py-1.5
                text-sm
                font-medium
                transition

                ${
                  isActive
                    ? `
                    bg-[#009639]
                    text-white
                    shadow-sm
                    `
                    : `
                    text-gray-700
                    hover:bg-green-50
                    hover:text-green-700
                    `
                }


            `}
    >
      {icon && <span className="text-xs">{icon}</span>}

      <span className="whitespace-nowrap">{name}</span>
    </Link>
  );
};

export default NavItem;
