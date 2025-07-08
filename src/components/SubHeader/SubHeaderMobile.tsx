"use client";

import { DrawerSubHeader } from "../Drawer/DrawerSubHeader";
import ModalSubHeader from "../Modal/ModalSubHeader";

export default function SubHeaderMobile() {
  return (
    <div className="flex items-center justify-between py-4 px-5 lg:px-6">
      <ModalSubHeader />
      <DrawerSubHeader />
    </div>
  );
}
