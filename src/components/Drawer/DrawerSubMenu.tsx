import { ChevronLeft } from "lucide-react";
import { Drawer } from "vaul";
import React from "react";

interface SubmenuDrawerProps {
  title: string;
  icon: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

export function DrawerSubMenu({
  title,
  icon,
  isOpen,
  onClose,
}: SubmenuDrawerProps) {
  return (
    <Drawer.Root
      direction="right"
      dismissible={false}
      open={isOpen}
      onOpenChange={(open) => {
        if (!open) onClose();
      }}
    >
      <Drawer.Portal>
        <Drawer.Overlay
          onPointerDown={onClose}
          className="fixed inset-0 z-50 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"
        />
        <Drawer.Content className="fixed z-50 flex flex-col h-full w-full sm:max-w-sm md:max-w-[613px] inset-y-0 right-0 border-l overflow-y-auto p-0 bg-white dark:bg-zinc-800 shadow-lg transition-all data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right data-[state=closed]:duration-300 data-[state=open]:duration-500 dark:border-l-zinc-500">
          <Drawer.Title asChild>
            <h2 className="text-lg text-white font-semibold sticky top-0 z-[2] h-16 w-full flex items-center gap-2 px-4 bg-blue-700 dark:bg-zinc-900">
              {icon}
              {title}
              <button
                onClick={onClose}
                className="ml-auto text-gray-300 hover:text-white transition-colors duration-200 focus:outline-none focus-visible:text-white"
              >
                <ChevronLeft size={28} />
              </button>
            </h2>
          </Drawer.Title>

          {/* Conteúdo do submenu aqui */}
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
