import { IClickableItemProps, IClickableItemTypedClass } from "~~/components/parts/ClickableList/ClickableItem.vue";
import { IHeaderProps } from "~~/components/parts/Header/Header.vue";

import { HEADER_LABELS, CLICKABLE_LIST_LABELS } from "./Labels";

import FingerPrint from "~/assets/svg/FingerPrint.svg";
import Block from "~/assets/svg/Block.svg";
import User from "~/assets/svg/User.svg";

export const OBJECT__HEADER: IHeaderProps = {
  title: HEADER_LABELS.SECTION_A_TITLE,
  subTitle: HEADER_LABELS.SECTION_A_SUBTITLE,
  description: HEADER_LABELS.SECTION_A_DESCTRIPTION,
};

export const ARRAY__CLICKABLE_LIST: IClickableItemProps<IClickableItemTypedClass>[] = [
  {
    name: 'install-the-app',
    title: CLICKABLE_LIST_LABELS.CLICKABLE_LIST_ITEM_FIRST_TITLE,
    description: CLICKABLE_LIST_LABELS.CLICKABLE_LIST_ITEM_FIRST_DESCRIPTION,
    icon: <FingerPrint />,
    className: {
      type: "blue",
    },
  },
  {
    name: 'login-first',
    title: CLICKABLE_LIST_LABELS.CLICKABLE_LIST_ITEM_SECOND_TITLE,
    description: CLICKABLE_LIST_LABELS.CLICKABLE_LIST_ITEM_SECOND_DESCRIPTION,
    icon: <Block />,
    className: {
      type: "red",
    },
  },
  {
    name: 'setup-your-profile',
    title: CLICKABLE_LIST_LABELS.CLICKABLE_LIST_ITEM_THIRD_TITLE,
    description: CLICKABLE_LIST_LABELS.CLICKABLE_LIST_ITEM_THIRD_DESCRIPTION,
    icon: <User />,
    className: {
      type: "green",
    },
  },
];
