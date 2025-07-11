"use client";

import { DrawerAcessibility } from "../Drawer/DrawerAcessibility";
import { ModalCoverage } from "../Modal/ModalCoverage";
import ModalSubHeader from "../Modal/ModalSubHeader";

export default function SubHeaderMobile() {
  return (
    <div className="flex items-center justify-between py-4 px-5 lg:px-6">
      <ModalCoverage />
      <DrawerAcessibility />
    </div>
  );
}
